package com.core 
{
	import com.gaming.managers.SoundManager;
	import flash.display.MovieClip;
	/**
	 * ...
	 * @author Marcos Cardoso
	 */
	public class Core 
	{	
		static public var showingAbertura:Boolean = false;
		static public var showingMenuPrincipal:Boolean = false;
		static public var showingSubMenu:Boolean = false;
		static public var showingButtons:Boolean = false;
		static public var showingConfigurations:Boolean = false;
		static public var showingSimulador:Boolean = false;
		static public var showingAjuda:Boolean = false;
		static public var showingCreditos:Boolean = false;
		
		static public var soundManager:SoundManager;
		
		static public var atividade:int = 0;
		static public var subAtividade:int = 0;
		
		static public var allowEffects:Boolean = true;
		static public var allowMusic:Boolean = true;
		
		// relacionado ao ciclo
		static public var anguloA:Number = 0;
		static public var anguloB:Number = 0;
		static public var pontoA:Number = 0;
		static public var pontoB:Number = 0;
		static public var senoA:Number = 0;
		static public var senoB:Number = 0;
		static public var cossenoA:Number = 0;
		static public var cossenoB:Number = 0;
		
		static public var angulo:Number = 0;
		
		static public var a:Number = 0;
		static public var b:Number = 0;
		static public var a2:Number = 0;
		static public var b2:Number = 0;
		
		static public var tangente:Number = 0;
		static public var tangente2:Number = 0;
		
		public static var negInfinity:Boolean = false;
		public static var posInfinity:Boolean = false;
		
		static public var content:Object;
		
		public function Core() { }
	}
}