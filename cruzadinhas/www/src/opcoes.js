// OBJETO OPCOES
var Opcoes = function()
{
	// container principal
	var o = new createjs.Container();

	// fundo escuro
	var shadow = new createjs.Shape();
	shadow.alpha = 0.1;

	// label do objeto
	var label = new Label("OPÇÕES", Common.modalTitle());
	// fundo sobre o qual os botões estão dispostos
	var background = new Bitmap("opcoesbackground", {width:960, height:240}, preloader.queue, true);
	// botão que confirma as configurações (*OK)
	var btconfirm = new Bitmap("confirmbutton", {width:192, height:73}, preloader.queue, true);
	btconfirm.on("click", confirmHandler);
	MouseSettings.settings(btconfirm, "normal");

	//OPÇÕES DO MENU
	var bthome 			= new Bitmap("home", {width:102, height:102}, preloader.queue, true);
	var btinfo 			= new Bitmap("info", {width:102, height:102}, preloader.queue, true);
	/*var btmidiaon 		= new Bitmap("midiaon", {width:102, height:102}, preloader.queue, true);
	var btmidiaoff 		= new Bitmap("midiaoff", {width:102, height:102}, preloader.queue, true);
	var btfullscreenon 	= new Bitmap("fullscreenon", {width:102, height:102}, preloader.queue, true);
	var btfullscreenoff = new Bitmap("fullscreenoff", {width:102, height:102}, preloader.queue, true);*/
	var btclean 		= new Bitmap("cleanoptionbutton", {width:102, height:102}, preloader.queue, true);

	MouseSettings.configure([bthome, btinfo, /*btmidiaoff, btmidiaon, btfullscreenon, btfullscreenoff,*/ btclean], "normal");

	btclean.on("click", cleanHandler);
	bthome.on("click", homeHandler);
	btinfo.on("click", infoHandler);

	/*btmidiaon.on("click", midiaHandler);
	btmidiaoff.on("click", midiaHandler);

	btfullscreenon.on("click", fullscreenHandler);
	btfullscreenoff.on("click", fullscreenHandler);


	toggleButtons(isFullscreen ? "fullscreenoff" : "fullscreenon");
	toggleAudio(!allowMedia   ? "midiaon" : "");*/

	// 

	o.addChild(shadow, label, background, btconfirm, bthome, btinfo, /*btmidiaoff, btmidiaon, btfullscreenon, btfullscreenoff,*/ btclean);

	function cleanHandler(event)
    {
    	if (level)
        	level.clear();
		stage.removeChild(opcoes);
		opcoes = null;
        playSound("pop");
    }

	function homeHandler(event)
	{
		Common.clearInterval();
		//Ranking.saveScore(Common.points + Common.atualPoints);

		stage.removeAllChildren();
        inicializaGame();
		stage.removeChild(opcoes);
		opcoes = null;

		playSound("pop");
	}

	function infoHandler(event)
	{
		stage.removeChild(opcoes);
		opcoes = null;

        if (!informacoes)
        {
            informacoes = new Informacoes();
            stage.addChild(informacoes);
            informacoes.update();

            playLateSound("pop", "informacoes", 200);
        }
	}

	/*function midiaHandler(event)
	{
		toggleAudio(event.currentTarget.name);
        if (allowMedia)
            music.play();
        else
            stopSounds();

        playSound("pop");
	}

    function toggleAudio(nome)
    {
        if (nome == "midiaon")
        {
            btmidiaon.visible = false;
            btmidiaoff.visible = true;
            btmidiaoff.scaleX = btmidiaon.scaleX;
            btmidiaoff.scaleY = btmidiaon.scaleY;

            allowMedia = false;
        }
        else
        {
            btmidiaon.visible = true;
            btmidiaon.scaleX = btmidiaoff.scaleX;
            btmidiaon.scaleY = btmidiaoff.scaleY;
            btmidiaoff.visible = false;

            allowMedia = true;
        }
    }

	function fullscreenHandler(event)
	{
		toggleButtons(event.currentTarget.name);
        toggleFullScreen();
        
        playSound("pop", 0, 1);
	}

	function toggleButtons(nome)
    {
        if (nome == "fullscreenon")
        {
            btfullscreenon.visible = false;
            btfullscreenoff.visible = true;
            btfullscreenon.scaleX = btfullscreenoff.scaleX;
            btfullscreenon.scaleY = btfullscreenoff.scaleY;

            //isFullscreen = true;
        }
        else
        {
            btfullscreenon.visible = true;
            btfullscreenoff.visible = false;
            btfullscreenoff.scaleX = btfullscreenon.scaleX;
            btfullscreenoff.scaleY = btfullscreenon.scaleY;

            //isFullscreen = false;
        }
    }*/

	function confirmHandler(event)
	{
		playSound("pop");
		stage.removeChild(opcoes);
		opcoes = null;
	}

	o.update = function(event)
	{
		shadow.graphics.clear();
		shadow.graphics.beginFill("#000000").drawRect(0, 0, stage.width, stage.height);

		var maxScale = Math.max(verticalScale, horizontalScale);

		label.set({x : middleX, y : 75 * verticalScale, lineWidth:middleX, font:"bold " + (50 * maxScale) + "px Jockey One"});

		background.set({x:middleX, y:middleY, scaleX:horizontalScale, scaleY:verticalScale});
		
		btconfirm.set({x:middleX, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});

		var escala = window.innerWidth < Common.limitHorizontal ? 0.7 : 1;

		bthome.visible = btclean.visible = abertura != null ? false : true;

		/*bthome.set({x: middleX * 0.2, y: middleY, scaleX:escala, scaleY:escala});
		btinfo.set({x: middleX * 0.6, y: middleY, scaleX:escala, scaleY:escala});
		btmidiaon.set({x: middleX, y: middleY, scaleX:escala, scaleY:escala});
		btmidiaoff.set({x: middleX, y: middleY, scaleX:escala, scaleY:escala});
		btfullscreenon.set({x: middleX * 1.4, y: middleY, scaleX:escala, scaleY:escala});
		btfullscreenoff.set({x: middleX * 1.4, y: middleY, scaleX:escala, scaleY:escala});
		btclean.set({x: middleX * 1.8, y: middleY, scaleX:escala, scaleY:escala});*/

		bthome.set({x: middleX * 0.6, y: middleY, scaleX:escala, scaleY:escala});
		btinfo.set({x: middleX, y: middleY, scaleX:escala, scaleY:escala});
		btclean.set({x: middleX * 1.4, y: middleY, scaleX:escala, scaleY:escala});
	}

	Common.Tween(shadow, "show", {alpha:0.7});

	return o;
}