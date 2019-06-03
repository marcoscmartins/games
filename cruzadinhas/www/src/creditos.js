// objeto créditos
var Creditos = function()
{
	// container principal
	var o = new createjs.Container();
	// container dos textos
	var content = new createjs.Container();

	var shadow = new createjs.Shape();
	shadow.alpha = 0.1;

	// label do objeto
	var label = new Label("CRÉDITOS", Common.modalTitleBlack());
	// fundo sobre o qual os botões estão dispostos
	var background = new Bitmap("background", {width:900, height:500}, preloader.queue, true);
	// botão que confirma as informacoes (*OK)
	var btconfirm = new Bitmap("confirmbutton", {width:192, height:73}, preloader.queue, true);
	btconfirm.on("click", confirmHandler);
	// configurando os botões
	MouseSettings.settings(btconfirm, "normal");

	// CAMPOS
	var topFormat, titleFormat, complementFormat;

    topFormat = {format:"bold 50px Jockey One", color:"#333333", align:"center", baseLine:"top", w:stage.width * 0.4, h:50, lineHeight:50};
    titleFormat = {format:"bold 24px Jockey One", color:"#333333", align:"center", baseLine:"top", w:middleX * 1.25, h:25, lineHeight:30};
    complementFormat = {format:"20px Jockey One", color:"#444444", align:"center", baseLine:"top", w:middleX * 1.25, h:25, lineHeight:20};

    var pedagogica = new Label("Equipe Pedagógica", titleFormat);
    var pedagogicaComp = new Label("Fátima Beatriz", complementFormat);

    var design = new Label("Design e Programação", titleFormat);
    var designComp = new Label("Marcos Cardoso", complementFormat);

    var correcao = new Label("Correção Ortográfica", titleFormat);
    var correcaoComp = new Label("Débora Ceolin", complementFormat);

    var midia = new Label("Música e Efeitos Sonoros", titleFormat);
    var midiaComp = new Label("Finnolia Productions Inc\nFlash Kit", complementFormat);

	content.addChild(background, btconfirm, label, pedagogica, pedagogicaComp, 
		design, designComp, correcao, correcaoComp, midia, midiaComp);

	o.addChild(shadow, content);

	function confirmHandler(event)
	{
		stage.removeChild(creditos);
		creditos = null;
		playSound("pop");
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

        pedagogica.set({		x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (24 * maxScale) + "px Jockey One"});
        pedagogicaComp.set({	x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (20 * maxScale) + "px Jockey One"});
        design.set({			x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (24 * maxScale) + "px Jockey One"});
        designComp.set({		x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (20 * maxScale) + "px Jockey One"});
        correcao.set({			x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (24 * maxScale) + "px Jockey One"});
        correcaoComp.set({		x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (20 * maxScale) + "px Jockey One"});
        midia.set({				x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (24 * maxScale) + "px Jockey One"});
        midiaComp.set({			x:middleX, y:posY += 30 * vs, lineWidth:window.innerWidth * 0.85, lineHeight: 20 * maxScale, font: "bold " + (20 * maxScale) + "px Jockey One"});

        btconfirm.set({x:middleX, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
	}

	Common.Tween(shadow, "show", {alpha:0.7});

	return o;
}