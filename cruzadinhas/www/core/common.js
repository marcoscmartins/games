/**
 * ...
 * @author Marcos Cardoso
 * @description Arquivo responsável pelos objetos e variáveis comuns utilizados no projeto
 */
var Common = function() {};

Common.currentLevel = 0;
Common.pontos = 0;
Common.limitHorizontal = 720;
Common.limitVertical = 400;
Common.wide = true;
Common.running = true;
Common.levelDuration = 120;
Common.currentTime = 0;
Common.interval = 0;
Common.times = [150, 180, 210, 240, 270, 300, 330];
Common.points = 0;
Common.atualPoints = 0;
Common.firstTime = true;

Common.R = function(n)
{
	return Math.round(n);
}
Common.modalTitle = function()
{
	return {format:"bold 50px Jockey One", color:"#FFF", name:"modalTitle", align:"center", baseLine:"middle", w:300, h:70};
}
Common.modalTitleBlack = function()
{
	return {format:"bold 3.3em Jockey One", color:"#212121", name:"modalTitleBlack", align:"center", baseLine:"middle", w:300, h:70};
}
Common.modalText = function()
{
	return {format:"bold 30px Jockey One", color:"#FFF", name:"modalText", align:"center", baseLine:"middle", w:middleX, h:35};
}
Common.modalTextBlack = function()
{
	return {format:"bold 30px Jockey One", color:"#212121", name:"modalText", align:"center", baseLine:"middle", w:middleX, h:35};
}
// retorna a imagem 
Common.getImage = function(str)
{
	return new Bitmap(str, {width:200, height:200}, preloader.queue, true);
}
// método que recebe um array de string e retorna um array de bitmaps
Common.getImages = function(arr)
{
	var temp = [];
	for (var i = 0; i < arr.length; i++)
		temp[i] = Common.getImage(arr[i]);

	return temp;
}
// lista as imagens necessárias de acordo com o level
Common.getLevelImages = function(i)
{
	var arr;
	switch(i)
	{
		case 1:
			arr = Common.getImages(["dados","morangos","tesoura"]);
			break;
		case 2:
			arr = Common.getImages(["cadeado","bananas","borboleta","gato","mala"]);
			break;
		case 3:
			arr = Common.getImages(["cenouras","sorvete","casa","carro","bola","bota"]);
			break;
		case 4:
			arr = Common.getImages(["telefone","sino","caju","flor","velas","torta","porta","uvas","chaves"]);
			break;
		case 5:
			arr = Common.getImages(["lapis","lampada","celular","sapatos","relogio","ventilador","chapeu","lixeira","porco"]);
			break;
		case 6:
			arr = Common.getImages(["joaninha","estrela","peixe","foguete","cofre","piano","martelo","pena","coco","controle"]);
			break;
		case 7:
			arr = Common.getImages(["calculadora","cogumelo","computador","muro","roda","disco","alho","lupa","bateria","cama","caixa","livros"]);
			break;
	}
	return arr;
}

Common.clearInterval = function()
{
	clearInterval(Common.interval);
}
Common.resetGame = function()
{
	Common.points = 0;
	Common.running = true;
	Common.currentLevel = 0;
}

Common.Tween = function(target, type, args)
{
	if (type == "center")
	{
		createjs.Tween.get(target).wait(0).to({x:0, y:0}, 500, createjs.Ease.quadOut);
	}
	else if (type == "left")
	{
		createjs.Tween.get(target).wait(0).to({x:-stage.width, y:0}, 500, createjs.Ease.quadIn);
	}
	else if (type == "right")
	{
		
	}
	else if (type == "top")
	{
		
	}
	else if (type == "bottom")
	{
		
	}
	else if (type == "show")
	{
		createjs.Tween.get(target).to({alpha:args.alpha}, 500, createjs.Ease.quadOut);
	}
	else if (type == "hide")
	{
		createjs.Tween.get(target).to({alpha:0.1}, 500, createjs.Ease.quadIn);
	}
}

Common.random = function(_arr) 
{			
    _arr.sort(Common.randOrder);
}

Common.randOrder = function(a, b) 
{    
    return Math.random() > 0.5 ? 1 : -1;
}