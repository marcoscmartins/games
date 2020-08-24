package com.sim 
{
	import fl.controls.CheckBox;
	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.events.TransformGestureEvent;
	import flash.geom.Point;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class FuncoesCompostas extends Simulation 
	{
		public var iniciar_mc:MovieClip;
		public var pausar_mc:MovieClip;
		public var limpar_mc:MovieClip;
		public var centralizar_mc:MovieClip;
		public var seno_cb:CheckBox;
		public var cosseno_cb:CheckBox;
		
		public var sliderA_mc:MovieClip;
		public var sliderB_mc:MovieClip;
		public var sliderC_mc:MovieClip;
		public var sliderD_mc:MovieClip;
		public var loader_mc:MovieClip;
		public var grafico_mc:MovieClip;
		public var mGrafico:MovieClip;
		public var mTangente:MovieClip;
		public var btnBox_mc:MovieClip;
		public var pt_mc:MovieClip;
		public var mais:MovieClip;
		public var menos:MovieClip;
		
		private var cont:MovieClip = new MovieClip();
		private var container:MovieClip = new MovieClip();
		private var linhas:MovieClip = new MovieClip();
		
		private var _linhaSeno:Sprite = new Sprite();
		private var _linhaCosseno:Sprite = new Sprite();
		private var _linhaTangente:Sprite = new Sprite();
		private var _linhaSeno2:Sprite = new Sprite();
		private var _linhaCosseno2:Sprite = new Sprite();
		private var _linhaTangente2:Sprite = new Sprite();
		
		private var sliders:Array;
		private var cb_arr:Array;
		private var coresS:Array = [0XFFCC00, 0XFF9900, 0XFF0000, 0X990000, 0X660000];
		private var coresC:Array = [0X00FFFF, 0X00FF99, 0X66FF00, 0X009900, 0X003300];
		private var contador:int = -1;
		
		private var _angulo:Number = 0;
		private var _graus:Number = 0;
		private var _raio:Number = 100;
		private var _scala:int = 48;
		private var _alpha:int = 1;
		
		private var _x:Number = 0;
		private var _y:Number = 0;
		private var _x2:Number = 0;
		private var _y2:Number = 0;
		private var _z:Number = 0;
		private var _z2:Number = 0;
		
		private var i:int = 0;
		private var increment:Number = 0.05;
		private var alfaSen:int = 0;
		private var alfaCos:int = 0;
		private var alfaTan:int = 0;
		private var alfaTan2:int = 0;
		
		private var valor:Number = 0;
		private var valor2:Number = 0;
		
		private var ptS:Ponto;
		private var ptS2:Ponto;
		private var ptC:Ponto;
		private var ptC2:Ponto;
		
		public function FuncoesCompostas() 
		{
			init();
		}
		
		private function init():void 
		{
			this.addChild(container);
			this.addChild(linhas);
			this.addChild(cont);
			
			cb_arr = new Array(seno_cb, cosseno_cb);
			sliders = new Array(sliderA_mc, sliderB_mc, sliderC_mc, sliderD_mc);
			
			loader_mc.alpha = 0;
			
			var box:Box = new Box();
			
			box.x = btnBox_mc.x;
			box.y = btnBox_mc.y - 30;
			
			container.addChild(grafico_mc);
			container.mask = mTangente;
			container.addChild(linhas);
			container.addEventListener(MouseEvent.MOUSE_DOWN, drag);
			container.mouseChildren = false;
			container.buttonMode = true;
			container.able = false;
			
			iniciar_mc.addEventListener(MouseEvent.CLICK, inicia);
			centralizar_mc.addEventListener(MouseEvent.CLICK, centraliza);
			
			mais.addEventListener(MouseEvent.CLICK, maisZoom);
			menos.addEventListener(MouseEvent.CLICK, menosZoom);
			
			grafico_mc.mask = mGrafico;
			
			inicializaSliders();
			
			setChildIndex(mais, numChildren - 1);
			setChildIndex(menos, numChildren - 1);
		}
		
		/*private function zoomHandler(e:TransformGestureEvent):void 
		{
			grafico_mc.scaleX *= e.scaleX;
			grafico_mc.scaleY *= e.scaleX;
		}*/
		
		private function inicializaSliders():void 
		{	
			sliderA_mc.holder_mc.x = 0;
			sliderB_mc.holder_mc.x = 10;
			sliderC_mc.holder_mc.x = 10;
			sliderD_mc.holder_mc.x = 0;
			
			sliderA_mc._txt.text = "0";
			sliderB_mc._txt.text = "1";
			sliderC_mc._txt.text = "1";
			sliderD_mc._txt.text = "0";
			
			sliderA_mc.holder_mc.valor = 0;
			sliderB_mc.holder_mc.valor = 1;
			sliderC_mc.holder_mc.valor = 1;
			sliderD_mc.holder_mc.valor = 0;
			
			sliderA_mc.holder_mc.diver = 10;
			sliderB_mc.holder_mc.diver = 10;
			sliderC_mc.holder_mc.diver = 10;
			sliderD_mc.holder_mc.diver = 10;
		}
		
		private function inicia(evt:MouseEvent):void 
		{
			_inicializa();
			
			pausar_mc.label.text = "pausar";
			//iniciar_mc.removeEventListener(MouseEvent.CLICK, inicia);
			iniciar_mc.mouseEnabled = false;
			pausar_mc.addEventListener(MouseEvent.CLICK, pausa);
			limpar_mc.addEventListener(MouseEvent.CLICK, limpa);
		}
		
		private function centraliza(e:MouseEvent):void 
		{
			container.scaleX = 1;
			container.scaleY = 1;
			container.x = 0;
			container.y = 0;
		}
		
		private function limpa(e:MouseEvent):void 
		{
			limpaContainer();
			
			container.scaleX = 1;
			container.scaleY = 1;
			container.x = 0;
			container.y = 0;
			
			loader_mc.alpha = 0;
			
			_clean();
		}
		
		private function pausa(e:MouseEvent):void 
		{
			if (pausar_mc.label.text == "pausar") 
			{	
				cont.removeEventListener(Event.ENTER_FRAME, _draw);	
				pausar_mc.label.text = "continuar";
			} 
			else 
			{
				cont.addEventListener(Event.ENTER_FRAME, _draw);
				pausar_mc.label.text = "pausar";
			}
		}
		
		private function _inicializa():void
		{
			loader_mc.alpha = 1;
			
			linhas.addChild(_linhaSeno);
			linhas.addChild(_linhaCosseno);
			linhas.addChild(_linhaTangente);
			linhas.addChild(_linhaSeno2);
			linhas.addChild(_linhaCosseno2);
			linhas.addChild(_linhaTangente2);
			
			_linhaSeno.graphics.moveTo(pt_mc.x, _y);
			_linhaCosseno.graphics.moveTo(pt_mc.x, 345 - _x);
			_linhaSeno2.graphics.moveTo(pt_mc.x, _y2);
			_linhaCosseno2.graphics.moveTo(pt_mc.x, 345 -_x2);
			
			cont.addEventListener(Event.ENTER_FRAME, _draw);
			
			for	(i = 0; i < cb_arr.length; i++) 
				cb_arr[i].addEventListener(Event.CHANGE, marcaBox);
			
			_check();
			
			mudaCor();
		}
		
		private function drag(e:MouseEvent):void {
			
			e.target.startDrag(false);
			
			if (container.scaleX < 0.23) 
				container.x = container.x;
			
			stage.addEventListener(MouseEvent.MOUSE_UP, drop);
			e.target.addEventListener(MouseEvent.MOUSE_MOVE, _move);
		}
		
		private function drop(e:MouseEvent):void 
		{
			stopDrag();
			e.target.removeEventListener(MouseEvent.MOUSE_MOVE, _move);
		}
		
		private function _move(e:MouseEvent):void 
		{	
			limita();
		}
		
		private function limita():void 
		{	
			var pointYN:Point = new Point(grafico_mc.yneg.x, grafico_mc.yneg.y);
			var pointYP:Point = new Point(grafico_mc.ypos.x, grafico_mc.ypos.y);
			var pointXN:Point = new Point(grafico_mc.xneg.x, grafico_mc.xneg.y);
			var pointXP:Point = new Point(grafico_mc.xpos.x, grafico_mc.xpos.y);
			
			if (grafico_mc.localToGlobal(pointYN).y > 20) 
			{	
				while (grafico_mc.localToGlobal(pointYN).y > 10)
					container.y -= 10;
				
				stopDrag();
			}
			
			if (grafico_mc.localToGlobal(pointYP).y < 430) 
			{	
				while(grafico_mc.localToGlobal(pointYP).y < 430) 
					container.y += 10;
				
				stopDrag();
			}
			
			if (grafico_mc.localToGlobal(pointXN).x > 10) 
			{
				while(grafico_mc.localToGlobal(pointXN).x > 10) 
					container.x -= 10;
				
				stopDrag();
			}
			
			if (grafico_mc.localToGlobal(pointXP).x < 950) 
			{	
				while(grafico_mc.localToGlobal(pointXP).x < 950) 
					container.x += 10;
				
				stopDrag();
			}
		}
		
		private function marcaBox(evt:Event):void 
		{
			_check();
		}
		
		private function _check():void 
		{	
			var alfa:int = 0;
			
			for	(i = 0; i < cb_arr.length; i++) 
			{	
				alfa = cb_arr[i].selected == true ? 1 : 0;
				trace(cb_arr[i].selected, alfa);
				
				if (cb_arr[i].name == "seno_cb") 
					alfaSen = alfa;
				else
					alfaCos = alfa;
			}
		}
		
		private function disable(_boolean):void 
		{	
			for (i = 0; i < sliders.length; i++) 
			{	
				sliders[i].enabled = _boolean;
				sliders[i].mouseChildren = _boolean;
			}
		}
		
		private function _draw(evt:Event):void 
		{	
			container.mask = mTangente;
			
			_x = pt_mc.x + (sliderA_mc.holder_mc.valor + (sliderB_mc.holder_mc.valor * Math.cos((sliderC_mc.holder_mc.valor * _angulo) + sliderD_mc.holder_mc.valor))) * _raio;
			_y = pt_mc.y - (sliderA_mc.holder_mc.valor + (sliderB_mc.holder_mc.valor * Math.sin((sliderC_mc.holder_mc.valor * _angulo) + sliderD_mc.holder_mc.valor))) * _raio;
			
			_x2 = pt_mc.x + (sliderA_mc.holder_mc.valor + (sliderB_mc.holder_mc.valor * Math.cos((sliderC_mc.holder_mc.valor * _angulo) - sliderD_mc.holder_mc.valor))) * _raio;
			_y2 = pt_mc.y + (-sliderA_mc.holder_mc.valor + (sliderB_mc.holder_mc.valor * Math.sin((sliderC_mc.holder_mc.valor * _angulo) - sliderD_mc.holder_mc.valor))) * _raio;
			_z = pt_mc.y - (sliderA_mc.holder_mc.valor + (sliderB_mc.holder_mc.valor * Math.tan((sliderC_mc.holder_mc.valor * _angulo) + sliderD_mc.holder_mc.valor))) * _raio;
			_z2 = pt_mc.y + (-sliderA_mc.holder_mc.valor + (sliderB_mc.holder_mc.valor * Math.tan((sliderC_mc.holder_mc.valor * _angulo) - sliderD_mc.holder_mc.valor))) * _raio;
			
			/*if ((valor < 0) && (_z > 0) && (sliderC_mc.holder_mc.valor > 0)) 	
				_linhaTangente.graphics.lineStyle(2, 0x3283A7, 0);
			else if ((valor > 0) && (_z < 0) && (sliderC_mc.holder_mc.valor < 0)) 	
				_linhaTangente.graphics.lineStyle(2, 0x3283A7, 0);
			
			if ((valor2 > 0) && (_z2 < 0) && (sliderC_mc.holder_mc.valor > 0)) 
				_linhaTangente2.graphics.lineStyle(2, 0x3283A7, 0);
			else if ((valor2 < 0) && (_z2 > 0) && (sliderC_mc.holder_mc.valor < 0)) 
				_linhaTangente2.graphics.lineStyle(2, 0x3283A7, 0);*/
			
			_linhaSeno.graphics.lineTo(pt_mc.x + _angulo * _scala, _y);
			_linhaCosseno.graphics.lineTo(pt_mc.x + _angulo * _scala, 273 -_x);
			//_linhaTangente.graphics.lineTo(pt_mc.x + _angulo * _scala, _z);
			_linhaSeno2.graphics.lineTo(pt_mc.x - _angulo * _scala, _y2);
			_linhaCosseno2.graphics.lineTo(pt_mc.x - _angulo * _scala, 273 -_x2);
			//_linhaTangente2.graphics.lineTo(pt_mc.x - _angulo * _scala, _z2);
			
			_graus = _angulo * 180 / Math.PI;
			
			valor = _z;
			valor2 = _z2;
			
			if (_graus > 1800)
			{	
				cont.removeEventListener(Event.ENTER_FRAME, _draw);
				
				_clean();
				
				disable(true);
				
				alfaSen = 0;
				alfaCos = 0;
				alfaTan = 0;
				alfaTan2 = 0;
				
				loader_mc.alpha = 0;
			}
			
			_linhaSeno.graphics.lineStyle(2, coresS[contador], alfaSen);
			_linhaCosseno.graphics.lineStyle(2, coresC[contador], alfaCos);
			_linhaTangente.graphics.lineStyle(2, 0x3283A7, alfaTan);
			_linhaSeno2.graphics.lineStyle(2, coresS[contador], alfaSen);
			_linhaCosseno2.graphics.lineStyle(2, coresC[contador], alfaCos);
			_linhaTangente2.graphics.lineStyle(2, 0x3283A7, alfaTan2);
			
			loader_mc.loaderPiece_mc.rotation += 6;
			
			_angulo += increment;
		}
		
		private function _clean():void {
			
			disable(true);
			
			_angulo = 0;
			
			cont.removeEventListener(Event.ENTER_FRAME, _draw);
			
			_linhaSeno = new Sprite();
			_linhaCosseno = new Sprite();
			_linhaTangente = new Sprite();
			
			_linhaSeno2 = new Sprite();
			_linhaCosseno2 = new Sprite();
			_linhaTangente2 = new Sprite();
			
			iniciar_mc.addEventListener(MouseEvent.CLICK, inicia);
			pausar_mc.removeEventListener(MouseEvent.CLICK, pausa);
			limpar_mc.addEventListener(MouseEvent.CLICK, limpa);
			
			pausar_mc.label.text = "pausar";
		}
		
		private function limpaContainer():void 
		{
			linhas.removeChildren();
		}
		
		private function maisZoom(e:MouseEvent):void 
		{
			var mod:Number = 100;
			
			var s:Number = container.scaleX + 0.1;
			scaleAround(container.x, container.y, s, s);
			
			limita();
		}
		
		private function menosZoom(e:MouseEvent):void 
		{	
			var mod:Number = 100;
			
			var s:Number = container.scaleX - 0.1;
			scaleAround(container.x, container.y, s, s);
			
			container.scaleX = container.scaleY = container.scaleX < 0.35 ? 0.36 : container.scaleX;
			
			limita();
		}
		
		/**
        * Scale around an arbitrary centre point
        * @param Number local horizontal offset from 'real' registration point
        * @param Number local vertical offset from 'real' registration point
        * @param Number relative scaleX increase; e.g. 2 to double, 0.5 to half
        * @param Number relative scaleY increase
        */ 
		private function scaleAround( offsetX:Number, offsetY:Number, absScaleX:Number, absScaleY:Number ):void 
		{ 
			 // scaling will be done relatively 
			 var relScaleX:Number = absScaleX / container.scaleX; 
			 var relScaleY:Number = absScaleY / container.scaleY; 
			 // map vector to centre point within parent scope 
			 var AC:Point = new Point( offsetX, offsetY ); 
			 AC = container.localToGlobal( AC ); 
			 AC = container.parent.globalToLocal( AC ); 
			 // current registered postion AB 
			 var AB:Point = new Point( container.x, container.y ); 
			 // CB = AB - AC, this vector that will scale as it runs from the centre 
			 var CB:Point = AB.subtract( AC ); 
			 CB.x *= relScaleX; 
			 CB.y *= relScaleY; 
			 // recaulate AB, this will be the adjusted position for the clip 
			 AB = AC.add( CB ); 
			 // set actual properties 
			 container.scaleX *= relScaleX; 
			 container.scaleY *= relScaleY; 
			 container.x = AB.x; 
			 container.y = AB.y; 
		} 
		
		private function mudaCor():void {
			
			if (contador < 4) 
				contador++;
			else 
				contador = 0;
		}
	}
}