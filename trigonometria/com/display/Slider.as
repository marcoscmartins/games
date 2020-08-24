package com.display 
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.text.TextField;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Slider extends MovieClip 
	{
		public var holder_mc:MovieClip;
		public var barra_mc:MovieClip;
		public var _txt:TextField;
		
		//private var i:int = 0;
		
		public function Slider() 
		{
			init();
		}
		
		private function init():void 
		{
			_txt.addEventListener(Event.CHANGE, _change);
			holder_mc.addEventListener(MouseEvent.MOUSE_DOWN, dragHolder);
		}
		
		private function dragHolder(e:MouseEvent):void 
		{
			e.target.gotoAndStop(3);
			e.target.addEventListener(MouseEvent.MOUSE_UP, dropHolder);
			e.target.addEventListener(MouseEvent.MOUSE_MOVE, _moveHolder);
			
			stage.addEventListener(MouseEvent.MOUSE_UP, dropHolder);
		}
		
		private function _moveHolder(e:MouseEvent):void 
		{
			e.target.y = e.target.y;
			
			if ((mouseX < barra_mc.x + 101) && (mouseX > barra_mc.x - 101))
				e.target.x = mouseX;
			
			_txt.text = String(Math.round(((holder_mc.x - barra_mc.x) / holder_mc.diver) * 10) / 10);
			
			holder_mc.valor = Number(_txt.text);
		}
		
		private function dropHolder(e:MouseEvent):void 
		{
			holder_mc.removeEventListener(MouseEvent.MOUSE_MOVE, _moveHolder);
		}
		
		private function _change(e:Event):void 
		{
			if (Number(_txt.text) > 10) 
				_txt.text = "10";
			
			if (Number(_txt.text) < -10) 
				_txt.text = "-10";
			
			holder_mc.x = holder_mc.diver * Number(_txt.text);
			holder_mc.valor = Number(_txt.text);
		}
	}
}