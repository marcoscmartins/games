// objeto informacoes
var Informacoes = function()
{
	// container principal
	var o = new createjs.Container();
	// container dos textos
	var content = new createjs.Container();

	var shadow = new createjs.Shape();
	shadow.alpha = 0.1;

	// label do objeto
	var label = new Label("INFORMAÇÕES", Common.modalTitleBlack());
	// fundo sobre o qual os botões estão dispostos
	var background = new Bitmap("background", {width:900, height:500}, preloader.queue, true);
	// botão que confirma as informacoes (*OK)
	var btconfirm = new Bitmap("confirmbutton", {width:192, height:73}, preloader.queue, true);
	btconfirm.on("click", confirmHandler);
	// botão que cria a janela de créditos
	var btcredits = new Bitmap("credits", {width:192, height:73}, preloader.queue, true);
	btcredits.on("click", creditsHandler);
	// configurando os botões
	MouseSettings.configure([btconfirm, btcredits], "normal");

	// CAMPOS
	var topFormat, titleFormat, complementFormat;

    topFormat = {format:"bold 50px Jockey One", color:"#333333", align:"center", baseLine:"top", w:stage.width * 0.4, h:50, lineHeight:50};
    titleFormat = {format:"bold 22px Jockey One", color:"#333333", align:"center", baseLine:"top", w:middleX * 1.25, h:25, lineHeight:25};
    complementFormat = {format:"18px Jockey One", color:"#444444", align:"center", baseLine:"top", w:middleX * 1.25, h:25, lineHeight:15};

    var responsavel = new Label("PROFESSORA RESPONSÁVEL", titleFormat);
    var responsavelComp = new Label("Fátima Beatriz", complementFormat);

    var concentracao = new Label("ÁREA DE CONCENTRAÇÃO", titleFormat);
    var concentracaoComp = new Label("Língua Portuguesa", complementFormat);

    var anos = new Label("ANOS RECOMENDADOS", titleFormat);
    var anosComp = new Label("1º e 2º do Ensino Fundamental", complementFormat);

    var descricao = new Label("DESCRIÇÃO DA ATIVIDADE", titleFormat);
    var descricaoComp = new Label("Nesta atividade, os alunos deverão completar as cruzadinhas de acordo com o nome das imagens.", complementFormat);

    var proporciona = new Label("O QUE PROPORCIONA AO ALUNO", titleFormat);
    var proporcionaComp = new Label("Desenvolver a relação entre nome e imagem, iniciando a noção de substantivo, memorizar ortografia, além de aperfeiçoar a coordenação motora fina.", complementFormat);

	content.addChild(background, btconfirm, btcredits, label, responsavel, responsavelComp, 
		concentracao, concentracaoComp, anos, anosComp, descricao, descricaoComp, proporciona, proporcionaComp);

	o.addChild(shadow, content);

	function confirmHandler(event)
	{
		stage.removeChild(informacoes);
		informacoes = null;
		playSound("pop");
	}

	function creditsHandler(event)
	{
		if (!creditos)
        {
            creditos = new Creditos();
            stage.addChild(creditos);
            creditos.update();
            
            playLateSound("pop", "creditos", 200);
        }
		stage.removeChild(informacoes);
		informacoes = null;
	}

	o.update = function()
	{
		shadow.graphics.clear();
		shadow.graphics.beginFill("#000000").drawRect(0, 0, stage.width, stage.height);

		var maxScale = Math.max(verticalScale, horizontalScale);

		label.set({x : middleX, y : 75 * verticalScale, lineWidth:middleX, font:"bold " + (50 * maxScale) + "px Jockey One"});

		background.set({x:middleX, y:middleY, scaleX:horizontalScale, scaleY:verticalScale});

		var posY = label.y;
        var vs = verticalScale;

        responsavel.set({		x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (22 * maxScale) + "px Jockey One"});
        responsavelComp.set({	x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (18 * maxScale) + "px Jockey One"});
        concentracao.set({		x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (22 * maxScale) + "px Jockey One"});
        concentracaoComp.set({	x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (18 * maxScale) + "px Jockey One"});
        anos.set({				x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (22 * maxScale) + "px Jockey One"});
        anosComp.set({			x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (18 * maxScale) + "px Jockey One"});
        descricao.set({			x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (22 * maxScale) + "px Jockey One"});
        descricaoComp.set({		x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (18 * maxScale) + "px Jockey One"});
        proporciona.set({		x:middleX, y:posY += 60 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (22 * maxScale) + "px Jockey One"});
        proporcionaComp.set({	x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (18 * maxScale) + "px Jockey One"});

        btconfirm.set({x:middleX - 100 * maxScale, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
        btcredits.set({x:middleX + 100 * maxScale, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
	}

	Common.Tween(shadow, "show", {alpha:0.7});

	return o;
}