package com 
{
	import com.core.Core;
	import com.display.Abertura;
	import com.display.DisplayManager;
	import flash.display.MovieClip;
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Trigonometria extends Holder 
	{
		private var abertura:Abertura;
		
		public function Trigonometria() 
		{
			super();
			
			var str:String = new String(new JSONData()); 
			Core.content = JSON.parse(str);
		}
		
		public function inicializa():void
		{
			DisplayManager.stage = stage;
			DisplayManager.scope = this;
			DisplayManager.criaAbertura();
		}
	}
}