package com.sim 
{
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Razoes extends Simulation 
	{
		public var pt1_mc:MovieClip;
		public var pt2_mc:MovieClip;
		public var pt3_mc:MovieClip;
		public var ptA_mc:MovieClip;
		public var ptB_mc:MovieClip;
		public var ptC_mc:MovieClip;
		public var ce_mc:MovieClip;
		public var a_mc:MovieClip;
		public var oposto_mc:MovieClip;
		public var adjacente_mc:MovieClip;
		public var hipotenusa_mc:MovieClip;
		public var anguloreto_mc:MovieClip;
		
		public var _txt:TextField;
		public var senCO_txt:TextField;
		public var senH_txt:TextField;
		public var cosCA_txt:TextField;
		public var cosH_txt:TextField;
		public var tgCO_txt:TextField;
		public var tgCA_txt:TextField;
		public var sen_txt:TextField;
		public var cos_txt:TextField;
		public var tg_txt:TextField;
		
		private var pontos:Array;
		private var i:int = 0;
		private var scala:int = 30;	
		private var _angulo:Number = 0;
		private var _graus:Number = 0;
		private var _tangente:Number = 0;
		private var _alpha:int = 1;
		
		private var ab:Number = 0;
		private var bc:Number = 0;
		
		private var ponto_str:String = "";
		
		private var adjacente:Sprite = new Sprite;
		private var hipotenusa:Sprite = new Sprite;
		private var oposto:Sprite = new Sprite;
		
		private var situacao:int = 1;
		
		public function Razoes() 
		{
			pontos = [pt1_mc, pt2_mc, pt3_mc];
			
			inicializa();
		}
		
		private function inicializa():void 
		{
			addChild(adjacente);
			addChild(hipotenusa);
			addChild(oposto);
			
			for (i = 0; i < pontos.length; i++) 
			{	
				pontos[i].buttonMode = true;
				pontos[i].mouseChildren = false;
				pontos[i].addEventListener(MouseEvent.MOUSE_DOWN, drag);
			}
			
			triangulo("m");
			
			setChildIndex(pt1_mc, numChildren - 1);
			setChildIndex(pt2_mc, numChildren - 1);
			setChildIndex(pt3_mc, numChildren - 1);
		}
		
		private function drag(evt:MouseEvent):void 
		{	
			evt.currentTarget.gotoAndStop(2);
			
			ponto_str = evt.currentTarget.name;	
			stage.addEventListener(MouseEvent.MOUSE_UP, drop);
			this[ponto_str].addEventListener(MouseEvent.MOUSE_MOVE, _mousemove);
		}
		
		private function drop(evt:MouseEvent):void 
		{	
			this[ponto_str].gotoAndStop(1);
			this[ponto_str].removeEventListener(MouseEvent.MOUSE_MOVE, _mousemove);
		}
		
		private function _mousemove(evt:MouseEvent):void 
		{
			setChildIndex(evt.currentTarget as MovieClip, this.numChildren - 1);
			
			if (evt.currentTarget.name == "pt1_mc")
			{	
				evt.currentTarget.x = mouseX;	
				evt.currentTarget.y = mouseY;
				
				pt2_mc.y = evt.currentTarget.y;
			} 
			else if (evt.currentTarget.name == "pt2_mc") 
			{	
				evt.currentTarget.x = mouseX;	
				evt.currentTarget.y = mouseY;
				
				pt3_mc.x = evt.currentTarget.x;
				pt1_mc.y = evt.currentTarget.y;
				
			} 
			else if (evt.currentTarget.name == "pt3_mc") 
			{	
				evt.currentTarget.x = pt2_mc.x;	
				evt.currentTarget.y = mouseY;
			}
			
			sobe();
			triangulo("m");
		}
		
		private function triangulo(tipo:String):void 
		{
			ce_mc.x = pt1_mc.x;
			ce_mc.y = pt1_mc.y;
			
			drawHipotenusa();
			drawOposto();
			drawAdjacente();
			
			ab = pt1_mc.y - pt3_mc.y;
			bc = pt2_mc.x - pt1_mc.x;

			_tangente = ab / bc;
			_angulo = Math.atan(_tangente);
			_graus = (_angulo * 180) / Math.PI;
			
			if (_graus < 0) 
				_graus = _graus + 360;
			
			if (tipo == "m") 
			{	
				if ((pt1_mc.x < pt2_mc.x) && (pt3_mc.y < pt2_mc.y)) 
				{	
					situacao = 1;
					
					ce_mc.gotoAndStop(1);
					ce_mc.ciclo_mc.gotoAndStop(Math.round(_graus));
					
					_txt.text = String(Math.round(_graus * 100) / 100);
					
					posicionaAlfa("+","-");	
				}
				else if ((pt1_mc.x > pt2_mc.x) && (pt3_mc.y > pt2_mc.y)) 
				{	
					situacao = 2;
					
					ce_mc.gotoAndStop(2);
					ce_mc.ciclo2_mc.gotoAndStop(Math.round(_graus));
					
					_txt.text = String(Math.round(_graus * 100) / 100);
					
					posicionaAlfa("-","+");
					
				}
				else if ((pt1_mc.x < pt2_mc.x) && (pt3_mc.y > pt2_mc.y)) 
				{	
					situacao = 3;
					
					ce_mc.gotoAndStop(3);
					ce_mc.ciclo3_mc.gotoAndStop(Math.round(360 - _graus));
					
					_txt.text = String(Math.round((360 - _graus) * 100) / 100);
					
					posicionaAlfa("+","+");
					
				}
				else if ((pt1_mc.x > pt2_mc.x) && (pt3_mc.y < pt2_mc.y)) 
				{	
					situacao = 4;
					
					ce_mc.gotoAndStop(4);
					ce_mc.ciclo4_mc.gotoAndStop(Math.round(360 - _graus));
					
					_txt.text = String(Math.round((360 - _graus) * 100) / 100);
					
					posicionaAlfa("-","-");
				}
			}
			
			if (pt1_mc.x > pt2_mc.x) 
			{
				oposto_mc.x = pt2_mc.x - 50;
				oposto_mc.y = pt2_mc.y - ((pt2_mc.y - pt3_mc.y) / 2);
				
				hipotenusa_mc.x = pt1_mc.x + bc / 2 + 30;
				hipotenusa_mc.y = pt1_mc.y - ab / 2 - 20;
				
				ptA_mc.x = pt1_mc.x + 20;
				ptA_mc.y = pt1_mc.y + 20;
				
				ptB_mc.x = pt2_mc.x - 20;
				ptB_mc.y = pt2_mc.y + 20;
				
				ptC_mc.x = pt3_mc.x - 20;
				ptC_mc.y = pt3_mc.y - 20;
				
				anguloreto_mc.x = pt2_mc.x + 15;
				
			} 
			else 
			{
				oposto_mc.x = pt2_mc.x + 50;
				oposto_mc.y = pt2_mc.y - ((pt2_mc.y - pt3_mc.y) / 2);
				
				hipotenusa_mc.x = pt1_mc.x + bc / 2 - 40;
				hipotenusa_mc.y = pt1_mc.y - ab / 2 - 20;
				
				ptA_mc.x = pt1_mc.x - 20;
				ptA_mc.y = pt1_mc.y + 20;
				
				ptB_mc.x = pt2_mc.x + 20;
				ptB_mc.y = pt2_mc.y + 20;
				
				ptC_mc.x = pt3_mc.x + 20;
				ptC_mc.y = pt3_mc.y - 20;
				
				anguloreto_mc.x = pt2_mc.x - 15;
			}
			
			if (pt3_mc.y < pt2_mc.y) 
			{	
				adjacente_mc.x = pt1_mc.x + bc / 2;
				adjacente_mc.y = pt1_mc.y + 30;
				
				anguloreto_mc.rotation = 0;
			} 
			else 
			{	
				adjacente_mc.x = pt1_mc.x + bc / 2;
				adjacente_mc.y = pt1_mc.y - 30;
				
				anguloreto_mc.rotation = 180;
			}
			
			anguloreto_mc.y = pt2_mc.y;
			
			updateCampos();
		}
		
		/**
		 * Atualiza os campos
		 */
		private function updateCampos():void 
		{
			senCO_txt.text = String(Math.round(Math.abs((pt2_mc.y - pt3_mc.y) / scala * 1000)) / 1000);
			senH_txt.text = String(Math.round(Math.sqrt((Math.pow(ab, 2) + Math.pow(bc, 2)))/ scala * 1000) / 1000);
			sen_txt.text = String(Math.round((Number(senCO_txt.text) / Number(senH_txt.text)) * 1000) / 1000);
			
			cosCA_txt.text = String(Math.round(Math.abs((pt2_mc.x - pt1_mc.x) / scala * 1000)) / 1000);
			cosH_txt.text = senH_txt.text;
			cos_txt.text = String(Math.round((Number(cosCA_txt.text) / Number(cosH_txt.text)) * 1000) / 1000);
				
			tgCO_txt.text = senCO_txt.text;
			tgCA_txt.text = cosCA_txt.text;
			tg_txt.text = String(Math.round((Number(tgCO_txt.text) / Number(tgCA_txt.text)) * 1000) / 1000);
			
			hipotenusa_mc._txt.text = senH_txt.text;
			oposto_mc._txt.text = senCO_txt.text;
			adjacente_mc._txt.text = cosCA_txt.text;
		}
		
		private function drawAdjacente():void 
		{
			adjacente.graphics.clear();
			adjacente.graphics.lineStyle(3, 0x063957, _alpha);
			adjacente.graphics.moveTo(pt2_mc.x, pt2_mc.y);
			adjacente.graphics.lineTo(pt1_mc.x, pt1_mc.y);
		}
		
		private function drawOposto():void 
		{
			oposto.graphics.clear();
			oposto.graphics.lineStyle(3, 0xFF2626, _alpha);
			oposto.graphics.moveTo(pt2_mc.x, pt2_mc.y);
			oposto.graphics.lineTo(pt3_mc.x, pt3_mc.y);
		}
		
		private function drawHipotenusa():void 
		{
			hipotenusa.graphics.clear();
			hipotenusa.graphics.lineStyle(3, 0xAE0BF4, _alpha);
			hipotenusa.graphics.moveTo(pt1_mc.x, pt1_mc.y);
			hipotenusa.graphics.lineTo(pt3_mc.x, pt3_mc.y);
		}
		
		private function posicionaAlfa(sinal1:String, sinal2:String):void 
		{
			if ((sinal1 == "+") && (sinal2 == "-")) 
			{	
				a_mc.x = pt1_mc.x + 55 * (Math.cos(Number(_txt.text) * Math.PI / 360));
				a_mc.y = pt1_mc.y - 55 * (Math.sin(Number(_txt.text) * Math.PI / 360));
			} 
			else if ((sinal1 == "-") && (sinal2 == "+")) 
			{	
				a_mc.x = pt1_mc.x - 55 * (Math.cos(Number(_txt.text) * Math.PI / 360));
				a_mc.y = pt1_mc.y + 55 * (Math.sin(Number(_txt.text) * Math.PI / 360));
			} 
			else if ((sinal1 == "+") && (sinal2 == "+")) 
			{	
				a_mc.x = pt1_mc.x + 55 * (Math.cos(Number(_txt.text) * Math.PI / 360));
				a_mc.y = pt1_mc.y + 55 * (Math.sin(Number(_txt.text) * Math.PI / 360));
			} 
			else if ((sinal1 == "-") && (sinal2 == "-")) 
			{	
				a_mc.x = pt1_mc.x - 55 * (Math.cos(Number(_txt.text) * Math.PI / 360));	
				a_mc.y = pt1_mc.y - 55 * (Math.sin(Number(_txt.text) * Math.PI / 360));
			}
		}
		
		private function sobe():void 
		{
			setChildIndex(ptA_mc, numChildren - 1);
			setChildIndex(ptB_mc, numChildren - 1);
			setChildIndex(ptC_mc, numChildren - 1);
			setChildIndex(hipotenusa_mc, numChildren - 1);
			setChildIndex(oposto_mc, numChildren - 1);
			setChildIndex(adjacente_mc, numChildren - 1);
			setChildIndex(this[ponto_str] as MovieClip, numChildren - 1);
			
			//setChildIndex(pt1_mc, numChildren - 1);
			//setChildIndex(pt2_mc, numChildren - 1);
			//setChildIndex(pt3_mc, numChildren - 1);
		}
	}
}