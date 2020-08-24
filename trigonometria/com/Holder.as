package com 
{
	import com.core.Core;
	import com.display.Preloader;
	import com.gaming.managers.SelfManager;
	import com.gaming.managers.SoundManager;
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.filters.DropShadowFilter;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Holder extends MovieClip 
	{
		[Embed(source = "../configuracoes.json", mimeType = "application/octet-stream")]
		public const JSONData:Class;
		
		private var preloader:Preloader;
		private var selfManager:SelfManager;
		
		public function Holder() 
		{
			addEventListener(Event.ADDED_TO_STAGE, addedHandler);
		}
		
		private function addedHandler(e:Event):void 
		{
			removeEventListener(Event.ADDED_TO_STAGE, addedHandler);
			
			preloader = new Preloader();
			preloader.x = stage.stageWidth / 2;
			preloader.y = stage.stageHeight / 2;
			preloader.filters = [new DropShadowFilter(3, 45, 0, 0.75, 3, 3)];
			addChild(preloader);
			
			loadGame();
		}
		
		private function loadGame():void 
		{
			selfManager = new SelfManager();
			selfManager.addEventListener(SelfManager.PROGRESS, progress);
			selfManager.addEventListener(SelfManager.SELF_COMPLETE, selfComplete);
			selfManager.loadGame(this);
		}
		
		private function selfComplete(e:Event):void 
		{
			Core.soundManager = new SoundManager();
			this.play();
			removeChild(preloader);
		}
		
		private function progress(e:Event):void 
		{
			preloader.gotoAndStop(Math.round(e.target.progress * 1.2));
			preloader.txt.text = e.target.progress + "%";
		}
	}
}