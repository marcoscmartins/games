package com.sim 
{
	import fl.controls.CheckBox;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class FuncoesTrigonometricas extends Simulation 
	{
		public var seno_cb:CheckBox;
		public var cosseno_cb:CheckBox;
		public var tangente_cb:CheckBox;
		public var secante_cb:CheckBox;
		public var cossecante_cb:CheckBox;
		public var cotangente_cb:CheckBox;
		public var todos_cb:CheckBox;
		
		public var ptCotangente_mc:MovieClip;
		public var ptCossecante_mc:MovieClip;
		public var ptSecante_mc:MovieClip;	
		public var ptTangente_mc:MovieClip;
		
		public var seno_mc:MovieClip;
		public var cosseno_mc:MovieClip;
		public var tangente_mc:MovieClip;
		public var secante_mc:MovieClip;
		public var cossecante_mc:MovieClip;
		public var cotangente_mc:MovieClip;
		public var linhaSeno_mc:MovieClip;
		public var linhaCosseno_mc:MovieClip;
		public var secCossec_mc:MovieClip;
		public var tracosCotangente:MovieClip;
		public var tracosTangente:MovieClip;
		public var raio_mc:MovieClip;
		
		public var pt1_mc:MovieClip;
		public var pt2_mc:MovieClip;
		public var pt3_mc:MovieClip;
		public var pt4_mc:MovieClip;
		public var pt5_mc:MovieClip;
		
		public var iniciar_mc:MovieClip;
		public var limpar_mc:MovieClip;
		public var pausar_mc:MovieClip;
		
		public var mascTangente:MovieClip;
		public var mascCotangente:MovieClip;
		public var mCotangente:MovieClip;
		public var mCossecante:MovieClip;
		public var mSecante:MovieClip;
		public var mTangente:MovieClip;
		public var mSeno:MovieClip;
		public var mCosseno:MovieClip;
		
		public var _pi2:MovieClip;
		public var _pi:MovieClip;
		public var _3pi2:MovieClip;
		public var _2pi:MovieClip;
		public var _5pi2:MovieClip;
		public var _3pi:MovieClip;
		public var _7pi2:MovieClip;
		public var _4pi:MovieClip;
		public var _9pi2:MovieClip;
		public var _5pi:MovieClip;
		
		private var _linha:Sprite = new Sprite();
		private var _linhaCos:Sprite = new Sprite();
		private var _linhaSen:Sprite = new Sprite();
		private var _linhaTan:Sprite = new Sprite();
		
		private var _linhaSecan:Sprite = new Sprite();
		private var _linhaCosse:Sprite = new Sprite();
		private var _linhaCotan:Sprite = new Sprite();
		
		private var _angulo:Number = 0;
		private var _raio:Number = 135;
		private var _x:Number;
		private var _y:Number;
		private var _alpha:Number = 1;
		
		private var alfaTan:int = 1;
		private var alfaSecan:int = 1;
		private var alfaCosse:int = 1;
		private var alfaCotan:int = 1;
		
		private var ab:int = 0;
		private var bc:int = 0;
		private var tangente:int = 0;
		
		private var pt1:Point;
		private var pt3:Point;
		
		private var distance:Number;
		private var distSeno:Point;
		private var distCosseno:Point;
		
		private var i:int = 0;
		
		private var cb_arr:Array;
		private var container:MovieClip = new MovieClip();
		
		public function FuncoesTrigonometricas() 
		{
			inicializa();
		}
		
		private function inicializa():void 
		{
			this.addChild(container);
			
			cb_arr = new Array(seno_cb, cosseno_cb, tangente_cb, secante_cb, cossecante_cb, cotangente_cb);
			todos_cb.addEventListener(Event.CHANGE, todos);
			
			pt1_mc.a = pt1_mc.x; pt1_mc.b = pt1_mc.y;
			pt2_mc.a = pt2_mc.x; pt2_mc.b = pt2_mc.y;
			pt3_mc.a = pt3_mc.x; pt3_mc.b = pt3_mc.y;
			pt4_mc.a = pt4_mc.x; pt4_mc.b = pt4_mc.y;
			pt5_mc.a = pt5_mc.x; pt5_mc.b = pt5_mc.y;
			
			iniciar_mc.addEventListener(MouseEvent.CLICK, inicia);
			
			initChecks();
		}
		
		private function todos(e:Event):void 
		{
			if (e.target.selected == true) 
			{	
				for	(i = 0; i < cb_arr.length; i++) 
					cb_arr[i].selected = true;
			} 
			else 
			{	
				for	(i = 0; i < cb_arr.length; i++) 
					cb_arr[i].selected = false;
			}
			
			verificaBox();
		}
		
		private function initChecks():void 
		{
			_linha.graphics.moveTo(ptSecante_mc.x, ptSecante_mc.y);
			
			_linhaSen.graphics.moveTo(pt5_mc.x, pt5_mc.y);
			_linhaCos.graphics.moveTo(pt5_mc.x, pt5_mc.y - 100);
			_linhaTan.graphics.moveTo(pt5_mc.x, pt5_mc.y);
			
			_linhaSecan.graphics.moveTo(pt5_mc.x, pt5_mc.y + 100);
			_linhaCosse.graphics.moveTo(pt5_mc.x, pt5_mc.y);
			_linhaCotan.graphics.moveTo(pt5_mc.x, pt5_mc.y);
			
			addChild(_linha);
			addChild(_linhaSen);
			addChild(_linhaCos);
			addChild(_linhaTan);
			addChild(_linhaSecan);
			addChild(_linhaCosse);
			addChild(_linhaCotan);
			
			_linha.graphics.lineStyle(2, 0x000000, _alpha);
			
			_linhaSen.graphics.lineStyle(2, 0xFF0000, _alpha);
			_linhaCos.graphics.lineStyle(2, 0x00CC00, _alpha);
			_linhaTan.graphics.lineStyle(2, 0x3284A7, _alpha);
			
			_linhaSecan.graphics.lineStyle(2, 0xFFCC66, _alpha);
			_linhaCosse.graphics.lineStyle(2, 0x990000, _alpha);
			_linhaCotan.graphics.lineStyle(2, 0xAE0BF4, _alpha);
			
			for	(i = 0; i < cb_arr.length; i++) 
				cb_arr[i].addEventListener(Event.CHANGE, marcaBox);
		}
		
		private function marcaBox(e:Event):void 
		{
			verificaBox();
			if (e.target.selected == false) todos_cb.selected = false;
		}
		
		private function verificaBox():void 
		{
			var alfa:int = 0;
			
			for	(i = 0; i < cb_arr.length; i++) 
			{	
				if (cb_arr[i].selected == true) 	
					alfa = 1;
				else 	
					alfa = 0;
				
				if (cb_arr[i].name == "seno_cb")
				{
					_linhaSen.graphics.lineStyle(2, 0xFF0000, alfa);
					linhaSeno_mc.alpha = alfa;
					seno_mc.alpha = alfa;
					pt3_mc.alpha = alfa;
				}
				else if (cb_arr[i].name == "cosseno_cb")
				{
					_linhaCos.graphics.lineStyle(2, 0x00CC00, alfa);
					linhaCosseno_mc.alpha = alfa;
					cosseno_mc.alpha = alfa;
					pt4_mc.alpha = alfa;
				}
				else if (cb_arr[i].name == "tangente_cb")
				{
					alfaTan = alfa;
					tracosTangente.alpha = alfa;
					ptTangente_mc.alpha = alfa;
					_linhaTan.graphics.lineStyle(2, 0x3284A7, alfaTan);
					tangente_mc.alpha = alfa;
				}
				else if (cb_arr[i].name == "secante_cb")
				{
					alfaSecan = alfa;
					_linhaSecan.graphics.lineStyle(2, 0xFFCC66, alfa);
					secante_mc.alpha = alfa;
					ptSecante_mc.alpha = alfa;
				}
				else if (cb_arr[i].name == "cossecante_cb")
				{
					alfaCosse = alfa;
					_linhaCosse.graphics.lineStyle(2, 0x990000, alfa);
					cossecante_mc.alpha = alfa;
					ptCossecante_mc.alpha = alfa;
				}
				else if (cb_arr[i].name == "cotangente_cb")
				{
					alfaCotan = alfa;
					tracosCotangente.alpha = alfa;
					ptCotangente_mc.alpha = alfa;
					_linhaCotan.graphics.lineStyle(2, 0xAE0BF4, alfa);
					cotangente_mc.alpha = alfa;
				}
			}
		}
		
		private function init():void 
		{
			verificaBox();
			container.addEventListener(Event.ENTER_FRAME, _draw);
		}
		
		private function inicia(e:MouseEvent):void 
		{
			init();
			iniciar_mc.removeEventListener(MouseEvent.CLICK, inicia);
			pausar_mc.addEventListener(MouseEvent.CLICK, pausa);
			limpar_mc.addEventListener(MouseEvent.CLICK, limpa);
		}
		
		private function pausa(e:MouseEvent):void 
		{
			if (pausar_mc.label.text == "pausar") {
				
				container.removeEventListener(Event.ENTER_FRAME, _draw);
				pausar_mc.label.text = "continuar";
				
			} else {
				
				container.addEventListener(Event.ENTER_FRAME, _draw);
				pausar_mc.label.text = "pausar";
			}
		}
		
		private function limpa(e:MouseEvent):void 
		{
			removeChild(_linha);
			removeChild(_linhaSen);
			removeChild(_linhaCos);
			removeChild(_linhaTan);
			removeChild(_linhaSecan);
			removeChild(_linhaCosse);
			removeChild(_linhaCotan);
			
			_linha = new Sprite();
			_linhaSen = new Sprite();
			_linhaCos = new Sprite();
			_linhaTan = new Sprite();
			_linhaSecan = new Sprite();
			_linhaCosse = new Sprite();
			_linhaCotan = new Sprite();
			
			clean();
		}
		
		private function clean():void 
		{
			container.removeEventListener(Event.ENTER_FRAME, _draw);
			
			iniciar_mc.addEventListener(MouseEvent.CLICK, inicia);
			pausar_mc.removeEventListener(MouseEvent.CLICK, pausa);
			limpar_mc.addEventListener(MouseEvent.CLICK, limpa);
			
			pausar_mc.label.text = "pausar";
			
			initChecks();
			
			verificaBox();
			
			seno_mc.rotation = 0;
			seno_mc.height = 1;
			
			cosseno_mc.rotation = 0;
			cosseno_mc.width = 1;
			
			tangente_mc.width = 2;
			tangente_mc.rotation = 0;
			
			linhaSeno_mc.alpha = 0;
			linhaSeno_mc.x = -100;
			
			linhaCosseno_mc.alpha = 0;
			linhaCosseno_mc.x = -100;
			
			cotangente_mc.width = 2;
			cotangente_mc.rotation = 0;
			
			raio_mc.rotation = 0;
			
			_angulo = 0;
			
			pt3_mc.alpha = 0;
			pt4_mc.alpha = 0;
			
			pt1_mc.x = pt1_mc.a; pt1_mc.y = pt1_mc.b;
			pt2_mc.x = pt2_mc.a; pt2_mc.y = pt2_mc.b;
			pt3_mc.x = pt3_mc.a; pt3_mc.y = pt3_mc.b;
			pt4_mc.x = pt4_mc.a; pt4_mc.y = pt4_mc.b;
			pt5_mc.x = pt5_mc.a; pt5_mc.y = pt5_mc.b;
			
			secante_mc.alpha = 0;
			secante_mc.rotation = 0;
			secante_mc.width = 2;
			
			cossecante_mc.alpha = 0;
			cossecante_mc.rotation = 0;
			cossecante_mc.height = 2;
			
			ptSecante_mc.alpha = 0;
			ptSecante_mc.x = pt1_mc.x;
			ptCossecante_mc.alpha = 0;
			ptCossecante_mc.y = pt1_mc.y;
			
			ptTangente_mc.alpha = 0;
			ptTangente_mc.y = pt2_mc.y;
			
			ptCotangente_mc.alpha = 0;
			ptCotangente_mc.x = pt1_mc.x;
			
			tracosTangente.alpha = 0;
			tracosTangente.rotation = 0;
			tracosCotangente.alpha = 0;
			tracosCotangente.rotation = 0;
			
			tangente_mc.height = 2;
			tangente_mc.alpha = 0;
			
			secCossec_mc.alpha = 0;
		}
		
		private function _draw(event:Event):void 
		{	
			_linhaCos.mask = mCosseno;
			_linhaSen.mask = mSeno;
			_linhaTan.mask = mTangente;
			_linhaSecan.mask = mSecante;
			_linhaCosse.mask = mCossecante;
			_linhaCotan.mask = mCotangente;
			
			tracosTangente.mask = mascTangente;
			tracosCotangente.mask = mascCotangente;

			_x = pt1_mc.x + Math.cos(_angulo) * _raio;
			_y = pt1_mc.y - Math.sin(_angulo) * _raio;
				
			_linhaSen.graphics.lineTo(pt5_mc.x + _angulo * 30, _y);
			_linhaCos.graphics.lineTo(pt5_mc.x + _angulo * 30, 525 + (-_x));
			
			if ((pt5_mc.y - Math.tan(_angulo) * _raio / 2 > pt5_mc.y - 200) && (pt5_mc.y - Math.tan(_angulo) * _raio / 2 < pt5_mc.y + 200)) 
				_linhaTan.graphics.lineStyle(2, 0x3284A7, alfaTan);
			else 
				_linhaTan.graphics.lineStyle(2, 0x3284A7, 0);
			
			_linhaTan.graphics.lineTo(pt5_mc.x + _angulo * 30, pt5_mc.y - Math.tan(_angulo) * _raio);
			
			/**********************************/
			
			if ((pt5_mc.y + (2 / Math.cos(_angulo) * _raio / 2) > 0) && (pt5_mc.y + (2 / Math.cos(_angulo) * _raio / 2) < 500))
				_linhaSecan.graphics.lineStyle(2, 0xFFCC66, alfaSecan);
			else 
				_linhaSecan.graphics.lineStyle(2, 0xFFCC66, 0);
			
			_linhaSecan.graphics.lineTo(pt5_mc.x + _angulo * 30, pt5_mc.y - (2 / Math.cos(_angulo) * _raio / 2));
			
			if ((pt5_mc.y + (2 / Math.sin(_angulo) * _raio / 2) > 0) && (pt5_mc.y + (2 / Math.sin(_angulo) * _raio / 2) < 500))
				_linhaCosse.graphics.lineStyle(2, 0x990000, alfaCosse);
			else 
				_linhaCosse.graphics.lineStyle(2, 0x990000, 0);
			
			_linhaCosse.graphics.lineTo(pt5_mc.x + _angulo * 30, pt5_mc.y - (2 / Math.sin(_angulo) * _raio / 2));
			
			if ((pt5_mc.y - (1 / Math.tan(_angulo) * _raio / 2) > pt5_mc.y - 250) && (pt5_mc.y - (1 / Math.tan(_angulo) * _raio / 2) < pt5_mc.y + 250))
				_linhaCotan.graphics.lineStyle(2, 0xAE0BF4, alfaCotan);
			else 
				_linhaCotan.graphics.lineStyle(2, 0xAE0BF4, 0);
			
			_linhaCotan.graphics.lineTo(pt5_mc.x + _angulo * 30, pt5_mc.y - (1 / Math.tan(_angulo) * _raio / 2));
			
			/**********************************/
			
			ab = ptSecante_mc.y - ptCossecante_mc.y;
			bc = ptCossecante_mc.x - ptSecante_mc.x;
			
			tangente = Math.atan(ab / bc) * 180 / Math.PI;
			
			ptSecante_mc.x = pt1_mc.x + (2 / Math.cos(_angulo) * _raio / 2);
			
			ptCossecante_mc.y = pt1_mc.y - (2 / Math.sin(_angulo) * _raio / 2);
			
			ptTangente_mc.y = pt1_mc.y - Math.tan(_angulo) * _raio;
			
			ptCotangente_mc.x = pt1_mc.x + 1 / Math.tan(_angulo) * _raio;
			
			secante_mc.x = pt1_mc.x;
			secante_mc.y = pt1_mc.y;
			
			cossecante_mc.x = pt1_mc.x;
			cossecante_mc.y = pt1_mc.y;
			
			secCossec_mc.x = pt2_mc.x;
			secCossec_mc.y = pt2_mc.y;
			
			//---------
			
			pt3 = new Point(pt2_mc.x, pt2_mc.y);
			
			_angulo += 0.05;
			
			pt2_mc.x = _x;
			pt2_mc.y = _y;
			
			pt3_mc.y = pt2_mc.y;
			pt4_mc.x = pt2_mc.x;
			
			//_linha.graphics.lineTo(_x, _y);
			/**********************************/
			
			linhaSeno_mc.x = pt2_mc.x;
			linhaSeno_mc.y = pt2_mc.y;
			
			linhaCosseno_mc.x = pt2_mc.x;
			linhaCosseno_mc.y = pt2_mc.y;
			
			distSeno = new Point(pt3_mc.x, pt3_mc.y);
			distCosseno = new Point(pt4_mc.x, pt4_mc.y);
			
			distance = Point.distance(distSeno, pt3);
			
			linhaSeno_mc.width = distance;
			linhaSeno_mc.height = 1;
			
			distance = Point.distance(distCosseno, pt3);
			
			linhaCosseno_mc.height = distance;
			linhaCosseno_mc.width = 1;
			
			pt2_mc.x > pt1_mc.x ? linhaSeno_mc.rotation = 180 : linhaSeno_mc.rotation = 0;
			
			pt2_mc.y < pt1_mc.y ? linhaCosseno_mc.rotation = 180 : linhaCosseno_mc.rotation = 0;
			
			/**********************************/
			//seno
			
			if (pt3_mc.y < pt1_mc.y) 
			{
				seno_mc.rotation = 0;
				seno_mc.height = seno_mc.y - pt3_mc.y;	
			} 
			else 
			{	
				seno_mc.rotation = 180;
				seno_mc.height = pt3_mc.y - seno_mc.y;
			}
			
			// cosseno
			
			if (pt4_mc.x > pt1_mc.x) 
			{	
				cosseno_mc.rotation = 180;
				cosseno_mc.width = pt4_mc.x - cosseno_mc.x;
			} 
			else 
			{	
				cosseno_mc.rotation = 0;
				cosseno_mc.width = cosseno_mc.x - pt4_mc.x;
			}
			
			//tangente
			
			if (pt5_mc.y - Math.tan(_angulo) * _raio / 2 > pt5_mc.y) 
			{
				tangente_mc.rotation = 0;
				tangente_mc.height = (pt5_mc.y - Math.tan(_angulo) * _raio) - pt5_mc.y;
			}
			else 
			{
				tangente_mc.rotation = 180;	
				tangente_mc.height = pt5_mc.y - (pt5_mc.y - Math.tan(_angulo) * _raio);
			}
			
			// secante
			
			if (ptSecante_mc.x > pt1_mc.x) 
			{
				secante_mc.rotation = 0;
				secante_mc.width = ptSecante_mc.x - secante_mc.x;
			} 
			else 
			{	
				secante_mc.rotation = 180;
				secante_mc.width = secante_mc.x - ptSecante_mc.x;
			}
			
			// cossecante
			
			if (ptCossecante_mc.y < pt1_mc.y) 
			{	
				cossecante_mc.rotation = 0;
				cossecante_mc.height = cossecante_mc.y - ptCossecante_mc.y;	
			} 
			else 
			{	
				cossecante_mc.rotation = 180;
				cossecante_mc.height = ptCossecante_mc.y - cossecante_mc.y;
			}
			
			// cotangente
			
			if (pt1_mc.x + (1 / Math.tan(_angulo) * _raio / 2) > pt1_mc.x) 
			{	
				cotangente_mc.rotation = 0;
				cotangente_mc.width = 1 / Math.tan(_angulo) * _raio * 1.5;
			} 
			else 
			{	
				cotangente_mc.rotation = 180;		
				cotangente_mc.width =  - (1 / Math.tan(_angulo) * _raio);
			}
			
			secCossec_mc.rotation = -(_angulo * Math.PI) * 18.222;
			
			if ((secante_cb.selected == true) || (cossecante_cb.selected == true))
				secCossec_mc.alpha = 1;
			else 	
				secCossec_mc.alpha = 0;
			
			if (_angulo * Math.PI * 18 > 711) 
				clean();
			
			/**********************************/
			
			tracosTangente.x = pt1_mc.x;
			tracosTangente.y = pt1_mc.y;
			
			tracosCotangente.x = pt1_mc.x;
			tracosCotangente.y = pt1_mc.y;
			
			var ang:Number = (_angulo * Math.PI) * 18.222;
			
			if (((ang > 0) && (ang < 90)) || ((ang > 359) && (ang < 450))) 
			{
				tracosTangente.rotation = -(_angulo * Math.PI) * 18.222;
				tracosCotangente.rotation = -(_angulo * Math.PI) * 18.222;
			}
			
			if (((ang > 89) && (ang < 180)) || ((ang > 449) && (ang < 540))) 
			{	
				tracosTangente.rotation = -(_angulo * Math.PI) * 18.222 + 180;	
				tracosCotangente.rotation = -(_angulo * Math.PI) * 18.222;
			}
			
			if (((ang > 179) && (ang < 270)) || ((ang > 539) && (ang < 630))) 
			{
				tracosTangente.rotation = -(_angulo * Math.PI) * 18.222 + 180;
				tracosCotangente.rotation = -(_angulo * Math.PI) * 18.222 + 180;
			}
			
			if (((ang > 269) && (ang < 360)) || ((ang > 629) && (ang < 720))) 
			{
				tracosTangente.rotation = -(_angulo * Math.PI) * 18.222;
				tracosCotangente.rotation = -(_angulo * Math.PI) * 18.222 + 180;
			}
			
			/**********************************/
			
			raio_mc.rotation = -(_angulo * Math.PI) * 18.222;
		}
	}
}