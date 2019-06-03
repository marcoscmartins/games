// OBJETO INSTRUÇÕES
var Ajuda = function()
{
	// container principal
	var o = new createjs.Container();
	// container dos textos
	var content = new createjs.Container();

	var shadow = new createjs.Shape();
	shadow.alpha = 0.1;

	// label do objeto
	var label = new Label("Arraste as peças até os espaços para formar as palavras.\nPara remover uma letra basta dar um duplo clique nela.", Common.modalTextBlack());
	// fundo sobre o qual os botões estão dispostos
	var background = new Bitmap("background", {width:900, height:500}, preloader.queue, true);
	// botão que confirma as informacoes (*OK)
	var btconfirm = new Bitmap("confirmbutton", {width:192, height:73}, preloader.queue, true);
	btconfirm.on("click", confirmHandler);
	MouseSettings.settings(btconfirm, "normal");

	var image = new Bitmap("helpimage", {width:357, height:226}, preloader.queue, true);
	var pecas = new Bitmap("pecashelp", {width:105, height:232}, preloader.queue, true);

	content.addChild(background, btconfirm, image, pecas, label);

	o.addChild(shadow, content);

	function confirmHandler(event)
	{
		game.removeChild(help);
		help = null;
		playSound("pop");
	}

	o.update = function()
	{
		shadow.graphics.clear();
		shadow.graphics.beginFill("#000000").drawRect(0, 0, stage.width, stage.height);

		var maxScale = Math.max(verticalScale, horizontalScale);

		label.set({x : middleX, y : 75 * verticalScale, font:"bold " + (30 * maxScale) + "px Jockey One"});
		label.set({lineWidth:window.innerWidth * 0.95, lineHeight: 30 * maxScale})

		background.set({x:middleX, y:middleY, scaleX:horizontalScale, scaleY:verticalScale});
		
		image.set ({x:middleX, y:middleY * 1.1, scaleX:scale, scaleY:scale});
		pecas.set ({x:window.innerWidth * 0.1, y:middleY * 1.1, scaleX:scale, scaleY:scale});
		
		btconfirm.set({x:middleX, y:window.innerHeight * 0.95, scaleX:maxScale, scaleY:maxScale});
	}

	Common.Tween(shadow, "show", {alpha:0.7});

	return o;
}