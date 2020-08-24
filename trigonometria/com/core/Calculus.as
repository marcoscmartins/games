package com.core 
{
	import flash.display.MovieClip;
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Calculus 
	{
		public function Calculus() {}
		
		public static function getAngulo(mouseX:Number, mouseY:Number, pt1_mc:MovieClip, pt2_mc:MovieClip, tangente_mc:MovieClip, tangente2_mc:MovieClip):void
		{
			if (Core.atividade == 5)
			{
				Core.anguloA = Math.round(Core.angulo * Math.PI * 18.222 * 10) / 10;
				Core.anguloB = Math.round(-((Core.angulo * Math.PI) * 18.222 - 90) * 10) / 10;
				
				if ((mouseX > pt1_mc.x) && (mouseY > pt1_mc.y))
					Core.anguloA = Core.anguloA + 360 * 2;
					
				if ((mouseX < pt1_mc.x) && (mouseY < pt1_mc.y + 1)) 	
					Core.anguloB = Math.round(( -(Core.angulo - Math.PI / 2) * Math.PI * 18.222 + 360) * 10) / 10;
				
				if ((mouseX < pt1_mc.x + 1) && (mouseY > pt1_mc.y)) 
					Core.anguloB = Math.round(( -(Core.angulo - Math.PI / 2) * Math.PI * 18.222 + 360) * 10) / 10;
				
				if ((pt2_mc.x > pt1_mc.x) && (pt2_mc.y > pt1_mc.y + 1)) 
				{	
					tangente_mc.rotation = 0;
					tangente2_mc.rotation = 0;
					
					Core.anguloA = Math.round(((Core.angulo + Math.PI/2) * Math.PI * 18.222 + 270) * 10) / 10;
				}
			}
			else if (Core.atividade == 6)
			{
				Core.anguloA = Math.round(Core.angulo * Math.PI * 18.222);
				Core.anguloB = Math.round( -((Core.angulo * Math.PI) * 18.222 - 180));
				
				if ((mouseX > pt1_mc.x) && (mouseY > pt1_mc.y)) 
					Core.anguloA = Math.round((Core.angulo + (2 * Math.PI)) * Math.PI * 18.222 * 10) / 10;
					
				if ((mouseX < pt1_mc.x + 1) && (mouseY > pt1_mc.y)) 
					Core.anguloB = Math.round((-(Core.angulo - Math.PI) * Math.PI * 18.222 + 360) * 10) / 10;
			}
			else if (Core.atividade == 7)
			{
				Core.anguloA = Math.round(Core.angulo * Math.PI * 18.222);
				Core.anguloB = Math.round((Core.angulo * Math.PI) * 18.222 + 90);
				
				if ((mouseX > pt1_mc.x) && (mouseY > pt1_mc.y)) 
				{	
					Core.anguloA = Math.round((Core.angulo + (2 * Math.PI)) * Math.PI * 18.222 * 10) / 10;
					Core.anguloB = Math.round((Core.angulo * Math.PI * 18.222+ 90) * 10) / 10;
				}
			}
			else if (Core.atividade == 8)
			{
				Core.anguloA = Math.round(Core.angulo * Math.PI * 18.222);
				Core.anguloB = Math.round((Core.angulo * Math.PI) * 18.222 + 180);
				
				if ((mouseX > pt1_mc.x) && (mouseY > pt1_mc.y)) 
					Core.anguloA = Math.round((Core.angulo + (2 * Math.PI)) * Math.PI * 18.222 * 10) / 10;
				
				if ((mouseX < pt1_mc.x) && (mouseY > pt1_mc.y)) 
					Core.anguloB = Math.round(((Core.angulo - Math.PI) * Math.PI * 18.222) * 10) / 10;
			}
			else if (Core.atividade == 9)
			{
				Core.anguloA = Math.round(Core.angulo * Math.PI * 18.222);
				Core.anguloB = Math.round( -((Core.angulo * Math.PI) * 18.222 - 360));
				
				if ((mouseX > pt1_mc.x) && (mouseY > pt1_mc.y)) 
				{
					Core.anguloA = Math.round((Core.angulo + (2 * Math.PI)) * Math.PI * 18.222 * 10) / 10;	
					Core.anguloB = Math.round(-(Core.angulo * Math.PI * 18.222) * 10) / 10;
				}
			}
			
			if (Core.anguloA >= 361) 
				Core.anguloA = Core.anguloA - 360;
		}
		
		static public function getRaio(raio_mc:MovieClip, raio2_mc:MovieClip, angulo:Number, tracosTangente:MovieClip, tracosTangente2:MovieClip):void 
		{
			if (Core.atividade == 5)
			{
				raio_mc.rotation = -(angulo * Math.PI) * 18.222;
				raio2_mc.rotation = angulo * Math.PI * 18.222 - 90;
			}
			else if (Core.atividade == 6)
			{
				raio_mc.rotation = -(angulo * Math.PI) * 18.222;
				raio2_mc.rotation = angulo * Math.PI * 18.222 - 180;
			}
			else if (Core.atividade == 7)
			{
				raio_mc.rotation = -(angulo * Math.PI) * 18.222;
				raio2_mc.rotation = -(angulo * Math.PI) * 18.222 - 90;
			}
			else if (Core.atividade == 8)
			{
				raio_mc.rotation = -(angulo * Math.PI) * 18.222;
				raio2_mc.rotation = -(angulo * Math.PI) * 18.222 - 180;
			}
			else if (Core.atividade == 9)
			{
				raio_mc.rotation = -(angulo * Math.PI) * 18.222;
				raio2_mc.rotation = (angulo * Math.PI) * 18.222;
			}
		}
		
		static public function apontaTangente(pt1_mc:MovieClip, pt2_mc:MovieClip, tracosTangente:MovieClip, tracosTangente2:MovieClip, angulo:Number):void 
		{
			if (Core.atividade == 5)
			{
				if (pt2_mc.x > pt1_mc.x) 
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222;
				else 
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222 + 180;
				
				if (pt2_mc.y < pt1_mc.y) 
					tracosTangente2.rotation = ((angulo - Math.PI / 2) * Math.PI) * 18.222;
				else 
					tracosTangente2.rotation = ((angulo - Math.PI / 2) * Math.PI) * 18.222 - 180;
			}
			else if (Core.atividade == 6)
			{
				if (pt2_mc.x > pt1_mc.x) 
				{	
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222;
					tracosTangente2.rotation = (angulo * Math.PI) * 18.222;	
				}
				else 
				{
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222 + 180;
					tracosTangente2.rotation = (angulo * Math.PI) * 18.222 - 180;
				}
			}
			else if (Core.atividade == 7)
			{
				if (pt2_mc.y > pt1_mc.y) 	
					tracosTangente2.rotation = -(angulo * Math.PI) * 18.222 - 90;
				else 
					tracosTangente2.rotation = -(angulo * Math.PI) * 18.222 + 90;
				
				if (pt2_mc.x > pt1_mc.x) 
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222;
				else
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222 + 180;
			}
			else if (Core.atividade == 8)
			{
				if (pt2_mc.x > pt1_mc.x)
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222;
				else 
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222 + 180;
			}
			else if (Core.atividade == 9)
			{
				if (pt2_mc.x > pt1_mc.x) 
				{
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222;
					tracosTangente2.rotation = (angulo * Math.PI) * 18.222;	
				}
				else 
				{	
					tracosTangente.rotation = -(angulo * Math.PI) * 18.222 + 180;	
					tracosTangente2.rotation = (angulo * Math.PI) * 18.222 + 180;
				}
			}
		}
		
		static public function posicionaPontos(pt1_mc:MovieClip, pt2_mc:MovieClip, pt5_mc:MovieClip, angulo:Number, raio:Number):void 
		{
			var _x:Number;
			var _y:Number;
			var _x2:Number;
			var _y2:Number;
			
			_x = pt1_mc.x + Math.cos(angulo) * raio;
			_y = pt1_mc.y - Math.sin(angulo) * raio;
			
			if (Core.atividade == 5)
			{
				_x2 = pt1_mc.x + Math.cos(angulo - Math.PI / 2) * raio;
				_y2 = pt1_mc.y + Math.sin(angulo - Math.PI / 2) * raio;	
			}
			else if (Core.atividade == 6)
			{
				_x2 = pt1_mc.x + Math.cos(angulo + Math.PI) * raio;
				_y2 = pt1_mc.y + Math.sin(angulo - Math.PI) * raio;	
			}
			else if (Core.atividade == 7)
			{
				_x2 = pt1_mc.x + Math.cos(angulo + Math.PI / 2) * raio;
				_y2 = pt1_mc.y + Math.sin(angulo - Math.PI / 2) * raio;	
			}
			else if (Core.atividade == 8)
			{
				_x2 = pt1_mc.x + Math.cos(angulo + Math.PI) * raio;
				_y2 = pt1_mc.y - Math.sin(angulo - Math.PI) * raio;	
			}
			else if (Core.atividade == 9)
			{
				_x2 = _x;
				_y2 = pt1_mc.y + Math.sin(angulo) * raio;
			}
			
			pt2_mc.x = _x;
			pt2_mc.y = _y;
			
			pt5_mc.x = _x2;
			pt5_mc.y = _y2;
		}
		
		static public function posicionaTangente(pt1_mc:MovieClip, tangente_mc:MovieClip, tangente2_mc:MovieClip, ptTangente2_mc:MovieClip, mouseX:Number, mouseY:Number, raio:Number, angulo:Number):void 
		{
			if (Core.atividade == 5 || Core.atividade == 8)
			{
				if (pt1_mc.y - Math.tan(angulo) * raio / 2 > pt1_mc.y) 
				{	
					tangente_mc.rotation = 0;
					tangente_mc.height = (pt1_mc.y - Math.tan(angulo) * raio) - pt1_mc.y;	
				} 
				else 
				{
					tangente_mc.rotation = 180;
					tangente_mc.height = pt1_mc.y - (pt1_mc.y - Math.tan(angulo) * raio);
				}
				if (Core.atividade == 5)
				{
					if ((mouseX > pt1_mc.x) && (mouseY < pt1_mc.y)) 
					{
						tangente2_mc.rotation = 180;
						tangente2_mc.height = pt1_mc.y - ptTangente2_mc.y;
						
					} else if ((mouseX < pt1_mc.x) && (mouseY < pt1_mc.y)){
						
						tangente2_mc.rotation = 0;
						tangente2_mc.height = ptTangente2_mc.y - pt1_mc.y;
						
					} else if ((mouseX < pt1_mc.x) && (mouseY > pt1_mc.y)){
						
						tangente2_mc.rotation = 180;
						tangente2_mc.height = pt1_mc.y - ptTangente2_mc.y;
						
					} else if ((mouseX > pt1_mc.x) && (mouseY > pt1_mc.y)){
						
						tangente2_mc.rotation = 0;
						tangente2_mc.height = ptTangente2_mc.y - pt1_mc.y;
					}
				}
			}
			else if (Core.atividade == 6 || Core.atividade == 7 || Core.atividade == 9)
			{
				if (pt1_mc.y - Math.tan(angulo) * raio / 2 > pt1_mc.y) {
					tangente_mc.rotation = 0;
					tangente2_mc.rotation = 180;
					tangente_mc.height = (pt1_mc.y - Math.tan(angulo) * raio) - pt1_mc.y;
					tangente2_mc.height = pt1_mc.y - ptTangente2_mc.y;
				} else {
					tangente_mc.rotation = 180;
					tangente2_mc.rotation = 0;
					tangente_mc.height = pt1_mc.y - (pt1_mc.y - Math.tan(angulo) * raio);
					tangente2_mc.height = ptTangente2_mc.y - pt1_mc.y;
				}
			}
		}
		
		static public function posicionaPontosTangente(ptTangente_mc:MovieClip, ptTangente2_mc:MovieClip, pt1_mc:MovieClip, tangente_mc:MovieClip, tangente2_mc:MovieClip, angulo:Number, raio:Number):void 
		{
			ptTangente_mc.y = pt1_mc.y - Math.tan(angulo) * raio;
			
			if (Core.atividade == 5)
			{
				ptTangente2_mc.y = pt1_mc.y + Math.tan(angulo - Math.PI / 2) * raio;
			}
			else if (Core.atividade == 6)
			{
				ptTangente2_mc.y = pt1_mc.y + Math.tan(angulo) * raio;
			}
			else if (Core.atividade == 7)
			{
				ptTangente2_mc.y = pt1_mc.y - Math.tan(angulo + Math.PI / 2) * raio;
			}
			else if (Core.atividade == 8)
			{
				ptTangente2_mc.y = -1000;
			} 
			else if (Core.atividade == 9)
			{
				ptTangente2_mc.y = pt1_mc.y + Math.tan(angulo) * raio;
			} 
			
		}
	}
}