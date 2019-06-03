(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 60,
	color: "#454545",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.fundo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{black:0,yellow:1,orange:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Eg36AF7IAAr1MBv1AAAIAAL1g");
	this.shape.setTransform(0,0,1.257,0.658);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Eg36AF7IAAr1MBv1AAAIAAL1g");
	this.shape_1.setTransform(0,0,1.257,0.658);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.098)").s().p("Eg36AF7IAAr1MBv1AAAIAAL1g");
	this.shape_2.setTransform(0,0,1.257,0.658);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-25,900,50);


(lib.roundedBackgroundTimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#367094").s().p("AkLEMQhvhvgBidQABicBvhwQBvhvCcAAQCdAABvBvQBvBwABCcQgBCdhvBvQhvBwidAAQicAAhvhwg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,72,72);


(lib.roundedBackgroundPoints = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C75C5C").s().p("AkLEMQhvhvgBidQABicBvhwQBvhvCcAAQCdAABvBvQBvBwABCcQgBCdhvBvQhvBwidAAQicAAhvhwg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,72,72);


(lib.roundedBackgroundCounter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D0CF75").s().p("AkLEMQhvhvgBidQABicBvhwQBvhvCcAAQCdAABvBvQBvBwABCcQgBCdhvBvQhvBwidAAQicAAhvhwg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,72,72);


(lib.roundedBackground = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5CF87").s().p("AkLEMQhvhvgBidQABicBvhwQBvhvCcAAQCdAABvBvQBvBwABCcQgBCdhvBvQhvBwidAAQicAAhvhwg");
	this.shape.setTransform(0,0,0.947,0.947);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-36,72,72);


(lib.PecasAlvo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.type = "alvo";
		this.filled = false;
		this.same = false;
		this.peca = null;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0E1").s().p("AkmEnIAApNIJNAAIAAJNg");
	this.shape.setTransform(0,0,0.712,0.712);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FF00").s().p("AkmEnIAApNIJNAAIAAJNg");
	this.shape_1.setTransform(0,0,0.712,0.712);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C75C5C").s().p("AkmEnIAApNIJNAAIAAJNg");
	this.shape_2.setTransform(0,0,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0E1").s().p("AhEg7ICJAAIhFB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,-6,13.9,12);


(lib.TopoRanking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var posicao = this.posicao;
		posicao.name = "posicao";
		var nome = this.nome;
		nome.name = "nome";
		var pontuacao = this.pontuacao;
		pontuacao.name = "pontuacao";
		var fundo = this.fundo;
		fundo.name = "fundo";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.pontuacao = new cjs.Text("100", "32px 'Jockey One'", "#FFFFFF");
	this.pontuacao.name = "pontuacao";
	this.pontuacao.textAlign = "center";
	this.pontuacao.lineHeight = 47;
	this.pontuacao.lineWidth = 108;
	this.pontuacao.parent = this;
	this.pontuacao.setTransform(276,-22.3);

	this.nome = new cjs.Text("Marcos Cardoso", "32px 'Jockey One'", "#FFFFFF");
	this.nome.name = "nome";
	this.nome.textAlign = "center";
	this.nome.lineHeight = 47;
	this.nome.lineWidth = 494;
	this.nome.parent = this;
	this.nome.setTransform(-28.9,-22.3);

	this.posicao = new cjs.Text("1.", "32px 'Jockey One'", "#FFFFFF");
	this.posicao.name = "posicao";
	this.posicao.textAlign = "center";
	this.posicao.lineHeight = 47;
	this.posicao.lineWidth = 97;
	this.posicao.parent = this;
	this.posicao.setTransform(-328.4,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.posicao},{t:this.nome},{t:this.pontuacao}]}).wait(1));

	// Camada 3
	this.fundo = new lib.fundo();
	this.fundo.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fundo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-25,900,50);


(lib.CampoRanking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var posicao = this.posicao;
		posicao.name = "posicao";
		var nome = this.nome;
		nome.name = "nome";
		var pontuacao = this.pontuacao;
		pontuacao.name = "pontuacao";
		var fundo = this.fundo;
		fundo.name = "fundo";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.pontuacao = new cjs.Text("100", "28px 'Jockey One'", "#212121");
	this.pontuacao.name = "pontuacao";
	this.pontuacao.textAlign = "center";
	this.pontuacao.lineHeight = 41;
	this.pontuacao.lineWidth = 108;
	this.pontuacao.parent = this;
	this.pontuacao.setTransform(276,-19.6);

	this.nome = new cjs.Text("Marcos Cardoso", "28px 'Jockey One'", "#212121");
	this.nome.name = "nome";
	this.nome.textAlign = "center";
	this.nome.lineHeight = 41;
	this.nome.lineWidth = 494;
	this.nome.parent = this;
	this.nome.setTransform(-28.9,-19.6);

	this.posicao = new cjs.Text("1.", "28px 'Jockey One'", "#212121");
	this.posicao.name = "posicao";
	this.posicao.textAlign = "center";
	this.posicao.lineHeight = 41;
	this.posicao.lineWidth = 50;
	this.posicao.parent = this;
	this.posicao.setTransform(-328.5,-19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.posicao},{t:this.nome},{t:this.pontuacao}]}).wait(1));

	// Camada 3
	this.fundo = new lib.fundo();
	this.fundo.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.fundo).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-25,900,50);


(lib.Peca = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		this.cursor = "pointer";
		this.alvo = null;
		this.index = 0;
		this.str = "";
		
		this.setLetra = function(s, i)
		{
			o.index = i;
			o.str = s;
			o.letra.text = s;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.letra = new cjs.Text("A", "26px 'Jockey One'", "#333333");
	this.letra.name = "letra";
	this.letra.textAlign = "center";
	this.letra.lineHeight = 38;
	this.letra.lineWidth = 30;
	this.letra.parent = this;
	this.letra.setTransform(0,-18.1);

	this.timeline.addTween(cjs.Tween.get(this.letra).wait(1));

	// bg
	this.bg = new lib.PecasAlvo();
	this.bg.parent = this;
	this.bg.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-24,52,52);


(lib.ImageContainer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var container = this;
		
		var numero = this.numero;
		numero.name = "numero";
		
		container.setImage = function(img)
		{
			container.addChild(img);
			img.set({x:0,y:0, scaleX:0.5, scaleY:0.5});
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// container
	this.instance = new lib.roundedBackground();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// txt
	this.numero = new cjs.Text("1", "18px 'Jockey One'", "#7A2C2C");
	this.numero.name = "numero";
	this.numero.textAlign = "center";
	this.numero.lineHeight = 27;
	this.numero.lineWidth = 19;
	this.numero.parent = this;
	this.numero.setTransform(-47.8,-28);

	this.timeline.addTween(cjs.Tween.get(this.numero).wait(1));

	// fundo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0F0E1").s().rr(-30,-15,60,30,6);
	this.shape.setTransform(-30.4,-16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-38,104.4,82);


(lib.LevelTimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var txt = this.txt;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.txt = new cjs.Text("", "40px 'Jockey One'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 58;
	this.txt.lineWidth = 66;
	this.txt.parent = this;
	this.txt.setTransform(0,-27.9);
	this.txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.instance = new lib.roundedBackgroundTimer();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,92,92);


(lib.LevelPoints = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var txt = this.txt;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.txt = new cjs.Text("", "24px 'Jockey One'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 36;
	this.txt.lineWidth = 81;
	this.txt.parent = this;
	this.txt.setTransform(0,-16.8);
	this.txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.instance = new lib.roundedBackgroundPoints();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-40,96,92);


(lib.LevelCounter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var txt = this.txt;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.txt = new cjs.Text("", "40px 'Jockey One'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 58;
	this.txt.lineWidth = 66;
	this.txt.parent = this;
	this.txt.setTransform(0,-27.9);
	this.txt.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,2);

	this.instance = new lib.roundedBackgroundCounter();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#000000",1,1,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.txt}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-40,92,92);


(lib.Teclado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var o = this;
		
		var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
		
		function fillLetters()
		{
			var n = o.numChildren;
			for (var i = 0; i < n; i++)
			{
				var tecla = o.getChildAt(i);
				tecla.setLetra(letras[i], i);
				tecla.on("mousedown", downHandler);
			}
		}
		
		function downHandler(event)
		{
			var point = o.parent.globalToLocal(event.stageX, event.stageY);
			o.parent.clonePeca(event.currentTarget, point);
		}
		
		setTimeout(fillLetters, 10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camada 1
	this.instance = new lib.Peca();
	this.instance.parent = this;
	this.instance.setTransform(258,21.5);

	this.instance_1 = new lib.Peca();
	this.instance_1.parent = this;
	this.instance_1.setTransform(215,21.5);

	this.instance_2 = new lib.Peca();
	this.instance_2.parent = this;
	this.instance_2.setTransform(172,21.5);

	this.instance_3 = new lib.Peca();
	this.instance_3.parent = this;
	this.instance_3.setTransform(129,21.5);

	this.instance_4 = new lib.Peca();
	this.instance_4.parent = this;
	this.instance_4.setTransform(86,21.5);

	this.instance_5 = new lib.Peca();
	this.instance_5.parent = this;
	this.instance_5.setTransform(43,21.5);

	this.instance_6 = new lib.Peca();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,21.5);

	this.instance_7 = new lib.Peca();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-43,21.5);

	this.instance_8 = new lib.Peca();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-86,21.5);

	this.instance_9 = new lib.Peca();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-129,21.5);

	this.instance_10 = new lib.Peca();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-172,21.5);

	this.instance_11 = new lib.Peca();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-215,21.5);

	this.instance_12 = new lib.Peca();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-258,21.5);

	this.instance_13 = new lib.Peca();
	this.instance_13.parent = this;
	this.instance_13.setTransform(258,-21.5);

	this.instance_14 = new lib.Peca();
	this.instance_14.parent = this;
	this.instance_14.setTransform(215,-21.5);

	this.instance_15 = new lib.Peca();
	this.instance_15.parent = this;
	this.instance_15.setTransform(172,-21.5);

	this.instance_16 = new lib.Peca();
	this.instance_16.parent = this;
	this.instance_16.setTransform(129,-21.5);

	this.instance_17 = new lib.Peca();
	this.instance_17.parent = this;
	this.instance_17.setTransform(86,-21.5);

	this.instance_18 = new lib.Peca();
	this.instance_18.parent = this;
	this.instance_18.setTransform(43,-21.5);

	this.instance_19 = new lib.Peca();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,-21.5);

	this.instance_20 = new lib.Peca();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-43,-21.5);

	this.instance_21 = new lib.Peca();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-86,-21.5);

	this.instance_22 = new lib.Peca();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-129,-21.5);

	this.instance_23 = new lib.Peca();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-172,-21.5);

	this.instance_24 = new lib.Peca();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-215,-21.5);

	this.instance_25 = new lib.Peca();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-258,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-282,-45.5,568,94);


(lib.Level7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level6";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3, this.nro4, this.nro5, 
		this.nro6, this.nro7, this.nro8, this.nro9, this.nro10, this.nro11, this.nro12];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		var letras = ["a","b","c","d","e","g","h","i","l","m","o","p","r","s","t","u","v","x"];
		var count = [11,1,6,3,2,1,1,4,6,3,7,2,4,2,2,4,1,1];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(50,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgEBFIAAhyIgRAAIAAgXIAqAAIAACJg");
	this.shape.setTransform(-175.4,-64.4);

	this.nro12 = new lib.ImageContainer();
	this.nro12.parent = this;
	this.nro12.setTransform(-288,224);

	this.nro11 = new lib.ImageContainer();
	this.nro11.parent = this;
	this.nro11.setTransform(-288,147);

	this.nro10 = new lib.ImageContainer();
	this.nro10.parent = this;
	this.nro10.setTransform(-288,70);

	this.nro9 = new lib.ImageContainer();
	this.nro9.parent = this;
	this.nro9.setTransform(-288,-7);

	this.nro8 = new lib.ImageContainer();
	this.nro8.parent = this;
	this.nro8.setTransform(-288,-84);

	this.nro7 = new lib.ImageContainer();
	this.nro7.parent = this;
	this.nro7.setTransform(-288,-161);

	this.nro6 = new lib.ImageContainer();
	this.nro6.parent = this;
	this.nro6.setTransform(-395,224);

	this.nro5 = new lib.ImageContainer();
	this.nro5.parent = this;
	this.nro5.setTransform(-395,147);

	this.nro4 = new lib.ImageContainer();
	this.nro4.parent = this;
	this.nro4.setTransform(-395,70);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.nro4},{t:this.nro5},{t:this.nro6},{t:this.nro7},{t:this.nro8},{t:this.nro9},{t:this.nro10},{t:this.nro11},{t:this.nro12},{t:this.shape}]}).wait(1));

	// alvos
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(130,-23,1,1,-90);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(130,145,1,1,-90);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-206,145,1,1,-90);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-164,103,1,1,-90);

	this.instance_4 = new lib.arrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-164,19,1,1,-90);

	this.instance_5 = new lib.arrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-206,-65,1,1,-90);

	this.instance_6 = new lib.arrow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-206,-149,1,1,-90);

	this.instance_7 = new lib.arrow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(46,-107,1,1,-90);

	this.instance_8 = new lib.arrow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(287,-54);

	this.instance_9 = new lib.arrow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(329,-222);

	this.instance_10 = new lib.arrow();
	this.instance_10.parent = this;
	this.instance_10.setTransform(161,-138);

	this.instance_11 = new lib.arrow();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-7,-264);

	this.c6 = new lib.PecasAlvo();
	this.c6.parent = this;
	this.c6.setTransform(161,145);
	this.c6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a8 = new lib.PecasAlvo();
	this.a8.parent = this;
	this.a8.setTransform(203,145);
	this.a8.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m3 = new lib.PecasAlvo();
	this.m3.parent = this;
	this.m3.setTransform(245,145);
	this.m3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a9 = new lib.PecasAlvo();
	this.a9.parent = this;
	this.a9.setTransform(287,145);
	this.a9.shadow = new cjs.Shadow("#000000",0,0,1);

	this.x1 = new lib.PecasAlvo();
	this.x1.parent = this;
	this.x1.setTransform(287,103);
	this.x1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i2 = new lib.PecasAlvo();
	this.i2.parent = this;
	this.i2.setTransform(287,61);
	this.i2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a11 = new lib.PecasAlvo();
	this.a11.parent = this;
	this.a11.setTransform(287,19);
	this.a11.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l6 = new lib.PecasAlvo();
	this.l6.parent = this;
	this.l6.setTransform(329,-191);
	this.l6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i4 = new lib.PecasAlvo();
	this.i4.parent = this;
	this.i4.setTransform(329,-149);
	this.i4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.v1 = new lib.PecasAlvo();
	this.v1.parent = this;
	this.v1.setTransform(329,-107);
	this.v1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r3 = new lib.PecasAlvo();
	this.r3.parent = this;
	this.r3.setTransform(329,-65);
	this.r3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s2 = new lib.PecasAlvo();
	this.s2.parent = this;
	this.s2.setTransform(329,19);
	this.s2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o7 = new lib.PecasAlvo();
	this.o7.parent = this;
	this.o7.setTransform(329,-23);
	this.o7.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c5 = new lib.PecasAlvo();
	this.c5.parent = this;
	this.c5.setTransform(287,-23);
	this.c5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(245,-23);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i3 = new lib.PecasAlvo();
	this.i3.parent = this;
	this.i3.setTransform(203,-23);
	this.i3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o4 = new lib.PecasAlvo();
	this.o4.parent = this;
	this.o4.setTransform(203,-107);
	this.o4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m2 = new lib.PecasAlvo();
	this.m2.parent = this;
	this.m2.setTransform(77,-107);
	this.m2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u2 = new lib.PecasAlvo();
	this.u2.parent = this;
	this.u2.setTransform(119,-107);
	this.u2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a10 = new lib.PecasAlvo();
	this.a10.parent = this;
	this.a10.setTransform(161,19);
	this.a10.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d3 = new lib.PecasAlvo();
	this.d3.parent = this;
	this.d3.setTransform(161,-23);
	this.d3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r2 = new lib.PecasAlvo();
	this.r2.parent = this;
	this.r2.setTransform(161,-107);
	this.r2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a4 = new lib.PecasAlvo();
	this.a4.parent = this;
	this.a4.setTransform(245,-65);
	this.a4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r4 = new lib.PecasAlvo();
	this.r4.parent = this;
	this.r4.setTransform(203,-65);
	this.r4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o5 = new lib.PecasAlvo();
	this.o5.parent = this;
	this.o5.setTransform(161,-65);
	this.o5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d2 = new lib.PecasAlvo();
	this.d2.parent = this;
	this.d2.setTransform(119,-65);
	this.d2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a3 = new lib.PecasAlvo();
	this.a3.parent = this;
	this.a3.setTransform(77,-65);
	this.a3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l3 = new lib.PecasAlvo();
	this.l3.parent = this;
	this.l3.setTransform(35,-65);
	this.l3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a7 = new lib.PecasAlvo();
	this.a7.parent = this;
	this.a7.setTransform(77,145);
	this.a7.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i1 = new lib.PecasAlvo();
	this.i1.parent = this;
	this.i1.setTransform(35,145);
	this.i1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.b1 = new lib.PecasAlvo();
	this.b1.parent = this;
	this.b1.setTransform(-175,145);
	this.b1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a6 = new lib.PecasAlvo();
	this.a6.parent = this;
	this.a6.setTransform(-133,145);
	this.a6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t2 = new lib.PecasAlvo();
	this.t2.parent = this;
	this.t2.setTransform(-91,145);
	this.t2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e2 = new lib.PecasAlvo();
	this.e2.parent = this;
	this.e2.setTransform(-49,145);
	this.e2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a5 = new lib.PecasAlvo();
	this.a5.parent = this;
	this.a5.setTransform(-133,103);
	this.a5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l5 = new lib.PecasAlvo();
	this.l5.parent = this;
	this.l5.setTransform(-91,103);
	this.l5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.h1 = new lib.PecasAlvo();
	this.h1.parent = this;
	this.h1.setTransform(-49,103);
	this.h1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l4 = new lib.PecasAlvo();
	this.l4.parent = this;
	this.l4.setTransform(-133,19);
	this.l4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u4 = new lib.PecasAlvo();
	this.u4.parent = this;
	this.u4.setTransform(-91,19);
	this.u4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p2 = new lib.PecasAlvo();
	this.p2.parent = this;
	this.p2.setTransform(-49,19);
	this.p2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c4 = new lib.PecasAlvo();
	this.c4.parent = this;
	this.c4.setTransform(-49,-65);
	this.c4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l2 = new lib.PecasAlvo();
	this.l2.parent = this;
	this.l2.setTransform(-91,-65);
	this.l2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(-133,-65);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c3 = new lib.PecasAlvo();
	this.c3.parent = this;
	this.c3.setTransform(-175,-65);
	this.c3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(-7,145);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o6 = new lib.PecasAlvo();
	this.o6.parent = this;
	this.o6.setTransform(-7,103);
	this.o6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d1 = new lib.PecasAlvo();
	this.d1.parent = this;
	this.d1.setTransform(-7,61);
	this.d1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(-7,19);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(-7,-23);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u3 = new lib.PecasAlvo();
	this.u3.parent = this;
	this.u3.setTransform(-7,-65);
	this.u3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p1 = new lib.PecasAlvo();
	this.p1.parent = this;
	this.p1.setTransform(-7,-107);
	this.p1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c2 = new lib.PecasAlvo();
	this.c2.parent = this;
	this.c2.setTransform(-7,-233);
	this.c2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(-7,-191);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(119,-149);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l1 = new lib.PecasAlvo();
	this.l1.parent = this;
	this.l1.setTransform(77,-149);
	this.l1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(35,-149);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m1 = new lib.PecasAlvo();
	this.m1.parent = this;
	this.m1.setTransform(-7,-149);
	this.m1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u1 = new lib.PecasAlvo();
	this.u1.parent = this;
	this.u1.setTransform(-49,-149);
	this.u1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.g1 = new lib.PecasAlvo();
	this.g1.parent = this;
	this.g1.setTransform(-91,-149);
	this.g1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(-133,-149);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c1 = new lib.PecasAlvo();
	this.c1.parent = this;
	this.c1.setTransform(-175,-149);
	this.c1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.o1},{t:this.g1},{t:this.u1},{t:this.m1},{t:this.e1},{t:this.l1},{t:this.o3},{t:this.o2},{t:this.c2},{t:this.p1},{t:this.u3},{t:this.t1},{t:this.a1},{t:this.d1},{t:this.o6},{t:this.r1},{t:this.c3},{t:this.a2},{t:this.l2},{t:this.c4},{t:this.p2},{t:this.u4},{t:this.l4},{t:this.h1},{t:this.l5},{t:this.a5},{t:this.e2},{t:this.t2},{t:this.a6},{t:this.b1},{t:this.i1},{t:this.a7},{t:this.l3},{t:this.a3},{t:this.d2},{t:this.o5},{t:this.r4},{t:this.a4},{t:this.r2},{t:this.d3},{t:this.a10},{t:this.u2},{t:this.m2},{t:this.o4},{t:this.i3},{t:this.s1},{t:this.c5},{t:this.o7},{t:this.s2},{t:this.r3},{t:this.v1},{t:this.i4},{t:this.l6},{t:this.a11},{t:this.i2},{t:this.x1},{t:this.a9},{t:this.m3},{t:this.a8},{t:this.c6},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-270,811.4,538);


(lib.Level6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level6";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3, this.nro4, this.nro5, 
		this.nro6, this.nro7, this.nro8, this.nro9, this.nro10];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		var letras = ["a","c","e","f","g","h","i","j","l","m","n","o","p","r","s","t","u","x"];
		var count = [4,4,8,2,1,1,3,1,3,1,4,6,2,3,1,4,1,1];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// level actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgFBFIAAhyIgQAAIAAgXIAqAAIAACJg");
	this.shape.setTransform(-145.5,-83.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(0,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.nro10 = new lib.ImageContainer();
	this.nro10.parent = this;
	this.nro10.setTransform(-288,70);

	this.nro9 = new lib.ImageContainer();
	this.nro9.parent = this;
	this.nro9.setTransform(-288,-7);

	this.nro8 = new lib.ImageContainer();
	this.nro8.parent = this;
	this.nro8.setTransform(-288,-84);

	this.nro7 = new lib.ImageContainer();
	this.nro7.parent = this;
	this.nro7.setTransform(-288,-161);

	this.nro6 = new lib.ImageContainer();
	this.nro6.parent = this;
	this.nro6.setTransform(-395,224);

	this.nro5 = new lib.ImageContainer();
	this.nro5.parent = this;
	this.nro5.setTransform(-395,147);

	this.nro4 = new lib.ImageContainer();
	this.nro4.parent = this;
	this.nro4.setTransform(-395,70);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.nro4},{t:this.nro5},{t:this.nro6},{t:this.nro7},{t:this.nro8},{t:this.nro9},{t:this.nro10}]}).wait(1));

	// alvos
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(31.9,-168,1,1,-90);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.9,0,1,1,-90);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(31.9,84,1,1,-90);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-136.1,126,1,1,-90);

	this.instance_4 = new lib.arrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-136.1,42,1,1,-90);

	this.instance_5 = new lib.arrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-178,-84,1,1,-90);

	this.instance_6 = new lib.arrow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(230.9,-241);

	this.instance_7 = new lib.arrow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(62.9,-199);

	this.instance_8 = new lib.arrow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-220.1,-42,1,1,-90);

	this.instance_9 = new lib.arrow();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-63.1,-157);

	this.o6 = new lib.PecasAlvo();
	this.o6.parent = this;
	this.o6.setTransform(314.9,0);
	this.o6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c4 = new lib.PecasAlvo();
	this.c4.parent = this;
	this.c4.setTransform(272.9,0);
	this.c4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c3 = new lib.PecasAlvo();
	this.c3.parent = this;
	this.c3.setTransform(188.9,0);
	this.c3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c1 = new lib.PecasAlvo();
	this.c1.parent = this;
	this.c1.setTransform(62.9,84);
	this.c1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(104.9,84);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.f2 = new lib.PecasAlvo();
	this.f2.parent = this;
	this.f2.setTransform(146.9,84);
	this.f2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r2 = new lib.PecasAlvo();
	this.r2.parent = this;
	this.r2.setTransform(188.9,84);
	this.r2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e7 = new lib.PecasAlvo();
	this.e7.parent = this;
	this.e7.setTransform(230.9,84);
	this.e7.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l3 = new lib.PecasAlvo();
	this.l3.parent = this;
	this.l3.setTransform(230.9,42);
	this.l3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o5 = new lib.PecasAlvo();
	this.o5.parent = this;
	this.o5.setTransform(230.9,0);
	this.o5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r3 = new lib.PecasAlvo();
	this.r3.parent = this;
	this.r3.setTransform(230.9,-42);
	this.r3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t4 = new lib.PecasAlvo();
	this.t4.parent = this;
	this.t4.setTransform(230.9,-84);
	this.t4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n4 = new lib.PecasAlvo();
	this.n4.parent = this;
	this.n4.setTransform(230.9,-126);
	this.n4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c2 = new lib.PecasAlvo();
	this.c2.parent = this;
	this.c2.setTransform(230.9,-210);
	this.c2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o4 = new lib.PecasAlvo();
	this.o4.parent = this;
	this.o4.setTransform(230.9,-168);
	this.o4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n3 = new lib.PecasAlvo();
	this.n3.parent = this;
	this.n3.setTransform(188.9,-168);
	this.n3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a3 = new lib.PecasAlvo();
	this.a3.parent = this;
	this.a3.setTransform(146.9,-168);
	this.a3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i3 = new lib.PecasAlvo();
	this.i3.parent = this;
	this.i3.setTransform(104.9,-168);
	this.i3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p2 = new lib.PecasAlvo();
	this.p2.parent = this;
	this.p2.setTransform(62.9,-168);
	this.p2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e8 = new lib.PecasAlvo();
	this.e8.parent = this;
	this.e8.setTransform(62.9,-126);
	this.e8.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e6 = new lib.PecasAlvo();
	this.e6.parent = this;
	this.e6.setTransform(146.9,126);
	this.e6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t3 = new lib.PecasAlvo();
	this.t3.parent = this;
	this.t3.setTransform(104.9,126);
	this.t3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e5 = new lib.PecasAlvo();
	this.e5.parent = this;
	this.e5.setTransform(62.9,126);
	this.e5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u1 = new lib.PecasAlvo();
	this.u1.parent = this;
	this.u1.setTransform(20.9,126);
	this.u1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.g1 = new lib.PecasAlvo();
	this.g1.parent = this;
	this.g1.setTransform(-21.1,126);
	this.g1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.f1 = new lib.PecasAlvo();
	this.f1.parent = this;
	this.f1.setTransform(-105.1,126);
	this.f1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e4 = new lib.PecasAlvo();
	this.e4.parent = this;
	this.e4.setTransform(62.9,42);
	this.e4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.x1 = new lib.PecasAlvo();
	this.x1.parent = this;
	this.x1.setTransform(20.9,42);
	this.x1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i2 = new lib.PecasAlvo();
	this.i2.parent = this;
	this.i2.setTransform(-21.1,42);
	this.i2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p1 = new lib.PecasAlvo();
	this.p1.parent = this;
	this.p1.setTransform(-105.1,42);
	this.p1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(-63.1,126);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l1 = new lib.PecasAlvo();
	this.l1.parent = this;
	this.l1.setTransform(-63.1,84);
	this.l1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(-63.1,42);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(-63.1,0);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m1 = new lib.PecasAlvo();
	this.m1.parent = this;
	this.m1.setTransform(-63.1,-126);
	this.m1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e2 = new lib.PecasAlvo();
	this.e2.parent = this;
	this.e2.setTransform(-189.1,-42);
	this.e2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a4 = new lib.PecasAlvo();
	this.a4.parent = this;
	this.a4.setTransform(62.9,-42);
	this.a4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l2 = new lib.PecasAlvo();
	this.l2.parent = this;
	this.l2.setTransform(20.9,-42);
	this.l2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e3 = new lib.PecasAlvo();
	this.e3.parent = this;
	this.e3.setTransform(-21.1,-42);
	this.e3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(-63.1,-42);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t2 = new lib.PecasAlvo();
	this.t2.parent = this;
	this.t2.setTransform(-105.1,-42);
	this.t2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(-147.1,-42);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(146.9,-84);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.h1 = new lib.PecasAlvo();
	this.h1.parent = this;
	this.h1.setTransform(104.9,-84);
	this.h1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n2 = new lib.PecasAlvo();
	this.n2.parent = this;
	this.n2.setTransform(62.9,-84);
	this.n2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i1 = new lib.PecasAlvo();
	this.i1.parent = this;
	this.i1.setTransform(20.9,-84);
	this.i1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n1 = new lib.PecasAlvo();
	this.n1.parent = this;
	this.n1.setTransform(-21.1,-84);
	this.n1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(-63.1,-84);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(-105.1,-84);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.j1 = new lib.PecasAlvo();
	this.j1.parent = this;
	this.j1.setTransform(-147.1,-84);
	this.j1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.j1},{t:this.o1},{t:this.a1},{t:this.n1},{t:this.i1},{t:this.n2},{t:this.h1},{t:this.a2},{t:this.s1},{t:this.t2},{t:this.r1},{t:this.e3},{t:this.l2},{t:this.a4},{t:this.e2},{t:this.m1},{t:this.t1},{t:this.e1},{t:this.l1},{t:this.o2},{t:this.p1},{t:this.i2},{t:this.x1},{t:this.e4},{t:this.f1},{t:this.g1},{t:this.u1},{t:this.e5},{t:this.t3},{t:this.e6},{t:this.e8},{t:this.p2},{t:this.i3},{t:this.a3},{t:this.n3},{t:this.o4},{t:this.c2},{t:this.n4},{t:this.t4},{t:this.r3},{t:this.o5},{t:this.l3},{t:this.e7},{t:this.r2},{t:this.f2},{t:this.o3},{t:this.c1},{t:this.c3},{t:this.c4},{t:this.o6},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-247,797.3,515);


(lib.Level5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level5";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3, this.nro4, this.nro5, 
		this.nro6, this.nro7, this.nro8, this.nro9];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		var letras = ["a","c","d","e","g","h","i","l","m","n","o","p","r","s","t","u","v","x"];
		var count = [7,3,2,4,1,1,3,6,1,1,4,5,5,3,2,2,1,1];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// level actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgFBFIAAhyIgQAAIAAgXIAqAAIAACJg");
	this.shape.setTransform(95.6,-216.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(0,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.nro9 = new lib.ImageContainer();
	this.nro9.parent = this;
	this.nro9.setTransform(-288,-7);

	this.nro8 = new lib.ImageContainer();
	this.nro8.parent = this;
	this.nro8.setTransform(-288,-84);

	this.nro7 = new lib.ImageContainer();
	this.nro7.parent = this;
	this.nro7.setTransform(-288,-161);

	this.nro6 = new lib.ImageContainer();
	this.nro6.parent = this;
	this.nro6.setTransform(-395,224);

	this.nro5 = new lib.ImageContainer();
	this.nro5.parent = this;
	this.nro5.setTransform(-395,147);

	this.nro4 = new lib.ImageContainer();
	this.nro4.parent = this;
	this.nro4.setTransform(-395,70);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.nro4},{t:this.nro5},{t:this.nro6},{t:this.nro7},{t:this.nro8},{t:this.nro9}]}).wait(1));

	// alvos
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(65,117.9,1,1,-90);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23,35.9,1,1,-90);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(264,-164);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(180,-164);

	this.instance_4 = new lib.arrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30,-164);

	this.instance_5 = new lib.arrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-229,77,1,1,-90);

	this.instance_6 = new lib.arrow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-103,-91,1,1,-90);

	this.instance_7 = new lib.arrow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(96,-248);

	this.instance_8 = new lib.arrow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-19,-217,1,1,-90);

	this.l5 = new lib.PecasAlvo();
	this.l5.parent = this;
	this.l5.setTransform(-198,77);
	this.l5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i2 = new lib.PecasAlvo();
	this.i2.parent = this;
	this.i2.setTransform(-156,77);
	this.i2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.x1 = new lib.PecasAlvo();
	this.x1.parent = this;
	this.x1.setTransform(-114,77);
	this.x1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e3 = new lib.PecasAlvo();
	this.e3.parent = this;
	this.e3.setTransform(-72,77);
	this.e3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a6 = new lib.PecasAlvo();
	this.a6.parent = this;
	this.a6.setTransform(54,77);
	this.a6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r5 = new lib.PecasAlvo();
	this.r5.parent = this;
	this.r5.setTransform(12,77);
	this.r5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(-30,119);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i3 = new lib.PecasAlvo();
	this.i3.parent = this;
	this.i3.setTransform(-30,77);
	this.i3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.g1 = new lib.PecasAlvo();
	this.g1.parent = this;
	this.g1.setTransform(-30,35);
	this.g1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(-30,-7);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l4 = new lib.PecasAlvo();
	this.l4.parent = this;
	this.l4.setTransform(-30,-49);
	this.l4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r2 = new lib.PecasAlvo();
	this.r2.parent = this;
	this.r2.setTransform(-30,-133);
	this.r2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c3 = new lib.PecasAlvo();
	this.c3.parent = this;
	this.c3.setTransform(96,119);
	this.c3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.h1 = new lib.PecasAlvo();
	this.h1.parent = this;
	this.h1.setTransform(138,119);
	this.h1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u2 = new lib.PecasAlvo();
	this.u2.parent = this;
	this.u2.setTransform(306,119);
	this.u2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e4 = new lib.PecasAlvo();
	this.e4.parent = this;
	this.e4.setTransform(264,119);
	this.e4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p4 = new lib.PecasAlvo();
	this.p4.parent = this;
	this.p4.setTransform(222,119);
	this.p4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a7 = new lib.PecasAlvo();
	this.a7.parent = this;
	this.a7.setTransform(180,119);
	this.a7.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d2 = new lib.PecasAlvo();
	this.d2.parent = this;
	this.d2.setTransform(180,77);
	this.d2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p5 = new lib.PecasAlvo();
	this.p5.parent = this;
	this.p5.setTransform(180,-7);
	this.p5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m1 = new lib.PecasAlvo();
	this.m1.parent = this;
	this.m1.setTransform(180,-49);
	this.m1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l3 = new lib.PecasAlvo();
	this.l3.parent = this;
	this.l3.setTransform(180,-133);
	this.l3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s2 = new lib.PecasAlvo();
	this.s2.parent = this;
	this.s2.setTransform(54,35);
	this.s2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a4 = new lib.PecasAlvo();
	this.a4.parent = this;
	this.a4.setTransform(96,35);
	this.a4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p3 = new lib.PecasAlvo();
	this.p3.parent = this;
	this.p3.setTransform(138,35);
	this.p3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a5 = new lib.PecasAlvo();
	this.a5.parent = this;
	this.a5.setTransform(180,35);
	this.a5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t2 = new lib.PecasAlvo();
	this.t2.parent = this;
	this.t2.setTransform(222,35);
	this.t2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s3 = new lib.PecasAlvo();
	this.s3.parent = this;
	this.s3.setTransform(306,35);
	this.s3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o4 = new lib.PecasAlvo();
	this.o4.parent = this;
	this.o4.setTransform(264,35);
	this.o4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c2 = new lib.PecasAlvo();
	this.c2.parent = this;
	this.c2.setTransform(264,-7);
	this.c2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r4 = new lib.PecasAlvo();
	this.r4.parent = this;
	this.r4.setTransform(264,-49);
	this.r4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p2 = new lib.PecasAlvo();
	this.p2.parent = this;
	this.p2.setTransform(264,-133);
	this.p2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r3 = new lib.PecasAlvo();
	this.r3.parent = this;
	this.r3.setTransform(306,-91);
	this.r3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(264,-91);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d1 = new lib.PecasAlvo();
	this.d1.parent = this;
	this.d1.setTransform(222,-91);
	this.d1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a3 = new lib.PecasAlvo();
	this.a3.parent = this;
	this.a3.setTransform(180,-91);
	this.a3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l6 = new lib.PecasAlvo();
	this.l6.parent = this;
	this.l6.setTransform(138,-91);
	this.l6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.v1 = new lib.PecasAlvo();
	this.v1.parent = this;
	this.v1.setTransform(-72,-91);
	this.v1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e2 = new lib.PecasAlvo();
	this.e2.parent = this;
	this.e2.setTransform(-30,-91);
	this.e2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n1 = new lib.PecasAlvo();
	this.n1.parent = this;
	this.n1.setTransform(12,-91);
	this.n1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(54,-91);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(96,-49);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i1 = new lib.PecasAlvo();
	this.i1.parent = this;
	this.i1.setTransform(96,-91);
	this.i1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p1 = new lib.PecasAlvo();
	this.p1.parent = this;
	this.p1.setTransform(96,-133);
	this.p1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(96,-175);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(264,-217);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(222,-217);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l2 = new lib.PecasAlvo();
	this.l2.parent = this;
	this.l2.setTransform(180,-217);
	this.l2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u1 = new lib.PecasAlvo();
	this.u1.parent = this;
	this.u1.setTransform(138,-217);
	this.u1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l1 = new lib.PecasAlvo();
	this.l1.parent = this;
	this.l1.setTransform(96,-217);
	this.l1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(54,-217);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c1 = new lib.PecasAlvo();
	this.c1.parent = this;
	this.c1.setTransform(12,-217);
	this.c1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.c1},{t:this.e1},{t:this.l1},{t:this.u1},{t:this.l2},{t:this.a1},{t:this.r1},{t:this.a2},{t:this.p1},{t:this.i1},{t:this.s1},{t:this.t1},{t:this.n1},{t:this.e2},{t:this.v1},{t:this.l6},{t:this.a3},{t:this.d1},{t:this.o1},{t:this.r3},{t:this.p2},{t:this.r4},{t:this.c2},{t:this.o4},{t:this.s3},{t:this.t2},{t:this.a5},{t:this.p3},{t:this.a4},{t:this.s2},{t:this.l3},{t:this.m1},{t:this.p5},{t:this.d2},{t:this.a7},{t:this.p4},{t:this.e4},{t:this.u2},{t:this.h1},{t:this.c3},{t:this.r2},{t:this.l4},{t:this.o2},{t:this.g1},{t:this.i3},{t:this.o3},{t:this.r5},{t:this.a6},{t:this.e3},{t:this.x1},{t:this.i2},{t:this.l5},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-254,788.4,522);


(lib.Level4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level4";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3, this.nro4, this.nro5, 
		this.nro6, this.nro7, this.nro8, this.nro9];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		var letras = ["a","c","e","f","h","i","j","l","n","o","p","r","s","t","u","v"];
		var count = [4,2,4,2,1,1,1,3,2,4,1,2,3,3,1,3];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(0,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.nro9 = new lib.ImageContainer();
	this.nro9.parent = this;
	this.nro9.setTransform(-288,-7);

	this.nro8 = new lib.ImageContainer();
	this.nro8.parent = this;
	this.nro8.setTransform(-288,-84);

	this.nro7 = new lib.ImageContainer();
	this.nro7.parent = this;
	this.nro7.setTransform(-288,-161);

	this.nro6 = new lib.ImageContainer();
	this.nro6.parent = this;
	this.nro6.setTransform(-395,224);

	this.nro5 = new lib.ImageContainer();
	this.nro5.parent = this;
	this.nro5.setTransform(-395,147);

	this.nro4 = new lib.ImageContainer();
	this.nro4.parent = this;
	this.nro4.setTransform(-395,70);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.nro4},{t:this.nro5},{t:this.nro6},{t:this.nro7},{t:this.nro8},{t:this.nro9}]}).wait(1));

	// alvos
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgEBGIAAhyIgQAAIAAgZIAqAAIAACLg");
	this.shape.setTransform(-70.4,-149.4);

	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(138.1,-265);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(224,-223);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(308,-97);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(56,-13);

	this.instance_4 = new lib.arrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-70,-181);

	this.instance_5 = new lib.arrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-101,-150,1,1,-90);

	this.instance_6 = new lib.arrow();
	this.instance_6.parent = this;
	this.instance_6.setTransform(151,-66,1,1,-90);

	this.instance_7 = new lib.arrow();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-185,16.9,1,1,-90);

	this.instance_8 = new lib.arrow();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-185,-66,1,1,-90);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(14,-66);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t3 = new lib.PecasAlvo();
	this.t3.parent = this;
	this.t3.setTransform(-28,-66);
	this.t3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.p1 = new lib.PecasAlvo();
	this.p1.parent = this;
	this.p1.setTransform(-154,-66);
	this.p1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(-112,-66);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(56,144);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n1 = new lib.PecasAlvo();
	this.n1.parent = this;
	this.n1.setTransform(56,102);
	this.n1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.i1 = new lib.PecasAlvo();
	this.i1.parent = this;
	this.i1.setTransform(56,60);
	this.i1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(56,18);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(14,18);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.v1 = new lib.PecasAlvo();
	this.v1.parent = this;
	this.v1.setTransform(-28,18);
	this.v1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(-70,18);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s3 = new lib.PecasAlvo();
	this.s3.parent = this;
	this.s3.setTransform(308,60);
	this.s3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a4 = new lib.PecasAlvo();
	this.a4.parent = this;
	this.a4.setTransform(308,18);
	this.a4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.v3 = new lib.PecasAlvo();
	this.v3.parent = this;
	this.v3.setTransform(308,-24);
	this.v3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u1 = new lib.PecasAlvo();
	this.u1.parent = this;
	this.u1.setTransform(308,-66);
	this.u1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.j1 = new lib.PecasAlvo();
	this.j1.parent = this;
	this.j1.setTransform(266,-66);
	this.j1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c2 = new lib.PecasAlvo();
	this.c2.parent = this;
	this.c2.setTransform(182,-66);
	this.c2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s2 = new lib.PecasAlvo();
	this.s2.parent = this;
	this.s2.setTransform(224,-24);
	this.s2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a3 = new lib.PecasAlvo();
	this.a3.parent = this;
	this.a3.setTransform(224,-66);
	this.a3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l3 = new lib.PecasAlvo();
	this.l3.parent = this;
	this.l3.setTransform(224,-108);
	this.l3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.v2 = new lib.PecasAlvo();
	this.v2.parent = this;
	this.v2.setTransform(224,-192);
	this.v2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.f2 = new lib.PecasAlvo();
	this.f2.parent = this;
	this.f2.setTransform(140,-234);
	this.f2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l2 = new lib.PecasAlvo();
	this.l2.parent = this;
	this.l2.setTransform(140,-192);
	this.l2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r2 = new lib.PecasAlvo();
	this.r2.parent = this;
	this.r2.setTransform(140,-108);
	this.r2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c1 = new lib.PecasAlvo();
	this.c1.parent = this;
	this.c1.setTransform(-154,18);
	this.c1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.h1 = new lib.PecasAlvo();
	this.h1.parent = this;
	this.h1.setTransform(-112,18);
	this.h1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t2 = new lib.PecasAlvo();
	this.t2.parent = this;
	this.t2.setTransform(-70,-24);
	this.t2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(-70,-66);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(-70,-108);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(-70,-150);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e4 = new lib.PecasAlvo();
	this.e4.parent = this;
	this.e4.setTransform(224,-150);
	this.e4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n2 = new lib.PecasAlvo();
	this.n2.parent = this;
	this.n2.setTransform(182,-150);
	this.n2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o4 = new lib.PecasAlvo();
	this.o4.parent = this;
	this.o4.setTransform(140,-150);
	this.o4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.f1 = new lib.PecasAlvo();
	this.f1.parent = this;
	this.f1.setTransform(98,-150);
	this.f1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e3 = new lib.PecasAlvo();
	this.e3.parent = this;
	this.e3.setTransform(56,-150);
	this.e3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l1 = new lib.PecasAlvo();
	this.l1.parent = this;
	this.l1.setTransform(14,-150);
	this.l1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e2 = new lib.PecasAlvo();
	this.e2.parent = this;
	this.e2.setTransform(-28,-150);
	this.e2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e2},{t:this.l1},{t:this.e3},{t:this.f1},{t:this.o4},{t:this.n2},{t:this.e4},{t:this.t1},{t:this.o1},{t:this.r1},{t:this.t2},{t:this.h1},{t:this.c1},{t:this.r2},{t:this.l2},{t:this.f2},{t:this.v2},{t:this.l3},{t:this.a3},{t:this.s2},{t:this.c2},{t:this.j1},{t:this.u1},{t:this.v3},{t:this.a4},{t:this.s3},{t:this.a1},{t:this.v1},{t:this.e1},{t:this.s1},{t:this.i1},{t:this.n1},{t:this.o3},{t:this.o2},{t:this.p1},{t:this.t3},{t:this.a2},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-271,790.4,539);


(lib.Level3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level3";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3, this.nro4, this.nro5, this.nro6];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		var letras = ["a","b","c","e","l","n","o","r","s","t","u","v"];
		var count = [5,2,2,3,1,1,4,3,3,1,1,1];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// level actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgEBFIAAhxIgQAAIAAgYIAqAAIAACJg");
	this.shape.setTransform(-70.4,-98.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(0,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.nro6 = new lib.ImageContainer();
	this.nro6.parent = this;
	this.nro6.setTransform(-395,224);

	this.nro5 = new lib.ImageContainer();
	this.nro5.parent = this;
	this.nro5.setTransform(-395,147);

	this.nro4 = new lib.ImageContainer();
	this.nro4.parent = this;
	this.nro4.setTransform(-395,70);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.nro4},{t:this.nro5},{t:this.nro6}]}).wait(1));

	// alvos
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-71.9,-131);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59,69,1,1,-90);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.1,-215);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(56.1,-173);

	this.instance_4 = new lib.arrow();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-227,27,1,1,-90);

	this.instance_5 = new lib.arrow();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-102,-99,1,1,-90);

	this.c2 = new lib.PecasAlvo();
	this.c2.parent = this;
	this.c2.setTransform(140,-183);
	this.c2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a4 = new lib.PecasAlvo();
	this.a4.parent = this;
	this.a4.setTransform(140,-141);
	this.a4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r3 = new lib.PecasAlvo();
	this.r3.parent = this;
	this.r3.setTransform(140,-57);
	this.r3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o4 = new lib.PecasAlvo();
	this.o4.parent = this;
	this.o4.setTransform(140,-15);
	this.o4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a3 = new lib.PecasAlvo();
	this.a3.parent = this;
	this.a3.setTransform(98,69);
	this.a3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.b2 = new lib.PecasAlvo();
	this.b2.parent = this;
	this.b2.setTransform(-28,69);
	this.b2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(14,69);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e3 = new lib.PecasAlvo();
	this.e3.parent = this;
	this.e3.setTransform(56,111);
	this.e3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(56,69);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e2 = new lib.PecasAlvo();
	this.e2.parent = this;
	this.e2.setTransform(56,27);
	this.e2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.v1 = new lib.PecasAlvo();
	this.v1.parent = this;
	this.v1.setTransform(56,-15);
	this.v1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r2 = new lib.PecasAlvo();
	this.r2.parent = this;
	this.r2.setTransform(56,-57);
	this.r2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s2 = new lib.PecasAlvo();
	this.s2.parent = this;
	this.s2.setTransform(56,-141);
	this.s2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.b1 = new lib.PecasAlvo();
	this.b1.parent = this;
	this.b1.setTransform(-196,27);
	this.b1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(-154,27);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l1 = new lib.PecasAlvo();
	this.l1.parent = this;
	this.l1.setTransform(-112,27);
	this.l1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(-70,27);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(-70,-15);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(-70,-57);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c1 = new lib.PecasAlvo();
	this.c1.parent = this;
	this.c1.setTransform(-70,-99);
	this.c1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s3 = new lib.PecasAlvo();
	this.s3.parent = this;
	this.s3.setTransform(224,-99);
	this.s3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a5 = new lib.PecasAlvo();
	this.a5.parent = this;
	this.a5.setTransform(182,-99);
	this.a5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(140,-99);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u1 = new lib.PecasAlvo();
	this.u1.parent = this;
	this.u1.setTransform(98,-99);
	this.u1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(56,-99);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n1 = new lib.PecasAlvo();
	this.n1.parent = this;
	this.n1.setTransform(14,-99);
	this.n1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(-28,-99);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.e1},{t:this.n1},{t:this.o3},{t:this.u1},{t:this.r1},{t:this.a5},{t:this.s3},{t:this.c1},{t:this.a1},{t:this.s1},{t:this.a2},{t:this.l1},{t:this.o1},{t:this.b1},{t:this.s2},{t:this.r2},{t:this.v1},{t:this.e2},{t:this.t1},{t:this.e3},{t:this.o2},{t:this.b2},{t:this.a3},{t:this.o4},{t:this.r3},{t:this.a4},{t:this.c2},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-221,741.4,489);


(lib.Level2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level2";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3, this.nro4, this.nro5];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		
		var letras = ["a","b","c","d","e","g","l","m","n","o","r","s","t"];
		var count = [7,3,1,2,2,1,2,1,2,3,1,1,1];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// level actions
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgFBGIAAhzIgPAAIAAgYIAqAAIAACLg");
	this.shape.setTransform(-125.4,-170.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(0,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.nro5 = new lib.ImageContainer();
	this.nro5.parent = this;
	this.nro5.setTransform(-395,147);

	this.nro4 = new lib.ImageContainer();
	this.nro4.parent = this;
	this.nro4.setTransform(-395,70);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.nro4},{t:this.nro5}]}).wait(1));

	// alvos
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-157,-3.5,1,1,-90);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-157,-171.5,1,1,-90);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(127.1,-245.5);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(169,80.5);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.g1 = new lib.PecasAlvo();
	this.g1.parent = this;
	this.g1.setTransform(43,80.5);
	this.g1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a6 = new lib.PecasAlvo();
	this.a6.parent = this;
	this.a6.setTransform(85,80.5);
	this.a6.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a7 = new lib.PecasAlvo();
	this.a7.parent = this;
	this.a7.setTransform(127,122.5);
	this.a7.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(127,80.5);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e2 = new lib.PecasAlvo();
	this.e2.parent = this;
	this.e2.setTransform(127,38.5);
	this.e2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l2 = new lib.PecasAlvo();
	this.l2.parent = this;
	this.l2.setTransform(127,-3.5);
	this.l2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(127,-45.5);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.b3 = new lib.PecasAlvo();
	this.b3.parent = this;
	this.b3.setTransform(127,-87.5);
	this.b3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(127,-129.5);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.b2 = new lib.PecasAlvo();
	this.b2.parent = this;
	this.b2.setTransform(127,-213.5);
	this.b2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a5 = new lib.PecasAlvo();
	this.a5.parent = this;
	this.a5.setTransform(1,-3.5);
	this.a5.shadow = new cjs.Shadow("#000000",0,0,1);

	this.l1 = new lib.PecasAlvo();
	this.l1.parent = this;
	this.l1.setTransform(-41,-3.5);
	this.l1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m1 = new lib.PecasAlvo();
	this.m1.parent = this;
	this.m1.setTransform(-125,-3.5);
	this.m1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(127,-171.5);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d2 = new lib.PecasAlvo();
	this.d2.parent = this;
	this.d2.setTransform(85,-171.5);
	this.d2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a4 = new lib.PecasAlvo();
	this.a4.parent = this;
	this.a4.setTransform(43,-171.5);
	this.a4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(1,-171.5);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d1 = new lib.PecasAlvo();
	this.d1.parent = this;
	this.d1.setTransform(-41,-171.5);
	this.d1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.c1 = new lib.PecasAlvo();
	this.c1.parent = this;
	this.c1.setTransform(-125,-171.5);
	this.c1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(-83,38.5);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a3 = new lib.PecasAlvo();
	this.a3.parent = this;
	this.a3.setTransform(-83,-3.5);
	this.a3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n2 = new lib.PecasAlvo();
	this.n2.parent = this;
	this.n2.setTransform(-83,-45.5);
	this.n2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.instance_3 = new lib.arrow();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-83,-245.5);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(-83,-87.5);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n1 = new lib.PecasAlvo();
	this.n1.parent = this;
	this.n1.setTransform(-83,-129.5);
	this.n1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(-83,-171.5);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.b1 = new lib.PecasAlvo();
	this.b1.parent = this;
	this.b1.setTransform(-83,-213.5);
	this.b1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.a1},{t:this.n1},{t:this.a2},{t:this.instance_3},{t:this.n2},{t:this.a3},{t:this.s1},{t:this.c1},{t:this.d1},{t:this.e1},{t:this.a4},{t:this.d2},{t:this.o1},{t:this.m1},{t:this.l1},{t:this.a5},{t:this.b2},{t:this.r1},{t:this.b3},{t:this.o2},{t:this.l2},{t:this.e2},{t:this.t1},{t:this.a7},{t:this.a6},{t:this.g1},{t:this.o3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-251.5,741.4,518.5);


(lib.Level1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var o = this;
		o.name = "level1";
		
		var teclado = this.teclado;
		teclado.name = "teclado";
		
		var nros = [this.nro1, this.nro2, this.nro3];
		
		function fillNumeros()
		{
			for (var i = 0; i < nros.length; i++)
				nros[i].numero.text = i + 1;
		}
		
		o.inicializa = function(images)
		{
			for (var i = 0; i < images.length; i++)
				nros[i].setImage(images[i]);
		}
		
		setTimeout(fillNumeros, 10);
		
		var letras = ["a","d","e","g","m","n","o","r","s","t","u"];
		var count = [2,2,1,1,1,1,4,2,2,1,1];
		
		o.giveNames(letras, count);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// teclado
	this.teclado = new lib.Teclado();
	this.teclado.parent = this;
	this.teclado.setTransform(0,217.5);

	this.timeline.addTween(cjs.Tween.get(this.teclado).wait(1));

	// imagens
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#212121").s().p("AgFBGIAAhyIgPAAIAAgZIApAAIAACLg");
	this.shape.setTransform(-0.4,-83.9);

	this.nro3 = new lib.ImageContainer();
	this.nro3.parent = this;
	this.nro3.setTransform(-395,-7);

	this.nro2 = new lib.ImageContainer();
	this.nro2.parent = this;
	this.nro2.setTransform(-395,-84);

	this.nro1 = new lib.ImageContainer();
	this.nro1.parent = this;
	this.nro1.setTransform(-395,-161);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nro1},{t:this.nro2},{t:this.nro3},{t:this.shape}]}).wait(1));

	// alvos
	this.s2 = new lib.PecasAlvo();
	this.s2.parent = this;
	this.s2.setTransform(0,83.5);
	this.s2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-121,83.6,1,1,-90);

	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-163,-42.5,1,1,-90);

	this.instance_2 = new lib.arrow();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-121.9);

	this.a2 = new lib.PecasAlvo();
	this.a2.parent = this;
	this.a2.setTransform(168,83.5);
	this.a2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.s1 = new lib.PecasAlvo();
	this.s1.parent = this;
	this.s1.setTransform(168,-42.5);
	this.s1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r2 = new lib.PecasAlvo();
	this.r2.parent = this;
	this.r2.setTransform(126,83.5);
	this.r2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o2 = new lib.PecasAlvo();
	this.o2.parent = this;
	this.o2.setTransform(126,-42.5);
	this.o2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.u1 = new lib.PecasAlvo();
	this.u1.parent = this;
	this.u1.setTransform(84,83.5);
	this.u1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.g1 = new lib.PecasAlvo();
	this.g1.parent = this;
	this.g1.setTransform(84,-42.5);
	this.g1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o4 = new lib.PecasAlvo();
	this.o4.parent = this;
	this.o4.setTransform(42,83.5);
	this.o4.shadow = new cjs.Shadow("#000000",0,0,1);

	this.n1 = new lib.PecasAlvo();
	this.n1.parent = this;
	this.n1.setTransform(42,-42.5);
	this.n1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.m1 = new lib.PecasAlvo();
	this.m1.parent = this;
	this.m1.setTransform(-126,-42.5);
	this.m1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.t1 = new lib.PecasAlvo();
	this.t1.parent = this;
	this.t1.setTransform(-84,83.5);
	this.t1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o1 = new lib.PecasAlvo();
	this.o1.parent = this;
	this.o1.setTransform(-84,-42.5);
	this.o1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.e1 = new lib.PecasAlvo();
	this.e1.parent = this;
	this.e1.setTransform(-42,83.5);
	this.e1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.r1 = new lib.PecasAlvo();
	this.r1.parent = this;
	this.r1.setTransform(-42,-42.5);
	this.r1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.o3 = new lib.PecasAlvo();
	this.o3.parent = this;
	this.o3.setTransform(0,41.5);
	this.o3.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d2 = new lib.PecasAlvo();
	this.d2.parent = this;
	this.d2.setTransform(0,-0.5);
	this.d2.shadow = new cjs.Shadow("#000000",0,0,1);

	this.a1 = new lib.PecasAlvo();
	this.a1.parent = this;
	this.a1.setTransform(0,-42.5);
	this.a1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.d1 = new lib.PecasAlvo();
	this.d1.parent = this;
	this.d1.setTransform(0,-84.5);
	this.d1.shadow = new cjs.Shadow("#000000",0,0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.d1},{t:this.a1},{t:this.d2},{t:this.o3},{t:this.r1},{t:this.e1},{t:this.o1},{t:this.t1},{t:this.m1},{t:this.n1},{t:this.o4},{t:this.g1},{t:this.u1},{t:this.o2},{t:this.r2},{t:this.s1},{t:this.a2},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.s2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-455.4,-199,741.4,466);


// stage content:
(lib.cruzadinhas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.instance = new lib.TopoRanking();
	this.instance.parent = this;
	this.instance.setTransform(1322.9,228);

	this.instance_1 = new lib.CampoRanking();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1318.9,477.9);

	this.instance_2 = new lib.PecasAlvo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1252.9,383);

	this.instance_3 = new lib.Peca();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1251.9,322);

	this.instance_4 = new lib.LevelPoints();
	this.instance_4.parent = this;
	this.instance_4.setTransform(913,115.1);

	this.instance_5 = new lib.LevelCounter();
	this.instance_5.parent = this;
	this.instance_5.setTransform(929,228.1);

	this.instance_6 = new lib.LevelTimer();
	this.instance_6.parent = this;
	this.instance_6.setTransform(932,400);

	this.instance_7 = new lib.Level4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(480,275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(504.6,279,1748.3,539);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;