package com.sim 
{
	import com.core.Core;
	import flash.display.MovieClip;
	import flash.text.TextField;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Angulos extends Simulation 
	{
		public var infinito_mc:MovieClip;
		public var infinito2_mc:MovieClip;
		public var funcao:MovieClip;
		
		public var ciclo:Ciclo;
		
		public var angulo_txt:TextField;
		public var angulo2_txt:TextField;
		
		public var ptA_txt:TextField;
		public var ptA2_txt:TextField;
		
		public var sen_txt:TextField;
		public var cos_txt:TextField;
		public var sen2_txt:TextField;
		public var cos2_txt:TextField;
		
		public var a_txt:TextField;
		public var b_txt:TextField;
		public var a2_txt:TextField;
		public var b2_txt:TextField;
		public var tg_txt:TextField;
		public var tg2_txt:TextField;
		
		public var nome:TextField;
		
		public function Angulos() 
		{ 
			initCampos();
		}
		
		public function initCampos():void
		{
			var obj:Object = Core.content.sim[Core.atividade];
			
			angulo_txt.text = obj.anguloA; // "0";
			angulo2_txt.text = obj.anguloB; // "90";
			
			sen_txt.text = obj.senA; // "0";
			sen2_txt.text = obj.senB; // "1";
			cos_txt.text = obj.cosA; // "1";
			cos2_txt.text = obj.cosB; // "0";
			
			a_txt.text = sen_txt.text;
			a2_txt.text = sen2_txt.text;
			b_txt.text = cos_txt.text;
			b2_txt.text = cos2_txt.text;
			
			tg_txt.text = obj.tgA; //  "0";
			tg2_txt.text = obj.tgB; // "";
			
			infinito2_mc.alpha = int(obj.infinito2Alpha); 
			infinito2_mc.gotoAndStop(int(obj.infinito2Frame));
				
			ptA_txt.text = "(" + b_txt.text + ", " + a_txt.text + ")";
			ptA2_txt.text = "(" + b2_txt.text + ", " + a2_txt.text + ")";
			
			ciclo.pt5_mc.x = obj.posX;
			ciclo.pt5_mc.y = obj.posY;
			ciclo.raio2_mc.rotation = obj.rotacao;
			
			ciclo.cicloInterno_mc.gotoAndStop(int(obj.cicloB));
			ciclo.cicloInterno2_mc.gotoAndStop(int(obj.cicloA));
			
			funcao.gotoAndStop(obj.funcaoFrame);
			
			nome.text = obj.nome;
		}
		
		public function update():void
		{
			angulo_txt.text = Core.anguloA + "";
			angulo2_txt.text = Core.anguloB + "";
			
			a_txt.text = Core.a + "";
			a2_txt.text = Core.a2 + "";
			b_txt.text = Core.b + "";
			b2_txt.text = Core.b2 + "";
			
			ptA_txt.text = "(" + b_txt.text + ", " + a_txt.text + ")";
			ptA2_txt.text = "(" + b2_txt.text + ", " + a2_txt.text + ")";
			
			sen_txt.text = Core.senoA + "";
			sen2_txt.text = Core.senoB + "";
			cos_txt.text = Core.cossenoA + "";
			cos2_txt.text = Core.cossenoB + "";
			
			tg_txt.text = Core.tangente + "";
			tg2_txt.text = Core.tangente2 + "";
			
			verificaInfinito();
		}
		
		public function verificaInfinito():void
		{
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
			
			if (tg2_txt.text == "-Infinity") {
				
				infinito2_mc.alpha = 1;
				infinito2_mc.gotoAndStop(2);
				
				tg2_txt.text = "";
				
			} else if (tg2_txt.text == "Infinity") {
				
				infinito2_mc.alpha = 1;
				infinito2_mc.gotoAndStop(1);
				
				tg2_txt.text = "";
				
			} else {
				
				infinito2_mc.alpha = 0;
			}
		}
		
		public function checkAprox(angulo:Number):void
		{
			if ((angulo > 29.5) && (angulo < 30.5)) {
				
				angulo_txt.text = "30";
				angulo2_txt.text = "60";
				
			} else if ((angulo > 44.5) && (angulo < 45.5)) {
				
				angulo_txt.text = "45";
				angulo2_txt.text = "45";
				
			} else if ((angulo > 59.5) && (angulo < 60.5)) {
				
				angulo_txt.text = "60";
				angulo2_txt.text = "30";
				
			} else if ((angulo > 119.5) && (angulo < 120.5)) {
				
				angulo_txt.text = "120";
				angulo2_txt.text = "330";
				
			} else if ((angulo > 134.5) && (angulo < 135.5)) {
				
				angulo_txt.text = "135";
				angulo2_txt.text = "315";
				
			} else if ((angulo > 149.5) && (angulo < 150.5)) {
				
				angulo_txt.text = "150";
				angulo2_txt.text = "300";
				
			} else if ((angulo > 209.5) && (angulo < 210.5)) {
				
				angulo_txt.text = "210";
				angulo2_txt.text = "240";
				
			} else if ((angulo > 224.5) && (angulo < 225.5)) {
				
				angulo_txt.text = "225";
				angulo2_txt.text = "225";
				
			} else if ((angulo > 239.5) && (angulo < 240.5)) {
				
				angulo_txt.text = "240";
				angulo2_txt.text = "210";
				
			} else if ((angulo > 299.5) && (angulo < 300.5)) {
				
				angulo_txt.text = "300";
				angulo2_txt.text = "150";
				
			} else if ((angulo > 314.5) && (angulo < 315.5)) {
				
				angulo_txt.text = "315";
				angulo2_txt.text = "135";
				
			} else if ((angulo > 329.5) && (angulo < 330.5)) {
				
				angulo_txt.text = "330";
				angulo2_txt.text = "120";
				
			} else if ((angulo > 359.5) && (angulo < 0.5)) {
				
				angulo_txt.text = "0";
				angulo2_txt.text = "90";
				
			} else if ((angulo > 89.5) && (angulo < 90.5)) {
				
				angulo_txt.text = "90";
				angulo2_txt.text = "0";
				
			} else if ((angulo > 179.5) && (angulo < 180.5)) {
				
				angulo_txt.text = "180";
				angulo2_txt.text = "270";
				
			} else if ((angulo > 269.5) && (angulo < 270.5)) {
				
				angulo_txt.text = "270";
				angulo2_txt.text = "180";
				
			} else if ((angulo > 359.5) && (angulo < 360.5)) {
				
				angulo_txt.text = "0";
				angulo2_txt.text = "90";
			} 
			
			ciclo.grafica(Core.angulo);
		}
	}
}