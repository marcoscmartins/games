package com.display 
{
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.utils.setTimeout;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Abertura extends MovieClip 
	{
		public var btiniciar:MovieClip;
		
		public function Abertura() 
		{
			btiniciar.addEventListener(MouseEvent.CLICK, handler);
		}
		
		private function handler(e:MouseEvent):void 
		{
			this.gotoAndPlay("s1");
			setTimeout(remove, 500);
		}
		
		private function remove():void 
		{
			DisplayManager.removeAbertura();
		}
	}
}