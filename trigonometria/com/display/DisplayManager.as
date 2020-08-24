package com.display 
{
	import caurina.transitions.Tweener;
	import com.core.Core;
	import com.display.buttons.ConfigurationsButton;
	import com.display.buttons.HomeButton;
	import com.display.buttons.MenuButton;
	import com.display.menu.MenuPrincipal;
	import com.display.menu.SubMenu;
	import com.sim.Angulos;
	import com.sim.CicloTrigonometrico;
	import com.sim.FuncoesCompostas;
	import com.sim.FuncoesTrigonometricas;
	import com.sim.Razoes;
	import com.sim.Simulation;
	import flash.display.MovieClip;
	import flash.display.Stage;
	import flash.events.MouseEvent;
	
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class DisplayManager 
	{
		static public var scope:MovieClip;
		static public var stage:Stage;
		static private var abertura:Abertura;
		static private var menuPrincipal:MenuPrincipal;
		static private var subMenu:SubMenu;
		static private var configuracoes:Configurations;
		static private var btconfigurations:MovieClip;
		static private var btmenu:MovieClip;
		static private var bthome:MovieClip;
		static private var simulacao:Simulation;
		static private var ajuda:Ajuda;
		static private var creditos:Creditos;
		
		public function DisplayManager() {}
		
		static public function criaAbertura():void 
		{
			trace("cria abertura");
			if (Core.showingAbertura)
				return;
				
			Core.showingAbertura = true;
			abertura = new Abertura();
			scope.addChild(abertura);
		}
		
		static public function removeAbertura():void
		{
			scope.removeChild(abertura);
			Core.showingAbertura = false;
			
			criaMenuPrincipal();
		}
		
		static private function criaMenuPrincipal(e:MouseEvent = null):void 
		{
			if (Core.showingMenuPrincipal)
				return;
				
			if (Core.showingSubMenu)
				removeSubMenu();
			if (Core.showingAjuda)
				removeAjuda();
			if (Core.showingSimulador)
				removeSimulador();
				
			if (btmenu)
				btmenu.visible = false;
				
			Core.atividade = 0;
				
			Core.showingMenuPrincipal = true;
			menuPrincipal = new MenuPrincipal();
			scope.addChild(menuPrincipal);
			
			if (!Core.showingButtons)
				criaButtons();
		}
		
		static public function removeMenuPrincipal():void 
		{
			Core.showingMenuPrincipal = false;
			scope.removeChild(menuPrincipal);
		}
		
		static public function criaSubMenu():void 
		{
			if (Core.showingSubMenu)
				return;
				
			Core.showingSubMenu = true;
			subMenu = new SubMenu();
			scope.addChild(subMenu);
			
			btmenu.visible = true;
		}
		
		static public function removeSubMenu():void 
		{
			Core.showingSubMenu = false;
			scope.removeChild(subMenu);
		}
		
		static public function criaSimulador(atividade:int):void 
		{
			if (Core.showingSimulador)
				return;
				
			if (btmenu)
				btmenu.visible = true;
				
			Core.showingSimulador = true;
			
			btmenu.visible = true;
			
			if (atividade > 4)
				simulacao = new Angulos();
			else if (atividade == 1)
				simulacao = new CicloTrigonometrico();
			else if (atividade == 2)
				simulacao = new FuncoesCompostas();
			else if (atividade == 3)
				simulacao = new FuncoesTrigonometricas();
			else if (atividade == 4)
				simulacao = new Razoes();
			
			scope.addChild(simulacao);
			
			scope.setChildIndex(bthome, scope.numChildren - 1);
			scope.setChildIndex(btconfigurations, scope.numChildren - 1);
			scope.setChildIndex(btmenu, scope.numChildren - 1);
		}
		
		static public function removeSimulador():void 
		{
			Core.showingSimulador = false;
			if (simulacao)
				scope.removeChild(simulacao);
		}
		
		static public function criaButtons():void
		{
			if (Core.showingButtons)
				return;
				
			Core.showingButtons = true;
			btconfigurations = new ConfigurationsButton();
			btconfigurations.x = btconfigurations.y = -3;
			btconfigurations.addEventListener(MouseEvent.CLICK, criaConfiguracoes);
			scope.addChild(btconfigurations);
			
			btmenu = new MenuButton();
			btmenu.addEventListener(MouseEvent.CLICK, criaMenuPrincipal);
			btmenu.x = -3;
			btmenu.y = stage.stageHeight + 3;
			scope.addChild(btmenu);
			btmenu.visible = false;
			
			bthome = new HomeButton();
			bthome.addEventListener(MouseEvent.CLICK, homeHandler);
			bthome.x = stage.stageWidth + 3;
			bthome.y = stage.stageHeight + 3;
			scope.addChild(bthome);
		}
		
		static public function removeButtons():void
		{
			Core.showingButtons = false;
			scope.removeChild(btmenu);
			scope.removeChild(btconfigurations);
			scope.removeChild(bthome);
		}
		
		static private function homeHandler(e:MouseEvent):void 
		{
			reset();
		}
		
		static private function criaConfiguracoes(e:MouseEvent):void 
		{
			if (Core.showingConfigurations)
				return;
				
			if (Core.showingAjuda)
				DisplayManager.removeAjuda();
				
			Core.showingConfigurations = true;
			configuracoes = new Configurations();
			configuracoes.x = -450;
			scope.addChild(configuracoes);
			
			Tweener.addTween(configuracoes, { x:0, time:0.25, transition:"EaseOutExpo" } );
		}
		
		static public function removeConfiguracoes():void 
		{
			Core.showingConfigurations = false;
			scope.removeChild(configuracoes);
		}
		
		static public function reset():void
		{
			if (Core.showingButtons)
				removeButtons();
			if (Core.showingConfigurations)
				removeConfiguracoes();
			if (Core.showingMenuPrincipal)
				removeMenuPrincipal();
			if (Core.showingSubMenu)
				removeSubMenu();
			if (Core.showingSimulador)
				removeSimulador();
				
			trace("reset");
			Core.atividade = 0;
			scope.gotoAndPlay(2);
		}
		
		static public function criaAjuda(e:MouseEvent = null):void
		{
			if (Core.showingAjuda)
				return;
				
			if (Core.showingConfigurations)
				DisplayManager.removeConfiguracoes();
			
			trace(Core.atividade);
			Core.showingAjuda = true;
			ajuda = new Ajuda();
			ajuda.x = -850;
			ajuda.y = stage.stageHeight * 0.5;
			scope.addChild(ajuda);
			
			ajuda.gotoAndStop(Core.atividade);
			if (Core.atividade == 0)
				ajuda.gotoAndStop(10);
				
			Tweener.addTween(ajuda, { x:stage.stageWidth * 0.5, y:stage.stageHeight * 0.5 , time:0.25, transition:"EaseOutExpo" } );
		}
		
		static public function removeAjuda():void 
		{
			Core.showingAjuda = false;
			scope.removeChild(ajuda);
		}
		
		static public function criaCreditos(e:MouseEvent = null):void
		{
			if (Core.showingCreditos)
				return;
				
			if (Core.showingConfigurations)
				DisplayManager.removeConfiguracoes();
			
			Core.showingCreditos = true;
			creditos = new Creditos();
			creditos.x = -850;
			creditos.y = stage.stageHeight * 0.5;
			scope.addChild(creditos);
			
			Tweener.addTween(creditos, { x:stage.stageWidth * 0.5, y:stage.stageHeight * 0.5 , time:0.25, transition:"EaseOutExpo" } );
		}
		
		static public function removeCreditos():void 
		{
			Core.showingCreditos = false;
			scope.removeChild(creditos);
		}
	}
}