package com.display.menu 
{
	import com.core.Core;
	import com.display.DisplayManager;
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	import flash.utils.setTimeout;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Menu extends MovieClip 
	{	
		public var bt0:MovieClip;
		public var bt1:MovieClip;
		public var bt2:MovieClip;
		public var bt3:MovieClip;
		public var bt4:MovieClip;
		
		public function Menu() 
		{
			init();
		}
		
		private function init():void 
		{
			var arr:Array = [bt0, bt1, bt2, bt3, bt4];
			for (var i:int = 0; i < arr.length; i++)
			{
				arr[i].addEventListener(MouseEvent.CLICK, optHandler);
			}
		}
		
		// verifica a opção escolhida
		private function optHandler(e:MouseEvent):void 
		{
			//if (this is MenuPrincipal)
			Core.atividade = int(e.currentTarget.name.substr( -1));
			//else
				//Core.subAtividade = int(e.currentTarget.name.substr( -1));
			if (this is MenuPrincipal)
				e.currentTarget.bg.gotoAndStop(2);
			else
				e.currentTarget.bg.gotoAndPlay("s1");
				
			setTimeout(function() {
				gotoAndPlay("s1");
			}, 1000);
			
			setTimeout(remove, 1500);
		}
		
		private function remove():void 
		{
			if (this is MenuPrincipal)
			{
				DisplayManager.removeMenuPrincipal();
				// caso a opção escolhida seja Relações de Simetria (opção 0) cria submenu
				if (Core.atividade == 0)
					DisplayManager.criaSubMenu();
				else
					DisplayManager.criaSimulador(Core.atividade);
			}		
			else
			{
				Core.atividade += 5;
				DisplayManager.removeSubMenu();
				DisplayManager.criaSimulador(Core.atividade);
			}
		}
	}
}