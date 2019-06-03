/**
 * @author Marcos Cardoso
 * @description construtor do objeto Preloader
 */
var progresso = 0;
var Preloader = function(manifest) 
{
	this.manifest = manifest;
	this.logoCnec;
	
	this.barWidth = stage.width * 0.4;
	this.barHeight = stage.height * 0.025;
	this.containerWidth = stage.width * 0.45;
	this.containerHeight = stage.height * 0.35;
	
	this.preQueue = new createjs.LoadQueue(true);
	this.queue = new createjs.LoadQueue(true);
};

/**
 * Método a ser chamado para iniciar o preloader.
 * Nesses casos deve ser utilizado: preQueue.on("complete", this.loadComplete, this);
 * ao invés de: preQueue.addEventListener("complete", this.loadComplete);
 * devido ao fato de que utilizando addEventListener a referência do escopo do preloader é perdida
 * e utilizando on("complete"... é possível redefinir o escopo.
 */
Preloader.prototype.initialize = function()
{
	this.preQueue.on("complete", this.loadComplete, this);
	//preQueue.addEventListener("complete", this.loadComplete);
	this.preQueue.loadFile({src:"core/preloader/cnec.png", id:"logoCnec"});
};

/**
 * Método disparado quando o carregamento do logo é finalizado.
 */
Preloader.prototype.loadComplete = function(event)
{
    // alert("inicio preloader");
	var preQueue = this.preQueue;
	this.logoCnec = new createjs.Bitmap(this.preQueue.getResult("logoCnec"));
	this.logoCnec.x = 15;
	this.logoCnec.y = 15;
	this.logoCnec.scaleX = scale;
	this.logoCnec.scaleY = scale;
	
	this.loadContent();
};

/**
 * Método que cria toda a estrutura visual e despara o carregamento do manifest.
 */
Preloader.prototype.loadContent = function()
{
	createjs.Sound.alternateExtensions = ["mp3"]; 
	
	// criando um container para as partes do preloader
	container = new Container("preloader", {width:this.containerWidth, height:this.containerHeight, x:stage.width * 0.5, y:stage.height * 0.5});
	
	// criando o background para o preloader
	var bg = new RoundedRect({fillColors:["#EEEEEE","#CCCCCC"], strokeColor:"#CCCCCC", strokeStyle:0.5}, {width:this.containerWidth, height:this.containerHeight, roundness:15});
	bg.x = 200; 
	bg.y = (this.containerHeight * 0.5) - (bg.width * 0.5);
	//bg.shadow = new createjs.Shadow("#333333", 2, 2, 5);
	
	// criando o gráfico que representa a barra do preloader
	graphics = new createjs.Graphics();
    graphics.setStrokeStyle(0.5);
    graphics.beginStroke("#073B5D").drawRect(25 * scale, this.containerHeight * 0.6, this.barWidth, this.barHeight);
    
	// criando o campo de texto que apresentará a porcentagem carregada
    var textFormat = {format:"bold 12px Roboto", color:"#333", name:"progress", align:"center", baseLine:"middle", w:this.barWidth, h:this.barHeight};
    label = new Label("Carregando o jogo 0%", textFormat, "#EEEEEE");
    label.x = this.containerWidth * 0.5;
    label.y = this.containerHeight * 0.8;
    
	// criando o shape que contém a barra de carregamento
    shape = new createjs.Shape(graphics);

	// adicionando os objetos do preloader
    container.addChild(bg, shape, label, this.logoCnec);
    
    stage.addChild(container);
	
	// iniciando o carregamento dos arquivos.
    this.queue.installPlugin(createjs.Sound);
	// Utilize:
	this.queue.on("progress", this.handleProgress, this);
	this.queue.on("complete", this.handleComplete, this);
	this.queue.on("fileload", this.handleFileLoad, this);
	// ao invés de:
    //this.queue.addEventListener("progress", this.handleProgress);
    //this.queue.addEventListener("complete", this.handleComplete);
    this.queue.loadManifest(this.manifest);
};

/**
 * Registra o progresso do carregamento.
 */
Preloader.prototype.handleProgress = function(event)
{
    graphics.clear();
    // Draw the outline again.
    graphics.beginStroke("#C0C0C0").drawRect(25 * scale, this.containerHeight * 0.6, this.barWidth, this.barHeight).setStrokeStyle(0.5);
    // Draw the progress bar
    graphics.beginFill("#008ACA").drawRect(25 * scale, this.containerHeight * 0.6, Math.round(this.barWidth * event.progress), this.barHeight);
    // Update the progress
    label.text = "Carregando o jogo " + Math.round(100 * event.progress) + "%";
    progresso = event.progress;
};

/**
 * Disparando quando um item é carregado
 */
Preloader.prototype.handleFileLoad = function(event) 
{
	//alert("Progresso: " + progresso + " | Id: " + event.item.id);
};

/**
 * Disparado quando o carregamento de todos os itens é finalizado.
 */
Preloader.prototype.handleComplete = function(event)
{
    //alert("preloader complete");
    // Remove the container
    stage.removeChild(container);
    // Inicialize the game
    inicializaGame();
};