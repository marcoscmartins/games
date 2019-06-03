// OBJETO RANKING
var Ranking = function()
{
	// container principal
	var o = new createjs.Container("ranking");
	// container dos textos
	var content = new createjs.Container();

	var shadow = new createjs.Shape();
	shadow.alpha = 0.1;

	// label do objeto
	var label = new Label("RANKING", Common.modalTitleBlack());
	var background = new Bitmap("background", {width:900, height:500}, preloader.queue, true);
	// botão que confirma as informacoes (*OK)
	var btconfirm = new Bitmap("confirmbutton", {width:192, height:73}, preloader.queue, true);
	btconfirm.on("click", confirmHandler);
	// configurando os botões

	MouseSettings.settings(btconfirm, "normal");

	// CAMPOS
    var topo = new lib.TopoRanking();
    topo.posicao.text = "Posição";
    topo.nome.text = "Nome";
    topo.pontuacao.text = "Pontuação";

    var campos = [];

	content.addChild(background, btconfirm, label, topo);

	o.addChild(shadow, content);

    criaCampos();

    function criaCampos()
    {
    	var campo;
        var len = users.length > 5 ? 5 : users.length;
    	for(var i = 0; i < len; i++)
    	{
    		campo = new lib.CampoRanking();
    		campo.posicao.text = (i + 1) + ".";
    		campo.nome.text = users[i].name;
    		campo.pontuacao.text = scores[i].score;
    		content.addChild(campo);
    		campos[i] = campo;
    		campo.fundo.gotoAndStop(i % 2 == 0 ? 1 : 2);
    	}
    	setTimeout(ajustaFundo, 10);
    }

    function ajustaFundo()
    {
    	for (var i = 0; i < campos.length; i++)
    		campos[i].fundo.gotoAndStop(i % 2 == 0 ? 1 : 2);
    }

	function confirmHandler(event)
	{
		stage.removeChild(ranking);
		ranking = null;

		playSound("pop");
	}

	o.update = function()
	{
		shadow.graphics.clear();
		shadow.graphics.beginFill("#000000").drawRect(0, 0, stage.width, stage.height);

		var maxScale = Math.max(verticalScale, horizontalScale);

		label.set({x : middleX, y : 75 * verticalScale, font:"bold " + (50 * maxScale) + "px Jockey One"});

		background.set({x:middleX, y:middleY, scaleX:horizontalScale, scaleY:verticalScale});
		
		var scala = window.innerWidth < Common.limitHorizontal ? scale * 2.5 : scale;

		var posY = label.y;
        var vs = verticalScale;

		topo.set  ({x:middleX, y:posY += 75 * vs, scaleX: scale, scaleY:scale});

		for (var i = 0; i < campos.length; i++)
			campos[i].set({x:middleX, y:posY += 50 * vs, scaleX:scale, scaleY:scale});
		
		btconfirm.set({x:middleX, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
	}

	Common.Tween(shadow, "show", {alpha:0.7});

	return o;
}

/*Ranking.saveScore = function(score)
{
	console.log("Tentando salvar " + score + " como score.");
	parent.GameService.saveScore("pontos", user.id, score, function(sucess) {console.log(sucess);});
}*/