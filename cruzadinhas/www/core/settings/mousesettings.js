var MouseSettings = function(){}

MouseSettings.configure = function(buttons, type)
{
	for(i = 0; i < buttons.length; i++)
		MouseSettings.settings(buttons[i], type);
}

MouseSettings.settings = function(button, type)
{
	if (type == "normal")
	{
		button.on("mouseover", MouseSettings.overButton);
		button.on("mouseout", MouseSettings.outButton);
	}	
	else if (type == "color")
	{
		button.on("mouseover", MouseSettings.overButtonColor);
		button.on("mouseout", MouseSettings.outButtonColor);
	}	
	else if (type == "singleColor")
	{
		button.on("mouseover", MouseSettings.overButtonSingleColor);
		button.on("mouseout", MouseSettings.outButtonSingleColor);
	}

	button.cursor = "pointer";
}

MouseSettings.overButton = function(event)
{
	createjs.Tween.get(event.currentTarget, {override:true}).to({scaleX:1.1, scaleY:1.1}, 500, createjs.Ease.quartOut);
}

MouseSettings.outButton = function(event)
{
    createjs.Tween.get(event.currentTarget, {override:true}).to({scaleX:1.0, scaleY:1.0}, 500, createjs.Ease.quartIn);
}

/**
* Métodos disparados para over e out dos botões
* São responsáveis pela troca de cores dos botões
*/
MouseSettings.overButtonColor = function(event)
{
    /*var shape = event.currentTarget.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:["#BB0000", "#990000"], strokeColor:null, strokeStyle:0.5}, {width:shape.width, height:shape.height});*/
    var button = event.currentTarget;
    var shape = button.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:button.overColors, strokeStyle:0.5, strokeColor:null}, 
    	{width:button.width, height:button.height, roundness:button.roundness});
}

MouseSettings.outButtonColor = function(event)
{
    /*var shape = event.currentTarget.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:["#990000", "#660000"], strokeColor:null, strokeStyle:0.5}, {width:shape.width, height:shape.height});*/
    var button = event.currentTarget;
    var shape = button.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:button.outColors, strokeStyle:0.5, strokeColor:null}, 
    	{width:button.width, height:button.height, roundness:button.roundness});
}

/**
* Métodos disparados para over e out dos botões
* São responsáveis pela troca de cores dos botões
*/
MouseSettings.overButtonSingleColor = function(event)
{
    var shape = event.currentTarget.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:["#CCCCCC", "#AAAAAA"], strokeColor:null, strokeStyle:0.5}, {width:28, height:28, roundness:3});
}

MouseSettings.outButtonSingleColor = function(event)
{
    var shape = event.currentTarget.getChildAt(0);
    Graphic.changeShapeColor(shape, {fillColors:["#333333", "#111111"], strokeColor:null, strokeStyle:0.5}, {width:28, height:28, roundness:3});
}

MouseSettings.tweenColor = function(shape, color)
{
	//createjs.Tween
}