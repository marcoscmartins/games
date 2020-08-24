package com.sim 
{
	import com.core.Core;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	import flash.text.TextField;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class CicloTrigonometrico extends Simulation 
	{
		public var pt1_mc:MovieClip;
		public var pt2_mc:MovieClip;
		public var pt3_mc:MovieClip;
		public var pt4_mc:MovieClip;
		public var raio_mc:MovieClip;
		public var ptTangente_mc:MovieClip;
		
		public var linhaSeno_mc:MovieClip;
		public var linhaCosseno_mc:MovieClip;
		public var seno_mc:MovieClip;
		public var cosseno_mc:MovieClip;
		public var tangente_mc:MovieClip;
		public var APonto_mc:MovieClip;
		public var aAngulo_mc:MovieClip;
		public var infinito_mc:MovieClip;
		public var cicloInterno_mc:MovieClip;
		public var tracosTangente:MovieClip;
		
		public var angulo_txt:TextField;
		public var ptA_txt:TextField;
		public var sen_txt:TextField;
		public var cos_txt:TextField;
		public var tg_txt:TextField;
		public var a_txt:TextField;
		public var b_txt:TextField;
		// mascaras
		public var mascTangente:MovieClip;
		public var mascPonto_mc:MovieClip;
		public var fundoCiclo_mc:MovieClip;
		// private 
		private var _raio:Number = 200;
		private var _x:Number;
		private var _y:Number;
		private var _alpha:Number = 1;
		
		private var _linha:Sprite = new Sprite();
		private var _xA:Number;
		private var _yA:Number;
		
		private var ab:int = 0;
		private var bc:int = 0;
		private var tangente:int = 0;
		private var frame:int = 0;
		
		private var pt3:Point;
		private var distance:Number;
		private var distSeno:Point;
		private var distCosseno:Point;
		
		public function CicloTrigonometrico() 
		{
			initCampos();
		}
		
		private function initCampos():void 
		{
			angulo_txt.text = "0";
			//angulo_txt.addEventListener(Event.CHANGE, mudaAngulo);
			
			sen_txt.text = "0";
			cos_txt.text = "1";
			
			a_txt.text = sen_txt.text;
			b_txt.text = cos_txt.text;
			
			tg_txt.text = "0";
			
			ptA_txt.text = "(" + b_txt.text + ", " + a_txt.text + ")";
			
			seno_mc.x = pt1_mc.x;
			seno_mc.y = pt1_mc.y;
			
			cosseno_mc.x = pt1_mc.x;
			cosseno_mc.y = pt1_mc.y;
			
			tangente_mc.x = pt4_mc.x;
			tangente_mc.y = pt4_mc.y;
			
			pt2_mc.buttonMode = true;
			pt2_mc.addEventListener(MouseEvent.MOUSE_DOWN, clique);
			//pt2_mc.addEventListener(MouseEvent.MOUSE_OVER, over);
			//pt2_mc.addEventListener(MouseEvent.MOUSE_OUT, out);
		}
		
		private function clique(e:MouseEvent):void 
		{
			stage.addEventListener(MouseEvent.MOUSE_UP, solta);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, draw);
		}
		
		private function solta(e:MouseEvent):void 
		{
			stage.removeEventListener(MouseEvent.MOUSE_UP, solta);
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, draw);
		}
		
		private function draw(e:MouseEvent):void 
		{
			configure();
			
			ab = mouseY - pt1_mc.y;
			bc = pt1_mc.x - mouseX;
			
			if (mouseX > pt1_mc.x) 
			{	
				Core.angulo = Math.atan(ab / bc);	
				tracosTangente.rotation = -(Core.angulo * Math.PI) * 18.222;
			} 
			else 
			{	
				Core.angulo = Math.atan(ab / bc) + Math.PI;
				tracosTangente.rotation = -(Core.angulo * Math.PI) * 18.222 + 180;
			}
			
			if ((bc == 0) && (mouseY > pt1_mc.y)) 
			{	
				Core.angulo = 90 * Math.PI / 180 + Math.PI;
				tracosTangente.rotation = -(Core.angulo * Math.PI) * 18.222 + 180;
			}
			else if ((bc == 0) && (mouseY < pt1_mc.y)) 
			{	
				Core.angulo = 90 * Math.PI / 180;
				tracosTangente.rotation = -(Core.angulo * Math.PI) * 18.222;
			}
			
			/***************/
			
			sen_txt.text = String(Math.round(Math.sin(Core.angulo) * 100) / 100);
			cos_txt.text = String(Math.round(Math.cos(Core.angulo) * 100) / 100);
			
			a_txt.text = sen_txt.text;
			b_txt.text = cos_txt.text;
			
			angulo_txt.text = String(Math.ceil(Core.angulo * Math.PI * 18.222));
			
			ptA_txt.text = "(" + b_txt.text + ", " + a_txt.text + ")";
			
			cicloInterno_mc.gotoAndStop(Math.floor(Core.angulo * Math.PI * 18.222));
			
			if ((mouseX >= pt1_mc.x) && (mouseY >= pt1_mc.y))
			{
				if (bc == 0) 
				{	
					angulo_txt.text = String(Math.round(Core.angulo * Math.PI * 18.222) + 1);	
					cicloInterno_mc.gotoAndStop(Math.round(Core.angulo * Math.PI * 18.222));
				}
				else 
				{	
					angulo_txt.text = String(Math.round((Core.angulo + (2 * Math.PI)) * Math.PI * 18.222));	
					cicloInterno_mc.gotoAndStop(Math.round(Core.angulo * Math.PI * 18.222) + 360);
				}
			}
			
			if (Number(angulo_txt.text) == 360)
			{	
				if (frame == 360) 
				{	
					angulo_txt.text = "360";
					cicloInterno_mc.gotoAndStop(360);	
				}
				else 
				{	
					angulo_txt.text = "0";
					cicloInterno_mc.gotoAndStop(1);
				}
			}
			
			tg_txt.text = String(Math.round((Number(sen_txt.text) / Number(cos_txt.text)) * 100) / 100);
			
			if (tg_txt.text == "-Infinity") {
				
				infinito_mc.alpha = 1;
				infinito_mc.gotoAndStop(2);
				
				tg_txt.text = "";
				
			} else if (tg_txt.text == "Infinity") {
				
				infinito_mc.alpha = 1;
				infinito_mc.gotoAndStop(1);
				
				tg_txt.text = "";
				
			} else {
				
				infinito_mc.alpha = 0;
			}
			
			_x = pt1_mc.x + Math.cos(Core.angulo) * _raio;
			_y = pt1_mc.y - Math.sin(Core.angulo) * _raio;	
			
			pt2_mc.x = _x;
			pt2_mc.y = _y;
			
			aAngulo_mc.x = pt1_mc.x + Math.cos(Core.angulo - 0.5) * 50;
			aAngulo_mc.y = pt1_mc.y - Math.sin(Core.angulo - 0.5) * 50;
			
			pt3_mc.y = pt2_mc.y;
			pt4_mc.x = pt2_mc.x;
			
			// seno
			
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
			
			if (pt1_mc.y - Math.tan(Core.angulo) * _raio / 2 > pt1_mc.y)
			{
				tangente_mc.rotation = 0;
				tangente_mc.height = (pt1_mc.y - Math.tan(Core.angulo) * _raio) - pt1_mc.y;	
			} 
			else 
			{
				tangente_mc.rotation = 180;	
				tangente_mc.height = pt1_mc.y - (pt1_mc.y - Math.tan(Core.angulo) * _raio);
			}
			
			ptTangente_mc.y = pt1_mc.y - Math.tan(Core.angulo) * _raio;
			
			/* ***********************/
			
			pt3 = new Point(pt2_mc.x, pt2_mc.y);
			
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
			
			raio_mc.rotation = -(Core.angulo * Math.PI) * 18.222;
			
			raio_mc.rotation > 0 ? APonto_mc.y = pt2_mc.y + 30 : APonto_mc.y = pt2_mc.y - 30;

			APonto_mc.x = pt2_mc.x;
			
			frame = cicloInterno_mc.currentFrame;
		}
		
		private function configure():void 
		{
			tracosTangente.mask = mascTangente;
			ptTangente_mc.mask = mascPonto_mc;
			tangente_mc.mask = fundoCiclo_mc;
			
			tracosTangente.x = pt1_mc.x; 
			tracosTangente.y = pt1_mc.y;
		}
	}
}