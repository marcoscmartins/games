package com.display 
{
	import caurina.transitions.Tweener;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Ajuda extends MovieClip 
	{
		public var btsair:MovieClip;
		public var shadow:MovieClip;
		
		public function Ajuda() 
		{
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, init);
			btsair.addEventListener(MouseEvent.CLICK, handler);
		}
		
		private function handler(e:MouseEvent):void 
		{
			shadow.gotoAndPlay("s2");
			e.currentTarget.gotoAndPlay("s1");
			Tweener.addTween(this, { x: -850, y:stage.stageHeight * 0.5, time:0.25, transition:"EaseInExpo", onComplete:remove } );
		}
		
		private function remove():void 
		{
			DisplayManager.removeAjuda();
		}
	}
}