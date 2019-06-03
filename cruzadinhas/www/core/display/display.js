/**
 * Cria um container
 * @param {String} nome     Nome do container 
 * @param {Object} bounds   Dimensões e posicionamento do container
 * @param {Boolean} topLeft Define se o ponto de registro do container é no topo esquerdo do objeto
 */
var Container = function(nome, bounds, topLeft)
{
    var container = new createjs.Container();
    container.name = nome;
    container.width = bounds.width;
    container.height = bounds.height;
    container.x = bounds.x; 
    container.y = bounds.y; 

    if (topLeft == false || topLeft == null)
    {
        container.regX = container.width * 0.5;
        container.regY = container.height * 0.5;
    }

    return container;
};

var Button = function(shapeArgs, textArgs)
{
    var label = new createjs.Text(textArgs.label, textArgs.font, textArgs.color);
    label.textAlign         = textArgs.textAlign;
    label.textBaseline      = textArgs.baseLine;
    label.width             = label.lineWidth  = textArgs.width;
    label.height            = label.lineHeight = textArgs.height;

    var shape = new createjs.Shape();
    var container = new createjs.MovieClip();
    container.addChild(shape, label);

    container.update = function()
    {
        shape.graphics.clear();
        confirmShape.graphics.beginLinearGradientFill(shapeArgs.colors, shapeArgs.ratios, shapeArgs.x0, shapeArgs.y0, shapeArgs.x1, shapeArgs.y1);
        confirmShape.graphics.drawRect(shapeArgs.x, shapeArgs.y, shapeArgs.width, shapeArgs.height);
        confirmLabel.set({x:textArgs.x, y:textArgs.y, height:textArgs.height, lineHeight:textArgs.height, font:textArgs.font});
    }

    return container;
}

/**
 * Cria um botão cujo fundo é formado por shape e label
 * @param {string} label      Label que é apresentado no botão
 * @param {object} textFormat Formato do texto do label
 * @param {object} bounds     Dimensões do botão
 * @param {object} colors     Cores do botão
 */
var ShapeButton = function(texto, textFormat, bounds, colors, rounded)
{
    // O método createRoundedRect cria um gráfico com os parâmetros passados e retorna um shape
    var shape; // = new Rect(colors, bounds);
    if (rounded)
        shape = new RoundedRect(colors, bounds);
    else
        shape = new Rect(colors, bounds);

    var label = new Label(texto, textFormat);
    label.x = bounds.width * 0.5;
    label.y = bounds.height * 0.5;

    var container = new Container(texto, bounds);
    container.width = bounds.width;
    container.height = bounds.height;
    container.roundness = bounds.roundness;
    container.outColors = colors.fillColors;
    container.shape = shape;
    container.addChild(shape, label);

    return container;
}

var ImageButton = function(label, textFormat, buttonBG) 
{
	var label = new Label(label, textFormat);
	label.x = buttonBG.width * 0.5;
	label.y = buttonBG.height * 0.5;
	
	container = new Container(label, buttonBG);
	container.addChild(buttonBG, label);
	
	return container;
}

var HybridButton = function(label, textFormat, bounds, colors, bitmap, shapeColors)
{
	var container = Container.createContainer(label, bounds);

    var shape = Graphic.createRoundedRect(colors, bounds);

	var label = Label.createLabel(label, textFormat);
	
	if (textFormat.align == "center")
		label.x = container.width + label.width * 0.5;
	else if (textFormat.align == "left")
    	label.x = container.width + 10;

    label.y = bounds.height * 0.5;

	container.addChild(shape, label, bitmap);

	MouseSettings.colors = shapeColors;
	MouseSettings.bounds = bounds;
	MouseSettings.settings(container, "gradient");
    
	//return container;
}

var Bitmap = function(_name, _position, _queue, centraliza)
{
    var temp 	= _queue.getResult(_name);
    var img 	= new createjs.Bitmap(temp);
    img.x 		= _position.x; 
    img.y 		= _position.y;
    img.width 	= temp.width * scale; 
    img.height 	= temp.height * scale;
    img.name 	= _name;

    if (centraliza)
    {
        img.regX    = _position.width * 0.5;
        img.regY    = _position.height * 0.5;
    }

    return img;
};

var Graphic = function(){};
Graphic.changeShapeColor = function(shape, colors, bounds)
{
    shape.graphics.clear();
    shape.graphics.setStrokeStyle(colors.strokeStyle);
    shape.graphics.beginStroke(colors.strokeColor);
    shape.graphics.beginLinearGradientFill(colors.fillColors, [0, 1], 0, 0, 0, bounds.height);
    shape.graphics.drawRoundRect(0, 0, bounds.width, bounds.height, bounds.roundness);
}

/**
 * Cria um objeto retangular
 * @param {Object} colors As cores utilizadas para preenchimento do objeto.
 * Ex.: {fillColors:["#0066CC", "#0033BF"], strokeColor:"#DDD", strokeStyle:0.5};
 * @param {Object} bounds As dimensões do objeto
 * Ex.: {x:0, y:0, width:125, height:56, roundness:9}
 */
var Rect = function(colors, bounds, onCenter)
{
    if (!colors.alpha)
        colors.alpha = 1;

    var graphic = new createjs.Graphics();
    graphic.setStrokeStyle(colors.strokeStyle);
    graphic.alpha = colors.alpha;
    graphic.beginStroke(colors.strokeColor);
    //graphic.beginFill(bounds.fillColor);
    graphic.beginLinearGradientFill(colors.fillColors, [0, 1], 0, 0, 0, bounds.height);
    graphic.drawRect(0, 0, bounds.width, bounds.height);

    var shape = new createjs.Shape(graphic);
    shape.alpha = colors.alpha;

    return shape;
}

var RoundedRect = function(colors, bounds)
{
    if (!colors.alpha)
        colors.alpha = 1;
    
    var graphic = new createjs.Graphics();
    graphic.setStrokeStyle(colors.strokeStyle);
    graphic.alpha = colors.alpha;
    graphic.beginStroke(colors.strokeColor);
    graphic.beginLinearGradientFill(colors.fillColors, [0, 1], 0, 0, 0, bounds.height);
    graphic.drawRoundRect(0, 0, bounds.width, bounds.height, bounds.roundness);

    var shape = new createjs.Shape(graphic);

    return shape;
}

var Line = function(style, from, to)
{
    var graph = new createjs.Graphics();
    graph.ss(style.stroke);                 // ss   : setStrokeStyle
    graph.s(style.color);                   // s    : beginStroke
    graph.mt(from.x, from.y);               // mt   : moveTo
    graph.lt(to.x, to.y);                   // lt   : lineTo

    var shape = new createjs.Shape(graph);

    return shape;
}

var Label = function(label, args) 
{
    var label          = new createjs.Text(label, args.format, args.color);
    label.name         = args.name;
    label.textAlign    = args.align;
    label.textBaseline = args.baseLine;
    label.width        = label.lineWidth = args.w;
    label.height       = args.h;

    if (args.lineHeight == null)
        label.lineHeight = args.h;
    else 
        label.lineHeight = args.lineHeight;

    return label;
};
