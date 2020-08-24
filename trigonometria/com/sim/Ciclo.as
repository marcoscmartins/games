package com.sim 
{
	import com.core.Calculus;
	import com.core.Core;
	import flash.display.MovieClip;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.geom.Point;
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Ciclo extends MovieClip
	{
		public var pt1_mc:MovieClip, pt2_mc:MovieClip, pt3_mc:MovieClip, pt4_mc:MovieClip, pt5_mc:MovieClip, pt6_mc:MovieClip, pt7_mc:MovieClip;
		public var linhaSeno_mc:MovieClip;
		public var linhaSeno2_mc:MovieClip;
		public var linhaCosseno_mc:MovieClip;
		public var linhaCosseno2_mc:MovieClip;
		public var seno_mc:MovieClip;
		public var seno2_mc:MovieClip;
		public var cosseno_mc:MovieClip;
		public var cosseno2_mc:MovieClip;
		public var tangente_mc:MovieClip;
		public var tangente2_mc:MovieClip;
		public var cicloInterno_mc:MovieClip;
		public var cicloInterno2_mc:MovieClip;
		public var aAngulo_mc:MovieClip;
		public var bAngulo_mc:MovieClip;
		public var APonto_mc:MovieClip;
		public var AlinhaPonto_mc:MovieClip;
		public var ptTangente_mc:MovieClip;
		public var ptTangente2_mc:MovieClip;
		public var tracosTangente:MovieClip;
		public var tracosTangente2:MovieClip;
		// mascaras
		public var mascPonto_mc:MovieClip;
		public var mascPonto2_mc:MovieClip;
		public var mascTangente:MovieClip;
		public var mascTangente2:MovieClip;
		public var fundoCiclo_mc:MovieClip;
		public var fundoCiclo2_mc:MovieClip;
		
		public var raio_mc:MovieClip;
		public var raio2_mc:MovieClip;
		
		//private var _angulo:Number = 0;
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
		
		private var pt3:Point;
		private var pt5:Point;
		private var distance:Number;
		private var distSeno:Point;
		private var distCosseno:Point;
		private var distSeno2:Point;
		private var distCosseno2:Point;
		
		var intervalo:Number = 0;
		
		public function Ciclo() 
		{
			inicializa();
			Math
		}
		
		private function inicializa():void 
		{
			configure();
			
			seno_mc.x = pt1_mc.x;
			seno_mc.y = pt1_mc.y;
			
			seno2_mc.x = pt1_mc.x;
			seno2_mc.y = pt1_mc.y;
			
			cosseno_mc.x = pt1_mc.x;
			cosseno_mc.y = pt1_mc.y;
			
			cosseno2_mc.x = pt1_mc.x;
			cosseno2_mc.y = pt1_mc.y;
			
			tangente_mc.x = pt4_mc.x;
			tangente_mc.y = pt4_mc.y;
			
			tangente2_mc.x = pt4_mc.x;
			tangente2_mc.y = pt4_mc.y;
			
			pt2_mc.buttonMode = true;
			pt2_mc.mouseChildren = false;
			pt2_mc.addEventListener(MouseEvent.MOUSE_DOWN, clique);
			pt2_mc.addEventListener(MouseEvent.MOUSE_OVER, over);
			pt2_mc.addEventListener(MouseEvent.MOUSE_OUT, out);
			
			tracosTangente.mask = mascTangente;
			tracosTangente2.mask = mascTangente2;
			ptTangente_mc.mask = mascPonto_mc;
			ptTangente2_mc.mask = mascPonto2_mc;
			tangente_mc.mask = fundoCiclo_mc;
			tangente2_mc.mask = fundoCiclo2_mc;
		}
		
		private function clique(e:MouseEvent):void 
		{
			stage.addEventListener(MouseEvent.MOUSE_UP, solta);
			stage.addEventListener(MouseEvent.MOUSE_MOVE, draw);
		}
		
		private function over(e:MouseEvent):void 
		{
			e.currentTarget.gotoAndStop(2);
		}
		
		private function out(e:MouseEvent):void 
		{
			e.currentTarget.gotoAndStop(1);
		}
		
		private function solta(e:MouseEvent):void 
		{
			stage.removeEventListener(MouseEvent.MOUSE_UP, solta);
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, draw);
		}
		
		private function draw(e:MouseEvent):void 
		{
			ab = mouseY - pt1_mc.y;
			bc = pt1_mc.x - mouseX;
			
			if (mouseX > pt1_mc.x) 
				Core.angulo = Math.atan(ab / bc);
			else 
				Core.angulo = Math.atan(ab / bc) + Math.PI;
				
			Calculus.getAngulo(mouseX, mouseY, pt1_mc, pt2_mc, tangente_mc, tangente2_mc);
			
			this["parent"].checkAprox(Core.anguloA);
			this["parent"].update();
			
			configure();
		}
		
		public function grafica(angulo:Number):void 
		{
			Core.senoA = Math.round(Math.sin(angulo) * 100) / 100;
			Core.senoB = Math.round(Math.cos(angulo) * 100) / 100;
			
			Core.cossenoA = Math.round(Math.cos(angulo) * 100) / 100;
			Core.cossenoB = Math.round(Math.sin(angulo) * 100) / 100;
			
			Core.a = Core.senoA; 
			Core.a2 = Core.senoB;
			
			Core.b = Core.cossenoA; 
			Core.b2 = Core.cossenoB;
			
			Core.tangente = Math.round((Core.senoA / Core.cossenoA) * 100) / 100;
			Core.tangente2 = Math.round((Core.senoB / Core.cossenoB) * 100) / 100;
			
			this["parent"].verificaInfinito();
			
			/*******/
			
			Calculus.posicionaPontos(pt1_mc, pt2_mc, pt5_mc, angulo, _raio);
			
			pt3_mc.y = pt2_mc.y;
			pt4_mc.x = pt2_mc.x;
			
			pt6_mc.y = pt5_mc.y;
			pt7_mc.x = pt5_mc.x;
				
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
			
			if (pt2_mc.x > pt1_mc.x) 
			{	
				seno2_mc.rotation = 0;
				seno2_mc.height = seno2_mc.y - pt5_mc.y;	
			} 
			else 
			{	
				seno2_mc.rotation = 180;
				seno2_mc.height = pt5_mc.y - seno2_mc.y;
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
			
			if (pt5_mc.x > pt1_mc.x) 
			{	
				cosseno2_mc.rotation = 180;
				cosseno2_mc.width = pt5_mc.x - cosseno2_mc.x;	
			} 
			else 
			{	
				cosseno2_mc.rotation = 0;
				cosseno2_mc.width = cosseno2_mc.x - pt5_mc.x;
			}
			
			//tangente
			
			Calculus.posicionaPontosTangente(ptTangente_mc, ptTangente2_mc, pt1_mc, tangente_mc, tangente2_mc, angulo, _raio);
			Calculus.posicionaTangente(pt1_mc, tangente_mc, tangente2_mc, ptTangente2_mc, mouseX, mouseY, _raio, angulo);
			
			/* ***********************/
			
			pt3 = new Point(pt2_mc.x, pt2_mc.y);
			pt5 = new Point(pt5_mc.x, pt5_mc.y);
			
			linhaSeno_mc.x = pt2_mc.x;
			linhaSeno_mc.y = pt2_mc.y;
			
			linhaSeno2_mc.x = pt5_mc.x;
			linhaSeno2_mc.y = pt5_mc.y;
			
			linhaCosseno_mc.x = pt2_mc.x;
			linhaCosseno_mc.y = pt2_mc.y;
			
			linhaCosseno2_mc.x = pt5_mc.x;
			linhaCosseno2_mc.y = pt5_mc.y;
			
			distSeno = new Point(pt3_mc.x, pt3_mc.y);
			distCosseno = new Point(pt4_mc.x, pt4_mc.y);
			distSeno2 = new Point(pt6_mc.x, pt6_mc.y);
			distCosseno2 = new Point(pt7_mc.x, pt7_mc.y);	
			
			distance = Point.distance(distSeno, pt3);
			
			linhaSeno_mc.width = distance;
			linhaSeno_mc.height = 1;
			
			distance = Point.distance(distSeno2, pt5);
			
			linhaSeno2_mc.width = distance;
			linhaSeno2_mc.height = 1;
			
			distance = Point.distance(distCosseno, pt3);
			
			linhaCosseno_mc.height = distance;
			linhaCosseno_mc.width = 1;
			
			distance = Point.distance(distCosseno2, pt5);
			
			linhaCosseno2_mc.height = distance;
			linhaCosseno2_mc.width = 1;
			
			if(pt2_mc.x > pt1_mc.x) 
				linhaSeno_mc.rotation = 180;	
			else 
				linhaSeno_mc.rotation = 0;
			
			if (pt5_mc.x < pt1_mc.x)
				linhaSeno2_mc.rotation = 0;
			else 
				linhaSeno2_mc.rotation = 180;
			
			if (pt2_mc.y < pt1_mc.y) 
				linhaCosseno_mc.rotation = 180;
			else 
				linhaCosseno_mc.rotation = 0;
			
			if (pt5_mc.y < pt1_mc.y)
				linhaCosseno2_mc.rotation = 180;
			else 
				linhaCosseno2_mc.rotation = 0;
			
			Calculus.getRaio(raio_mc, raio2_mc, angulo, tracosTangente, tracosTangente2);
			Calculus.apontaTangente(pt1_mc, pt2_mc, tracosTangente, tracosTangente2, angulo);
		}
		
		private function configure():void 
		{
			cicloInterno_mc.gotoAndStop(int(Core.anguloA));
			cicloInterno2_mc.gotoAndStop(int(Core.anguloB));
			
			// se necessário passar para o pai fazer os calculos e retornor para cá para concluir a ação
			aAngulo_mc.x = pt1_mc.x + Math.cos(Core.angulo - 0.5) * 50;
			aAngulo_mc.y = pt1_mc.y - Math.sin(Core.angulo - 0.5) * 50;
			
			if (Core.atividade == 5)
			{
				bAngulo_mc.x = pt1_mc.x + Math.cos((Core.angulo - Math.PI / 2) + 0.5) * 30;
				bAngulo_mc.y = pt1_mc.y + Math.sin((Core.angulo - Math.PI / 2) + 0.5) * 30;
			}
			else if (Core.atividade == 6)
			{
				bAngulo_mc.x = pt1_mc.x + Math.cos((Core.angulo + Math.PI) + 0.5) * 30;
				bAngulo_mc.y = pt1_mc.y + Math.sin((Core.angulo + Math.PI) + 0.5) * 30;
			}
			else if (Core.atividade == 7)
			{
				bAngulo_mc.x = pt1_mc.x + Math.cos((Core.angulo + Math.PI / 2) - 0.5) * 30;
				bAngulo_mc.y = pt1_mc.y - Math.sin((Core.angulo + Math.PI / 2) - 0.5) * 30;
			}
			else if (Core.atividade == 8)
			{
				bAngulo_mc.x = pt1_mc.x + Math.cos((Core.angulo + Math.PI) - 0.5) * 30;
				bAngulo_mc.y = pt1_mc.y - Math.sin((Core.angulo + Math.PI) - 0.5) * 30;
			}
			else if (Core.atividade == 9)
			{
				bAngulo_mc.x = pt1_mc.x + Math.cos( -(Core.angulo) - 0.5) * 30;
				bAngulo_mc.y = pt1_mc.y - Math.sin( -(Core.angulo) - 0.5) * 30;
			}
			
			if (raio_mc.rotation >= 0) 
			{	
				APonto_mc.y = pt2_mc.y + 30;
				AlinhaPonto_mc.y = pt5_mc.y - 30;
			} 
			else 
			{	
				APonto_mc.y = pt2_mc.y - 30;
				AlinhaPonto_mc.y = pt5_mc.y + 30;
			}
			
			APonto_mc.x = pt2_mc.x;
			AlinhaPonto_mc.x = pt5_mc.x;
			
			tracosTangente.x = pt1_mc.x; tracosTangente.y = pt1_mc.y;
			if (Core.atividade != 8) 
			{
				tracosTangente2.x = pt1_mc.x;
				tracosTangente2.y = pt1_mc.y;
			}
		}
	}
}