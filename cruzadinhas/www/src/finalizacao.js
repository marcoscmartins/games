// OBJETO FINALIZACAO
var Finalizacao = function()
{
	// container principal
	var o = new createjs.Container("finalizacao");
	// container dos textos
	var content = new createjs.Container();

	var shadow = new createjs.Shape();
	shadow.alpha = 0.1;

	// label do objeto
	var label = new Label("FIM DO JOGO", Common.modalTitleBlack());
	// fundo sobre o qual os botões estão dispostos
	var background = new Bitmap("background", {width:900, height:500}, preloader.queue, true);
	// botão que confirma as informacoes (*OK)
	var btnovojogo = new Bitmap("novojogobutton", {width:192, height:73}, preloader.queue, true);
	btnovojogo.on("click", novojogoHandler);
	// botão que cria a janela de créditos
	//var btranking = new Bitmap("rankingbutton", {width:192, height:73}, preloader.queue, true);
	//btranking.on("click", rankingHandler);
	// configurando os botões
	//MouseSettings.configure([btnovojogo, btranking], "normal");
	MouseSettings.settings(btnovojogo, "normal");

	// CAMPOS
    var format = {format:"bold 30px Jockey One", color:"#333333", align:"center", baseLine:"top", w:middleX, h:middleY, lineHeight:35};

    var str = "Parabéns!\nVocê resolveu todas as cruzadinhas.\nVocê fez " + Common.points + " pontos.\nJogue novamente e tente ampliar sua pontuação.";
    var texto = new Label(str, format);
    texto.regY = texto.getBounds().height * 0.45;

	content.addChild(background, btnovojogo, /*btranking, */label, texto);

	o.addChild(shadow, content);

	function novojogoHandler(event)
	{
		game.removeChild(finalizacao);
		finalizacao = null;

		Common.currentLevel = 0;

		game.iniciaGame();
		playSound("pop");
	}
	function rankingHandler(event)
	{
		if (!ranking)
		{
			ranking = new Ranking();
			stage.addChild(ranking);

			playLateSound("pop", "ranking", 200);
		}

		game.removeChild(finalizacao);
		finalizacao = null;
	}

	o.update = function()
	{
		shadow.graphics.clear();
		shadow.graphics.beginFill("#000000").drawRect(0, 0, stage.width, stage.height);
		var maxScale = Math.max(verticalScale, horizontalScale);

		label.set({x : middleX, y : 75 * verticalScale, lineWidth:middleX, font:"bold " + (50 * maxScale) + "px Jockey One"});

		background.set({x:middleX, y:middleY, scaleX:horizontalScale, scaleY:verticalScale});
		
		var textoBounds = texto.getTransformedBounds();
		texto.regY = textoBounds.height * 0.5;
		texto.set({	x:middleX, y:middleY, height:textoBounds.height, lineWidth:window.innerWidth * 0.85, lineHeight: 35 * maxScale, font:"bold " + (35 * maxScale) + "px Jockey One"});
		
		//btranking.set({x:middleX - 100 * maxScale, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
        btnovojogo.set({x:middleX/* + 100 * maxScale*/, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
	}

	Common.Tween(shadow, "show", {alpha:0.7});

	return o;
}