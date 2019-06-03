"use strict";


// OBJETO GAME
var Game = function()
{
	var g = new createjs.Container();
	var bthelp;
    var btclean;

	// objeto abertura
	abertura = new Abertura();
	
    g.addChild(abertura);

    g.iniciaGame = function()
    {
    	if (abertura) 
    	{
    		g.removeChild(abertura);
    		abertura = null;

    		bthelp = new Bitmap("helpbutton", {width:64, height:64}, preloader.queue, true);
			bthelp.on("click", helpHandler);
            btclean = new Bitmap("cleanbutton", {width:64, height:64}, preloader.queue, true);
            btclean.on("click", cleanHandler);
			MouseSettings.configure([bthelp, btclean], "normal");
    		g.addChild(bthelp);

            btsettings.visible = true;
            btinformacoes.visible = false;
    		
    		Common.points = 0;
    	}
    	
    	criaLevel();
    }
    g.reiniciaLevel = function()
    {
    	game.removeAllChildren();

    	level = new Level(false);
    	game.addChild(level);
    }
	// método disparado qdo o botão help é pressionado
    function helpHandler(event)
    {
        if (help || ranking || opcoes || informacoes || creditos || gameover || finalizacao || sucesso)
            return;

    	help = new Ajuda();
    	g.addChild(help);

        playLateSound("pop", "ajuda", 200);
    }
    function cleanHandler(event)
    {
        level.clear();
        playSound("pop");
    }
    // cria um novo level de acordo com o currentLevel
    function criaLevel()
    {
        if (Common.firstTime)
        {
            instrucoes = new Instrucoes();
            g.addChild(instrucoes);
        }
        else
        {
            g.novoLevel();
        }
    	
    }
    // cria um novo level
    g.novoLevel = function()
    {
    	if (Common.currentLevel >= 7)
    	{
    		finalizacao = new Finalizacao();
    		game.addChild(finalizacao);

            playSound("finalizacao");
    	}
    	else
    	{
    		// remove o level atual se existir
	    	if (level)
	    		game.removeChild(level);

	    	// cria um novo level
	    	level = new Level();
	    	game.addChild(level);
    	}
    }
    // cria o game over quando o tempo acaba
    g.gameOver = function(tempo)
    {
    	//if (tempo)
    		//game.removeAllChildren();

		Common.running = false;
    	gameover = new GameOver(tempo);
    	game.addChild(gameover);
    }
    // atualiza os objetos do game
    g.update = function(event)
    {
    	if(abertura)
    		abertura.update();
    	if (instrucoes)
    		instrucoes.update();
    	if (sucesso)
    		sucesso.update();
    	if (finalizacao)
    		finalizacao.update();
    	if (gameover)
    		gameover.update();
        if (bthelp)
            bthelp.set({x:stage.width - 40, y:stage.height - 40});
        if (btclean)
            btclean.set({x:40, y:stage.height - 40});
    	if (help)
    		help.update();
    	if (level)
    		level.update();
    }

    return g;
}

// OBJETO IDENTIFICACAO
var Identificacao = function()
{
	// container principal
	var I = new createjs.Container();

	var background = new createjs.Shape();
	background.alpha = 0.75;

	var indicacao = new Bitmap("indicacao", {width:210, height:70}, preloader.queue, true);
	var concentracao = new Bitmap("concentracao", {width:210, height:70}, preloader.queue, true);
	var noas = new Bitmap("logonoas", {width:180, height:70}, preloader.queue, true);

	// adiciona objetos ao container
	I.addChild(background, indicacao, concentracao, noas);

	I.update = function(event)
	{
		background.graphics.clear();
        background.graphics.beginFill("#000000").drawRect(0, stage.height - 80, stage.width, 80);

        indicacao.set({x:stage.width * 0.5 - 110, y:stage.height - 40});
        concentracao.set({x:stage.width * 0.5 + 110, y:stage.height - 40});

        if (window.innerWidth < 720)
        	noas.set({x:100, y:45, scaleX:1, scaleY: 1});
        else
        	noas.set({x:stage.width - 70, y:stage.height - 40, scaleX:0.66, scaleY: 0.66});
	}

	I.invisible = function(boo)
	{
		indicacao.alpha = boo;
		concentracao.alpha = boo;
		background.alpha = boo * 0.7;
	}

	return I;
}

// OBJETO ABERTURA
var Abertura = function()
{
	// container principal
	var A = new createjs.Container();

    var gato = new Bitmap("gato", {width:200, height: 200}, preloader.queue, true);
    var bola = new Bitmap("bola", {width:200, height: 200}, preloader.queue, true);
    var joaninha = new Bitmap("joaninha", {width:200, height: 200}, preloader.queue, true);

	// botão iniciar
	var btiniciar = new Bitmap("playbutton", {x:middleX, y:middleY, width:102, height:102}, preloader.queue, true);
	btiniciar.on("click", iniciarHandler);
	MouseSettings.settings(btiniciar, "normal");
	
	// titulo do aplicativo
	var title = new Bitmap("titulo", {x:middleX, y:middleY, width:605, height:92}, preloader.queue, true);

	// barra de identificação
	var identificationBar = new Identificacao();

	// adicionando objetos ao container
	A.addChild(bola, btiniciar, joaninha, title, identificationBar, gato);

	function iniciarHandler(event)
	{
		if (creditos || informacoes || opcoes || ranking)
			return;
		// chama o método iniciaGame no objeto game
		game.iniciaGame();
        music.volume = 0.2;

        playLateSound("pop", Common.firstTime ? "instrucoes" : "fase1", 200);
	}

	A.update = function()
	{
		btiniciar.set({x:stage.width * 0.5, y:stage.height * 0.7});

		title.set({x: middleX, y:middleY * 0.75, scaleX: scale, scaleY: scale});

        gato.set({scaleX:scale, scaleY:scale, x:(gato.width * 0.5) * horizontalScale, y:window.innerHeight - (gato.height * 0.75) * verticalScale});
        bola.set({scaleX:scale, scaleY:scale, x:window.innerWidth - (bola.width * 0.5) * horizontalScale, y:window.innerHeight - (bola.height * 0.75) * verticalScale});
        joaninha.set({scaleX:scale, scaleY:scale, x:middleX, y:joaninha.height * 0.5 * verticalScale});

        if (window.innerWidth < 720)
			identificationBar.invisible(0);
		else 
			identificationBar.invisible(1);

        identificationBar.update();
	}

	return A;
}