package com.display 
{
	import caurina.transitions.Tweener;
	import com.core.Core;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.MouseEvent;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Configurations extends MovieClip 
	{
		public var btsound:MovieClip;
		public var btmusic:MovieClip;
		public var btajuda:MovieClip;
		public var btcreditos:MovieClip;
		public var btclose:MovieClip;
		public var btsair:MovieClip;
		
		public function Configurations() 
		{
			addEventListener(Event.ADDED_TO_STAGE, init);
		}
		
		private function init(e:Event):void 
		{
			btmusic.state.gotoAndStop(Core.allowMusic ? 1 : 2);
			btsound.state.gotoAndStop(Core.allowEffects ? 1 : 2);
			
			btsound.addEventListener(MouseEvent.CLICK, soundHandler);
			btmusic.addEventListener(MouseEvent.CLICK, musicHandler);
			btajuda.addEventListener(MouseEvent.CLICK, ajudaHandler);
			btcreditos.addEventListener(MouseEvent.CLICK, creditosHandler);
			btclose.addEventListener(MouseEvent.CLICK, closeHandler);
			btsair.addEventListener(MouseEvent.CLICK, sairHandler);
		}
		
		private function creditosHandler(e:MouseEvent):void 
		{
			e.currentTarget.gotoAndPlay("s1");
			// cria creditos
			DisplayManager.criaCreditos();
		}
		
		private function ajudaHandler(e:MouseEvent):void 
		{
			e.currentTarget.gotoAndPlay("s1");
			// cria ajuda
			DisplayManager.criaAjuda();
		}
		
		private function musicHandler(e:MouseEvent):void 
		{
			// toogle music on off
			e.currentTarget.gotoAndPlay("s1");
			if (btmusic.state.currentFrame == 1)
			{
				btmusic.state.gotoAndStop(2);
				Core.allowMusic = false;
			}
			else
			{
				btmusic.state.gotoAndStop(1);
				Core.allowMusic = true;
			}
		}
		
		private function soundHandler(e:MouseEvent):void 
		{
			// toogle sound on off
			e.currentTarget.gotoAndPlay("s1");
			if (btsound.state.currentFrame == 1)
			{
				btsound.state.gotoAndStop(2);
				Core.allowEffects = false;
			}
			else
			{
				btsound.state.gotoAndStop(1);
				Core.allowEffects = true;
			}
		}
		
		private function closeHandler(e:MouseEvent):void 
		{
			e.currentTarget.gotoAndPlay("s1");
			Tweener.addTween(this, { x: -450, time:0.25, transition:"EaseInExpo", onComplete:remove } );
		}
		
		private function remove():void 
		{
			DisplayManager.removeConfiguracoes();
		}
		
		private function sairHandler(e:MouseEvent):void 
		{
			e.currentTarget.gotoAndPlay("s1");
			trace("sair");
			DisplayManager.reset();
		}
	}
}