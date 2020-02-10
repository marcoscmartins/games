(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 550,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/backgroundroom.jpg", id:"backgroundroom"},
		{src:"images/drop.png", id:"drop"},
		{src:"images/wooden_bucket_empty.png", id:"wooden_bucket_empty"},
		{src:"sounds/click.mp3", id:"click"},
		{src:"sounds/coin.mp3", id:"coin"},
		{src:"sounds/music.mp3", id:"music"},
		{src:"sounds/sword.mp3", id:"sword"}
	]
};



// symbols:



(lib.backgroundroom = function() {
	this.initialize(img.backgroundroom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,600);


(lib.drop = function() {
	this.initialize(img.drop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,48);


(lib.wooden_bucket_empty = function() {
	this.initialize(img.wooden_bucket_empty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.wooden_bucket = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wooden_bucket_empty();
	this.instance.setTransform(-64,-64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64,-64,128,128);


(lib.touchButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s1:1,s2:5});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.498)").ss(10,1,1).p("AEikhQB4B4AACpQAACqh4B4Qh4B4iqAAQipAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4g");
	this.shape.setTransform(0,0,1.561,1.561);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#333333","#000000"],[0,1],-8,-11,0,-8,-11,42.2).s().p("AkhEhQh3h3AAiqQAAipB3h3QB5h5CoAAQCqAAB3B5QB4B3ABCpQgBCqh4B3Qh3B5iqAAQioAAh5h5g");
	this.shape_1.setTransform(0,0,1.561,1.561);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.498)").ss(9,1,1).p("AqLAAQAAkNC/i/QC/i/ENAAQEOAAC/C/QC/C/AAENQAAEOi/C/Qi/C/kOAAQkNAAi/i/Qi/i/AAkOg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#333333","#000000"],[0,1],-12.7,-17.5,0,-12.7,-17.5,67.1).s().p("AnLHNQi/i/AAkOQAAkNC/i+QC+i/ENAAQEOAAC/C/QC+C+AAENQAAEOi+C/Qi/C+kOAAQkNAAi+i+g");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.498)").ss(8,1,1).p("AqXAAQAAkSDDjCQDCjDESAAQETAADDDDQDCDCAAESQAAETjCDDQjDDCkTAAQkSAAjCjCQjDjDAAkTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#333333","#000000"],[0,1],-12.9,-17.8,0,-12.9,-17.8,68.3).s().p("AnUHVQjCjCgBkTQABkRDCjDQDCjCESgBQETABDCDCQDDDDAAERQAAETjDDCQjCDDkTAAQkSAAjCjDg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.498)").ss(7,1,1).p("AqjAAQAAkXDGjGQDGjGEXAAQEYAADGDGQDGDGAAEXQAAEYjGDGQjGDGkYAAQkXAAjGjGQjGjGAAkYg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#333333","#000000"],[0,1],-13.2,-18.1,0,-13.2,-18.1,69.5).s().p("AncHdQjHjFABkYQgBkWDHjGQDGjHEWABQEYgBDFDHQDHDGgBEWQABEYjHDFQjFDHkYgBQkWABjGjHg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.498)").ss(6,1,1).p("AqvAAQAAkcDKjJQDJjKEcAAQEdAADJDKQDKDJAAEcQAAEdjKDJQjJDKkdAAQkcAAjJjKQjKjJAAkdg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#333333","#000000"],[0,1],-13.4,-18.4,0,-13.4,-18.4,70.8).s().p("AnlHmQjJjJAAkdQAAkcDJjJQDJjJEcAAQEdAADJDJQDJDJAAEcQAAEdjJDJQjJDJkdAAQkcAAjJjJg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.498)").ss(5,1,1).p("AEikhQB4B4AACpQAACqh4B4Qh4B4iqAAQipAAh4h4Qh4h4AAiqQAAipB4h4QB4h4CpAAQCqAAB4B4g");
	this.shape_10.setTransform(0,0,1.707,1.707);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{scaleX:1.561,scaleY:1.561}},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.707,scaleY:1.707}},{t:this.shape_10}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{scaleX:1.561,scaleY:1.561}},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69,-69,138,138);


(lib.title = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#663300").s().p("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");
	this.shape.setTransform(120.8,61.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("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");
	this.shape_1.setTransform(-2.5,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#663300").s().p("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");
	this.shape_2.setTransform(-114.9,-64.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FF0000","#FFCC00"],[0,1],0,28.4,0,-28.3).s().p("ABvD7QgggRgXgdQgKgLgHgMIgFAHQgTAhgZAWQgcAVgdABQgWAAgQgKQgQgMgPgaQgQgZgUgsIgRgkIABAXQABAMAAAOIgBAbIgGAcQgCAKgJALQgIALgSAIQgSAHgfABQgvgBgZgOQgYgOgJgVQgIgTAAgTIABgPIABgMIACgFQAKgwAFgtQAGgtAAgdIgBgZIgDgKQADASAAAUQAAA3gWAyQgVA0glAnQgmAogyAWQgzAXg8ABQhDgBgkgfQgjgfAAg1QAAgcAFggIAKhCQAFgeAAgdIAAgHIgBgEIgFABIgHAAQgTAAgLgOQgLgOAAgbQAAhJAygpQAzgpBlgBQAVAAAVADQAVADAUAFQAzAOAlAfQANAMAMAOIACgJQAGgWAMgRQAMgRASgIQAUgHAbgDQAbgEAhAAQA9AAA5AJQA4AJAuASQAtASAZAbIAEAFQAJgNALgLQAUgVATgHQATgHAagEQAagEAeAAQARAAASACIAlAGQAvAMAiAfQALAKAKALIADgPQAHgWAMgRQAMgSAQgIQAPgHAXgDQAXgEAcAAQA3AAA4ANQA4ANAvAaQAvAbAdAqQAdAqAAA5QAAAngOAhQgNAigXAaQgYAagdANQggAOgZAEIgpAGIgXADIAAACQAAAJADAMIADAdQAAARgGAOQgGAOgQAIQgQAIggABQgkAAgcgKQgdgLgQgbQgRgagBgvQABggAFggIAKhCQAFgfABgeIgBgLIgBgGIgJgBQAEAZAAAcQgBA1gRAyQgTAzggAnQgfAogrAXQgpAXgxABQgnAAgggRgAAFgYQgQASgQAMIgaAYIAOAHIARAFQAPAFAOAHQACgYAGgUIAOgtIAIgXIgEgBQgNATgPAQgADShAQgGATgEAWQgFAUAAAMIABALIABAHQAUgKAHgRQAHgPABgNIABgJIAAgIQAAgQgDgMQgEgMgCgFQgHAHgHATgApJgLQgGAWAAAOQAPgJAHgNQAHgLAAgQIABgBIAAgCQAAgMgEgKQgDgMgEgHQgJAfgEAagAJchQIgGAAIAAAMIAAAGIACAGIAFAAQAHAAAKgDIARgEQAIgDAEgDQgGgGgLgDQgKgDgKAAIgKABgAixhqQgDAFgBAGIgCAKIAZgJQAOgGAIgHIgPgEIgQgBQgHABgDAFg");
	this.shape_3.setTransform(-114.9,-64.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(20,1,1).p("ApAkAQgVgDgVAAQhlABgzApQgyApAABJQAAAbALAOQALAOATAAQADAAAEAAQACgBADAAQABACAAACQAAADAAAEQAAAdgFAeQgFAhgFAhQgFAgAAAcQAAA1AjAfQAkAfBDABQA8gBAzgXQAygWAmgoQAlgnAVg0QAWgyAAg3QAAgUgDgSQACADABAHQABAKAAAPQAAAdgGAtQgFAtgKAwIgCAFQAAAFgBAHQgBAHAAAIQAAATAIATQAJAVAYAOQAZAOAvABQAfgBASgHQASgJAIgKQAJgLACgKQAEgPACgNQABgPAAgMQAAgOgBgMQgBgMAAgLIARAkQAUAsAQAZQAPAaAQAMQAQAKAWAAQAdgBAcgVQAZgWATghQADgDACgEQAHAMAKALQAXAdAgARQAgARAnAAQAxgBApgXQArgXAfgoQAggnATgzQARgyABg1QAAgcgEgZQAEABAFAAQABACAAAEQABAFAAAGQgBAegFAfQgFAhgFAhQgFAggBAgQABAvARAaQAQAbAdALQAcAKAkAAQAggBAQgIQAQgIAGgOQAGgOAAgRQgBgRgCgMQgDgMAAgJIAAgCIAXgDQAQgCAZgEQAZgEAggOQAdgNAYgaQAXgaANgiQAOghAAgnQAAg5gdgqQgdgqgvgbQgvgag4gNQg4gNg3AAQgcAAgXAEQgXADgPAHQgQAIgMASQgMARgHAWQgCAHgBAIQgKgLgLgKQgigfgvgMQgTgEgSgCQgSgCgRAAQgeAAgaAEQgaAEgTAHQgTAHgUAVQgLALgJANQgCgDgCgCQgZgbgtgSQgugSg4gJQg5gJg9AAQghAAgbAEQgbADgUAHQgSAIgMARQgMARgGAWQgCAEAAAFQgMgOgNgMQglgfgzgOQgUgFgVgDg");
	this.shape_4.setTransform(-114.9,-64.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF0000","#FFCC00"],[0,1],0,23.8,0,-23.8).s().p("ABhD+QghgPgbgbQgYgYgNgeIgBAUQgBARgEAPQgBAHgIAMQgJAKgUAJQgUAJgkAAQgeAAgagIQgYgHgPgQQgQgPAAgZQABgRAEgRQAEgQABgPQAAgLgGgEQgGgEgNAAIgEAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABIAAADQAAAPAEAOIAHAeQAEAPAAAOQAAAWgPAMQgOAOgZAFQgZAGgfAAQgmAAgUgIQgVgIgIgMQgIgMgBgOQgZAagoAPQgtARg5AAQhDgBgtgUQgtgUgXghQgWghABgpQAAgUAHgRQAGgQAMgKQAKgKAPAAQAIAAAHAEIAPAGQAHAEAIAAQADAAADgBQADgBAAgIQgBgOgOgQIgfgjQgTgTgNgaQgOgagBghQABgnAZgdQAYgdArgPQArgQA3AAIAQAAIARAAQAeADAgAMQAgANAbAUIAVARQAGgSAKgQQALgTAOgGQAVgJAdgEQAcgFAhAAQAmAAAmAHQAmAGAeANQAaALAQAPQAQAPAHASIAJAcIAHgTQAKgSAOgLQAogbAxgOQAwgMAwAAQA4AAAtAOQAtAOAbAbQARARAGAVIAFgTQAHgYANgTQALgTANgGQAWgJAdgEQAcgFAgAAQAnAAAlAHQAnAGAeANQAZALARAPQAQAPAGASQAKAcAJAmQAKAoAIAtQAHArAFAtQAEAtAAAnQAAAUgBASQgCARgDAPQgCAHgHAMQgKAKgTAJQgVAJgkAAQgdAAgagIQgZgHgOgQQgQgPAAgZQABgRAEgRQAEgQAAgPQAAgLgFgEQgHgEgMAAIgEAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADQAAAPAEAOIAHAeQADAPABAOQgBAWgOAMQgPAOgYAFQgZAGgfAAQgnAAgUgIQgVgIgIgMQgIgNgBgOQgBgOABgMQAAgQACgRIgJADQgLAEgGAHQgHAHgGAKQgfAtgrAaQgrAagyABQgigBghgOgAm2AWQAUATANAWIAOg8QAKgkABgfIgFAJQgNAWgTANQgUANgVAAIgMgBIgMgFQAXAPAVAUgADAgmQgTATAAAsQAAARADAGQADAGAEABQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgDIgCgNIAAgOQgBgQAGgPQAGgRAUgNQATgNAngFIgMgBIgMAAIgCAAQgkAAgSARgAgNgQIACAQIACgRIgEABgAFrhXQgLAVgUAJIATABIANABQANADAMAQQAIAMAGAPQAHgiABgbIAAgFQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQgUgCgMgPQgEgGgDgHQgCALgFALgAJEg8QgDAPAAAJQAAADACAEQACADALAAIABAAIACgBIABgCIAAgDQAAgLgDgPIgHgcIgGAagAjTg8QgCAPAAAJQgBADACAEQADADAKAAIACAAIABgBIABgCIABgDQAAgLgEgPIgGgcIgHAagAn3gcIgKgPIgHgPIgKgTIAAAAIAAgBIgDAFQgCADAAAGIAAACQAAAGAKAJQAJAJANAKIAAAAg");
	this.shape_5.setTransform(120.8,61.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FF0000","#FFCC00"],[0,1],-0.1,28.4,-0.1,-28.3).s().p("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");
	this.shape_6.setTransform(-2.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(20,1,1).p("ACPj3QgaAFgNAHQgOAKgLATQgFAIgEAJQgHgIgIgHQgdgdgugQQgUgFgVgEQgWgDgXAAQggAAgeAFQgeAEgYAHQgVAIgTAVQgHAJgIAKQgCgEgCgFQgKgPgYgJQgYgKgfgEQgfgDghAAQgdAAgaACQgaACgUADQgTAEgJADQgTAKgKATQgIARgEARQgCgHgCgFQgHgTgQgPQgQgOgagMQgegMgmgHQglgGgnAAQghAAgcAEQgdAEgVAKQgNAGgMATQgJAOgGARQgFgGgGgFQgegdgwgQQgTgFgVgEQgWgDgXAAQggAAgeAFQgeAEgYAHQgVAIgSAVQgUAVgMAbQgNAaAAAXQAAAQAKAOQAKAOAZABIgFAMQgHAUgHAdQgGAZgBAkQAAAnANAmQAOAlAaAfQAaAfAmATQAlASAwAAQAygBAngXQAggSAVgdQAAAFABAFQABAOAIAMQAIAMAVAJQAUAIAnAAQAfAAAYgGQAZgGAOgNQAPgNABgWQgBgOgEgPQgDgOgEgPQgEgOAAgPIAAgEQAAgBACAAQABAAACAAQANAAAGADQAGAFAAAKQgBAQgDAQQgFARAAARQAAAZAPAPQAPAQAZAHQAZAHAeAAQAkAAAUgIQAUgJAJgLQAIgLABgIQADgLACgOQAAAdAQASQARASAcAIQAcAIAkAAQAVAAAYgEQAYgFAWgMQAWgMAOgWQAOgXAAgkQgBgigLgeQgMgegKgZQgMgZAAgRQAAgCgBgBQAAgCADgDQADgCALgDQAGgBAKgCQAMgDAMgHQAEgDAFgFQgEANgDARQgHAZgBAkQAAAnANAmQAOAlAaAfQAbAfAlATQAlASAwAAQAzgBAkgXQAngXAXgmQAWgmAAgtQAAgbgKgXQgLgXgSgOQAegGAOgSQALgPAFgRIAGAAQAAACAAADQABADAAAEQgBAcgEAgQgFAjgFAjQgEAigBAeQAAAjAHAXQAIAWAVALQAVALAnAAQA2AAAagNQAbgMAHgYQADARAOALQAOAKAUAFQAUAEAUAAQAGAAAQgBQAQgCAQgGQAQgFAJgOQAKgRALghQABgEACgEQACANAEALQAHAaAVASQAVASAmAJQAmAKA7AAQApAAAmgGQAngFAegLQAdgKAPgSQAHgLAFgRQACgJACgJQABANAGANQAIAVAZAOQAZAOAvABQAegBATgHQASgJAIgKQAJgLACgKQAEgPACgOQABgOAAgMQAAgOgBgMQgBgMAAgLIARAkQAUAsAPAZQAQAaAQALQAQALAWAAQAdgBAcgVQAbgWATghQATggAAgkQAAgagMgPQgNgOgQgKQgTgIgRgGQgIgDgJgCQgJgFgFgCQAJgKARgMQAQgOASgSQARgTAOgVQAMgWADgZIAAgIQgBglgagbQgbgcgtgRQgtgTg4gIQg5gJg9AAQghAAgbADQgcAEgTAHQgSAIgMARQgDADgCAEQgOgKgZgHQgigKgsgEQgrgFgtAAQguAAgmAEQgmAEgUAJQgPAHgNAVQgDAGgDAGQgBgCgBgBQgWgWgogFQgEgCgGAAQgFAAgEAAQgaAAgUAJQgVAIgOAPQgKgPgUgKQgUgKgbgFQgdgEgeAAQgfAAgaAEg");
	this.shape_7.setTransform(-2.5,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(20,1,1).p("AKijyQgegNgngGQglgHgnAAQggAAgcAFQgdAEgWAJQgNAGgLATQgNATgHAYQgDAKgCAJQgGgVgRgRQgbgbgtgOQgtgOg4AAQgwAAgwAMQgxAOgoAbQgOALgKASQgEAJgDAKQgFgPgEgNQgHgSgQgPQgQgPgagLQgegNgmgGQgmgHgmAAQghAAgcAFQgdAEgVAJQgOAGgLATQgKAQgGASQgKgJgLgIQgbgUgggNQgggMgegDQgJAAgIAAQgIAAgIAAQg3AAgrAQQgrAPgYAdQgZAdgBAnQABAhAOAaQANAaATATQARAVAOAOQAOAQABAOQAAAIgDABQgDABgDAAQgIAAgHgEQgHgDgIgDQgHgEgIAAQgPAAgKAKQgMAKgGAQQgHARAAAUQgBApAWAhQAXAhAtAUQAtAVBDAAQA5AAAtgRQAogPAZgaQABAOAIAMQAIAMAVAIQAUAIAmAAQAfAAAZgGQAZgFAOgOQAPgMAAgWQAAgOgEgPQgDgPgEgPQgEgOAAgPIAAgDQAAgCABAAQACAAACAAQANAAAGAEQAGAEAAALQgBAPgEAQQgEARgBARQAAAZAQAPQAPAQAYAHQAaAIAeAAQAkAAAUgJQAUgJAJgKQAIgMABgHQAEgPABgRQABgKAAgKQANAeAYAYQAbAbAhAPQAhAOAiABQAygBArgaQArgaAfgtQAGgKAHgHQAGgHALgEQAEgBAFgCQgCARAAAQQgBAMABAOQABAOAIANQAIAMAVAIQAUAIAnAAQAfAAAZgGQAYgFAPgOQAOgMABgWQgBgOgDgPQgEgPgDgPQgEgOAAgPIAAgDQAAgCABAAQABAAADAAQAMAAAHAEQAFAEAAALQAAAPgEAQQgEARgBARQAAAZAQAPQAOAQAZAHQAaAIAdAAQAkAAAVgJQATgJAKgKQAHgMACgHQADgPACgRQABgSAAgUQAAgngEgtQgFgtgHgrQgIgtgKgoQgJgmgKgcQgGgSgQgPQgRgPgZgLg");
	this.shape_8.setTransform(120.8,61.9);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-207.1,-101.6,417.1,200.5);


(lib.novoJogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// label
	this.text = new cjs.Text("JOGAR NOVAMENTE", "30px 'Brady Bunch Remastered'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-2,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(7));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","#FF0000"],[0,1],0,29.8,-0.1,-29.7).s().rr(-123,-30,246,60,15.2);
	this.shape.setTransform(0,0,1.004,1,0,0,-174.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#663344","#AA5555"],[0,1],0.1,29.8,0.2,-29.7).s().p("AQ2GMMghrgDBQiYgOAAiYIAAkmQAAiYCYAOMAhrADBQCYAOAACYIAAEmQgBCLiAAAIgXgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#336688","#55AAAA"],[0,1],0.1,29.8,0.2,-29.7).s().p("AQ2GMMghrgDBQiYgOAAiYIAAkmQAAiYCYAOMAhrADBQCYAOAACYIAAEmQgBCLiAAAIgXgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0099CC","#00FFFF"],[0,1],0,29.8,-0.1,-29.7).s().rr(-123,-30,246,60,15.2);
	this.shape_3.setTransform(0,0,1.004,1,0,0,-174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-39.7,246,79.5);


(lib.hitter = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().dr(-22.5,-2,45,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.5,-2,45,4);


(lib.DropDispatcher = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "dropDispatcher";
		var context = this;
		
		var forward = true;
		var limit;
		var origin;
		var timer = 0;
		
		this.creationSpeed = 3000;
		
		var currentCount = 0;
		
		this.inicializa = function()
		{
			limit = (stage.canvas.width / stage.scaleX) - 150;
			origin = 75;
			context.x = origin;
			context.creationSpeed = 3000;
			currentCount = 0;
			
			setupTimer();
		}
		
		function setupTimer()
		{
			timer = setInterval(timerHandler, context.creationSpeed);
		}
		
		function timerHandler()
		{
			if (currentCount % 5 == 0)
			{
				if (context.creationSpeed >= 300)
					context.creationSpeed -= 100;
				
				clearTimeout(timer);
				timer = setInterval(timerHandler, context.creationSpeed);
			}
			
			currentCount++;
			
			var position = origin + (Math.random() * limit);
			createjs.Tween.get(context, {override:true}).to({x:position}, 300, createjs.Ease.quartOut).call(createDrop);
		}
		
		function createDrop()
		{
			context.parent.createDrop();
		}
		
		this.stopTimer = function()
		{
			//console.log("stop");
			clearTimeout(timer);
		}
		
		this.playTimer = function()
		{
			//console.log("play");
			timer = setInterval(timerHandler, this.creationSpeed);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// label
	this.text = new cjs.Text("dispatcher", "10px 'Cartoonist'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.setTransform(-2.4,-5.4);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","#FF6600"],[0,1],0,-15,0,15).s().rr(-37.5,-15,75,30,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-15,75,30);


(lib.Drop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBLIAAiVIArAAIAACVg");
	this.shape.setTransform(0,7.5,1,1,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBLIAAiVIArAAIAACVg");
	this.shape_1.setTransform(0,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#33FFFF","#006699"],[0,1],-3.6,14.3,0,-3.6,14.3,32.9).s().p("AhyCpQgxgwAAhEQAAhCAxgwQAvgwBFhrQBBBrAxAwQAvAwABBCQgBBEgvAwQgwAwhEAAQhDAAgvgwg");
	this.shape_2.setTransform(0,0,1.034,1.033);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-22.5,33.9,45);


(lib.btjogar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// label
	this.text = new cjs.Text("JOGAR", "30px 'Brady Bunch Remastered'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-2,-18.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00FFFF","#0099CC"],[0,1],2,-35,2,35).s().rr(-75,-35,150,70,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00FFFF","#0099CC"],[0,1],-0.5,-36.1,-0.5,33.9).s().p("AqOFpQh4AAABh4IAAnhQgBh4B4AAIUdAAQB4AAgBB4IAAHhQABB4h4AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00FFFF","#0099CC"],[0,1],-3,-37.3,-3,32.7).s().p("AqnF1Qh3AAgBh4IAAn5QABh4B3AAIVPAAQB3AAABB4IAAH5QgBB4h3AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#00FFFF","#0099CC"],[0,1],-5.5,-38.4,-5.5,31.6).s().p("Aq/GBQh5AAAAh4IAAoRQAAh4B5AAIV/AAQB5AAAAB4IAAIRQAAB4h5AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00FFFF","#0099CC"],[0,1],-8,-39.6,-8,30.4).s().rr(-85,-39.65,170,79.3,12);
	this.shape_4.setTransform(0,0,1,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#00FFFF","#0099CC"],[0,1],-6.3,-38.8,-6.3,31.2).s().p("ArIGEQh4AAAAh4IAAoXQAAh4B4AAIWRAAQB4AAAAB4IAAIXQAAB4h4AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#00FFFF","#0099CC"],[0,1],-4.6,-38,-4.6,32).s().p("Aq3F9Qh4AAAAh4IAAoJQAAh4B4AAIVvAAQB4AAAAB4IAAIJQAAB4h4AAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#00FFFF","#0099CC"],[0,1],-1.3,-36.5,-1.3,33.5).s().p("AqWFtQh4AAAAh4IAAnpQAAh4B4AAIUtAAQB4AAAAB4IAAHpQAAB4h4AAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#00FFFF","#0099CC"],[0,1],0.4,-35.7,0.4,34.3).s().p("AqFFmQh4gBAAh4IAAnZQAAh4B4gBIULAAQB4ABAAB4IAAHZQAAB4h4ABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-35,150,70);


(lib.btinicio = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// label
	this.text = new cjs.Text("SAIR", "30px 'Brady Bunch Remastered'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 32;
	this.text.setTransform(-2,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(7));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#990000","#FF0000"],[0,1],0,29.8,-0.1,-29.7).s().rr(-123,-30,246,60,15.2);
	this.shape.setTransform(0,0,1.004,1,0,0,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#663344","#AA5555"],[0,1],0,29.8,-0.1,-29.7).s().p("AzNECIAAkmQAAiYCYgOMAhrgDBQCYgOAACYIAAEmQAACYiYAOMghrADBIgXABQiBAAAAiLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#336688","#55AAAA"],[0,1],0,29.8,-0.1,-29.7).s().p("AzNECIAAkmQAAiYCYgOMAhrgDBQCYgOAACYIAAEmQAACYiYAOMghrADBIgXABQiBAAAAiLg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#0099CC","#00FFFF"],[0,1],0,29.8,-0.1,-29.7).s().rr(-123,-30,246,60,15.2);
	this.shape_3.setTransform(0,0,1.004,1,0,0,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-39.7,246,79.5);


(lib.btcontinuar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s1":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// label
	this.text = new cjs.Text("CONTINUAR", "25px 'Brady Bunch Remastered'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.setTransform(-2,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(11));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#00FFFF","#0099CC"],[0,1],2,-35,2,35).s().rr(-75,-35,150,70,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#00FFFF","#0099CC"],[0,1],-0.5,-36.1,-0.5,33.9).s().p("AqOFpQh4AAABh4IAAnhQgBh4B4AAIUdAAQB4AAgBB4IAAHhQABB4h4AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#00FFFF","#0099CC"],[0,1],-3,-37.3,-3,32.7).s().p("AqnF1Qh3AAgBh4IAAn5QABh4B3AAIVPAAQB3AAABB4IAAH5QgBB4h3AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#00FFFF","#0099CC"],[0,1],-5.5,-38.4,-5.5,31.6).s().p("Aq/GBQh5AAAAh4IAAoRQAAh4B5AAIV/AAQB5AAAAB4IAAIRQAAB4h5AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#00FFFF","#0099CC"],[0,1],-8,-39.6,-8,30.4).s().rr(-85,-39.65,170,79.3,12);
	this.shape_4.setTransform(0,0,1,1.001);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#00FFFF","#0099CC"],[0,1],-6.3,-38.8,-6.3,31.2).s().p("ArIGEQh4AAAAh4IAAoXQAAh4B4AAIWRAAQB4AAAAB4IAAIXQAAB4h4AAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#00FFFF","#0099CC"],[0,1],-4.6,-38,-4.6,32).s().p("Aq3F9Qh4AAAAh4IAAoJQAAh4B4AAIVvAAQB4AAAAB4IAAIJQAAB4h4AAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#00FFFF","#0099CC"],[0,1],-1.3,-36.5,-1.3,33.5).s().p("AqWFtQh4AAAAh4IAAnpQAAh4B4AAIUtAAQB4AAAAB4IAAHpQAAB4h4AAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#00FFFF","#0099CC"],[0,1],0.4,-35.7,0.4,34.3).s().p("AqFFmQh4gBAAh4IAAnZQAAh4B4gBIULAAQB4ABAAB4IAAHZQAAB4h4ABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-35,150,70);


(lib.background = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.backgroundroom();
	this.instance.setTransform(0,-50);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#90BED5").s().p("AvdD/IAAn8Ie6AAIAAH8g");
	this.shape.setTransform(480,225,4.848,10.784);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-50,960,600);


(lib.gr_instrucoes = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("UTILIZE OS BOTÕES LATERAIS PARA MOVIMENTAR O BALDE E COLETAR AS GOTAS PARA SOMAR PONTOS.\nCUIDADO! QUANTO MAIS GOTAS COLETAR MAIS RÁPIDO ELAS CAIRÃO.\nBOA SORTE.", "25px 'Brady Bunch Remastered'", "#990000");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 819;
	this.text.setTransform(478,98.3);

	this.text_1 = new cjs.Text("INSTRUÇÕES", "50px 'Brady Bunch Remastered'", "#111111");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 52;
	this.text_1.setTransform(478,8.1);
	this.text_1.shadow = new cjs.Shadow("rgba(51,51,51,1)",0,0,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Ehe5ASIMAAAgkPMC9zAAAMAAAAkPg");
	this.shape.setTransform(480,125,0.79,1.078);

	this.addChild(this.shape,this.text_1,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,966,256);


(lib.audioComponent_fundoBlack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#616161","#000000"],[0,1],-8.1,-14.8,6,10.9).s().p("AiACuQgNAAgIgIQgJgJAAgMIAAkgQAAgNAJgJQAIgIANgBIECAAQAMABAIAIQAKAJgBANIAAEgQABAMgKAJQgIAIgMAAg");
	this.shape.setTransform(21.6,22.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.6,5.3,32,35);


(lib.vidas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// baldes
	this.instance = new lib.wooden_bucket();
	this.instance.setTransform(18,18,0.281,0.281);

	this.instance_1 = new lib.wooden_bucket();
	this.instance_1.setTransform(18,18,0.281,0.281);

	this.instance_2 = new lib.wooden_bucket();
	this.instance_2.setTransform(18,18,0.281,0.281);

	this.instance_3 = new lib.wooden_bucket();
	this.instance_3.setTransform(18,18,0.281,0.281);

	this.instance_4 = new lib.wooden_bucket();
	this.instance_4.setTransform(18,18,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:18}}]}).to({state:[{t:this.instance_1,p:{x:18}},{t:this.instance,p:{x:43.5}}]},1).to({state:[{t:this.instance_2,p:{x:18}},{t:this.instance_1,p:{x:43.5}},{t:this.instance,p:{x:69}}]},1).to({state:[{t:this.instance_3,p:{x:18}},{t:this.instance_2,p:{x:43.5}},{t:this.instance_1,p:{x:69}},{t:this.instance,p:{x:94.5}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3,p:{x:43.5}},{t:this.instance_2,p:{x:69}},{t:this.instance_1,p:{x:94.5}},{t:this.instance,p:{x:120}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,36);


(lib.GameOver = function() {
	this.initialize();

	// Layer 2
	this.btinicio = new lib.btinicio();
	this.btinicio.setTransform(634.5,398.3);

	this.btnovo = new lib.novoJogo();
	this.btnovo.setTransform(335.5,398.3);

	// Layer 1
	this.text = new cjs.Text("GAME OVER", "70px 'Brady Bunch Remastered'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 282;
	this.text.setTransform(488.8,235.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF00","#FF9900"],[0,1],0,-134.4,0,134.5).s().rr(-245,-134.5,490,269,20);
	this.shape.setTransform(490.8,278.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().dr(-490.8,-275,981.6,550);
	this.shape_1.setTransform(490.8,275);

	this.addChild(this.shape_1,this.shape,this.text,this.btnovo,this.btinicio);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,981.6,550);


(lib.DropLife = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wooden_bucket();
	this.instance.setTransform(6.5,7.5,0.117,0.117);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBLIAAiVIArAAIAACVg");
	this.shape.setTransform(-6.2,6.8,0.667,0.667,-90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBLIAAiVIArAAIAACVg");
	this.shape_1.setTransform(-6.2,6.8,0.667,0.667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FF3300","#990000"],[0,1],-3.6,14.3,0,-3.6,14.3,32.9).s().p("AhyCpQgxgwAAhEQAAhCAxgwQAvgwBFhrQBBBrAxAwQAvAwABBCQgBBEgvAwQgwAwhEAAQhDAAgvgwg");
	this.shape_2.setTransform(0,0,1.034,1.033);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9,-22.5,33.9,45);


(lib.fullscreenButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape.setTransform(-6.5,-4.4,0.998,0.998,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_1.setTransform(-4.4,-6.5,0.998,0.998,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_2.setTransform(6.5,-4.4,0.999,0.999,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_3.setTransform(4.4,-6.5,0.999,0.999,-90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_4.setTransform(6.5,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_5.setTransform(4.4,6.5,1,1,-90);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_6.setTransform(-6.5,4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_7.setTransform(-4.4,6.5,1,1,90);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_8.setTransform(-2.5,-4.5,0.998,0.998);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_9.setTransform(-4.5,-2.4,0.998,0.998,-90);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_10.setTransform(2.4,-4.5,0.998,0.998);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_11.setTransform(4.5,-2.4,0.998,0.998,90);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_12.setTransform(2.5,4.5,0.999,0.999,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_13.setTransform(4.5,2.4,0.999,0.999,90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_14.setTransform(-2.5,4.4,0.999,0.999,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AgNAiIAAhDIAbAAIAABDg");
	this.shape_15.setTransform(-4.5,2.4,0.999,0.999,-90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Camada 3
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0,0,1,1,0,0,0,21.1,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.3,-38.4,90.7,55.9);


(lib.btsound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgNAfIglAAIAAg/IAnAAIA+g8IAAC5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAfIgmAAIAAg/IAoAAIA/g8IAAC5g");

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0,0,1,1,0,0,0,21.1,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.btpause = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// sound
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().dr(-3.5,-8.95,7,17.9);
	this.shape.setTransform(5.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().dr(-3.5,-8.95,7,17.9);
	this.shape_1.setTransform(-5.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCuQgMABgIgKQgKgIABgMIAAkgQgBgNAKgJQAIgIAMgBIECAAQANABAIAIQAJAJAAANIAAEgQAAAMgJAIQgIAKgNgBg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EBEBEB","#B2B2B2"],[0,1],0,-9.1,0,9.2).s().dr(-3.5,-8.95,7,17.9);
	this.shape_3.setTransform(-5.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#EBEBEB","#B2B2B2"],[0,1],0,-9.1,0,9.2).s().dr(-3.5,-8.95,7,17.9);
	this.shape_4.setTransform(5.2,0);

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0,0,1,1,0,0,0,21.1,22.6);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-38.6,44.7,56.1);


(lib.btmusic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// music
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAPBOQgFgWAWgJQARgIAUACIAAhWIhTAAIAAA9IABAAIgBABIAAABQgBAMgHAKQgLARgVADQgcAEgFgXQgGgWAWgJQARgHAUACIAAhlIABAAIAAgBIB6AAIAACYIAAAAQgCAMgGAKQgLARgVADIgIABQgVAAgFgUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#B8B8B8"],[0,1],-8.1,-14.8,6,10.9).s().p("AiBCvQgMAAgJgJQgJgJAAgMIAAkhQAAgMAJgJQAJgJAMAAIECAAQANAAAJAJQAIAJABAMIAAEhQgBAMgIAJQgJAJgNAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBOQgFgWAWgJQARgIAUACIAAhWIhTAAIAAA9IABAAIgBABIAAABQgBAMgHAKQgLARgVADQgcAEgFgXQgGgWAWgJQARgHAUACIAAhlIABAAIAAgBIB6AAIAACYIAAAAQgCAMgGAKQgLARgVADIgIABQgVAAgFgUg");

	this.instance = new lib.audioComponent_fundoBlack();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,21.6,22.8);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",0,0,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-17.5,32,35);


(lib.Game = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (!createjs.Touch.isSupported())
		{
			this.left.visible = false;
			this.right.visible = false;
		}
	}
	this.frame_20 = function() {
		this.stop();
		
		this.name = "game";
		var context = this;
		
		var balde = this.balde;
		var hitter = this.hitter;
		
		var left = this.left;
		left.name = "left";
		var right = this.right;
		right.name = "right";
		
		this.side = "left";
		this.speed = 2.3;
		this.speedLimit = 20;
		
		var qtdVidas = 5;
		var pontos = 0;
		
		var vidas = this.vidas;
		var pontos_txt = this.pontos_txt;
		var max_txt = this.max_txt;
		
		var pause = this.pause;
		var dropDispatcher = this.dropDispatcher;
		var gameOver = this.gameOver;
		
		var canMove = true;
		
		var drops = [];
		
		var pauseFireCont = 0;
		
		function inicializa()
		{
			side = "left";
			speed = 2.3;
			speedLimit = 20;
			context.side = "left";
			pontos_txt.text = "0";
			max_txt.text = "0";
			pontos = 0;
			qtdVidas = 5;
			
			if (localStorage.getItem('highScore'))
				max_txt.text = localStorage.getItem('highScore');
			
			vidas.gotoAndStop(qtdVidas - 1);
			
			pause.on("pressup", pauseHandler);
			
			dropDispatcher.inicializa();
		}
		
		this.createDrop = function()
		{
			var n = Math.random();
			var f = (5 - vidas.currentFrame) / 10;
			var drop = (n < 0.1 && qtdVidas < 5) ? new lib.DropLife() : new lib.Drop();
			drop.x = dropDispatcher.x;
			drop.y = dropDispatcher.y;
			drop.name = (n < 0.1 && qtdVidas < 5) ? "dropLife" : "drop";
			drop.cache(-24, -24, 48, 48);
			context.addChild(drop);
			
			drops.push(drop);
			
			drop.on("tick", fall);
		}
		
		// Método responsável pela queda das gotas
		function fall(event)
		{
			if ((hitter.x + 35 > event.currentTarget.x && hitter.x - 35 < event.currentTarget.x) &&
				(hitter.y - 35 < event.currentTarget.y && hitter.y + 20 > event.currentTarget.y) &&
				(event.currentTarget.alpha == 1))
			{
				createjs.Tween.get(event.currentTarget, {override:true}).to({alpha:0}, 300, createjs.Ease.quartOut).call(
				function () { removeDrop(event.currentTarget, 1); });
				if (context.parent.enableSounds)
					playSound("coin");
			}
			
			if (event.currentTarget.y >= (stage.canvas.height - 35) / stage.scaleX && event.currentTarget.alpha == 1)
			{
				createjs.Tween.get(event.currentTarget, {override:true}).to({alpha:0}, 300, createjs.Ease.quartOut).call(
				function () { removeDrop(event.currentTarget, -1); });
				if (context.parent.enableSounds)
					playSound("sword");
			}
			
			if (canMove)
				event.currentTarget.y += speed;
		}
		
		function removeDrop(drop, k)
		{
			if (drop.name == "drop")
			{
				updatePontos(k);
			}	
			else if (drop.name == "dropLife")
			{
				qtdVidas++;
				vidas.gotoAndStop(qtdVidas -1);
			}
			
			if (k <= 0) 
			{
				vidas.gotoAndStop(--qtdVidas - 1);
				if (qtdVidas <= 0)
					apresentaGameOver();
			}
			
			drop.off("tick", fall);
			try {
				context.removeChild(drop);
			} catch(error) {
				console.log("Não foi possível remover drop");
			}
		}
		
		function reinicia(event)
		{
			playSound("click");
			context.parent.reinicia();
		}
		
		function reset(event)
		{
			playSound("click");
			retiraGameOver();
			inicializa();
		}
		
		function apresentaGameOver()
		{
			if (localStorage.getItem('highScore'))
				if (parseInt(localStorage.getItem('highScore')) < pontos)
					localStorage.setItem("highScore", pontos);
			else
				localStorage.setItem("highScore", pontos);
			
			dropDispatcher.stopTimer();
			createjs.Tween.get(gameOver, {override:true}).to({x:stage.canvas.width * 0.5 / stage.scaleX, y:gameOver.y}, 500, createjs.Ease.quartOut);
			
			findDropAndDelete();
			
			gameOver.btnovo.on("click", reset);
			gameOver.btinicio.on("click", reinicia);
			
			context.setChildIndex(gameOver, context.getNumChildren() - 1);
		}
		
		function findDropAndDelete()
		{
			var k = context.getNumChildren();
			var temp = [];
			for (var i = 0; i < k; i++)
			{
				if (context.getChildAt(i).name == "drop")
				{
					context.getChildAt(i).off("tick", fall);
					temp.push(context.getChildAt(i));
				}
			}
			
			for (i = 0; i < temp.length; i++)
				if (temp[i])
					context.removeChild(temp[i]);
		}
		
		function retiraGameOver()
		{
			createjs.Tween.get(gameOver, {override:true}).to({x:stage.canvas.width * 2 / stage.scaleX, y:gameOver.y}, 500, createjs.Ease.quartOut);
		}
				
		function updatePontos(k)
		{
			speed += pontos % 5 == 0 ? 0.5 : 0;
			pontos += k;
			pontos_txt.text = "" + pontos;
		}
		
		/**
		* PAUSE BUTTON CONTROLS
		*/
		
		function pauseHandler(e)
		{
			pauseFireCont++;
			
			if (pauseFireCont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (e.currentTarget.currentFrame == 0) {
				e.currentTarget.gotoAndStop(1);
				pauseTheGame();
			} else {
				e.currentTarget.gotoAndStop(0);
				resumeTheGame();
			}
			
			if (context.enableSounds)
				playSound("click");
		}
		
		function resumeTheGame() 
		{
			right.mouseEnabled = true;
			left.mouseEnabled = true;
			
			canMove = true;
			dropDispatcher.playTimer();
		}
		
		function pauseTheGame()
		{
			right.mouseEnabled = false;
			left.mouseEnabled = false;
			
			canMove = false;
			dropDispatcher.stopTimer();
		}
		
		/**
		* PUCKET CONTROLS
		*/
		function downPoint(event)
		{
			moveBalde(event.currentTarget.name);
		}
		
		function moveBalde(side)
		{
			context.side = side;
			context.addEventListener("tick", move);
		}
		
		function upPoint(event)
		{
			stopBalde();
		}
		
		function stopBalde() 
		{
			context.removeEventListener("tick", move);
		}
		
		function move() 
		{
			if (balde.x <= 0)
				balde.x = stage.canvas.width / stage.scaleX;
			else if (balde.x >= stage.canvas.width  / stage.scaleX)
				balde.x = 0;
				
			if (canMove) 
			{
				if (context.side == "left")
					balde.x -= context.speed > context.speedLimit ? context.speedLimit * 5 : context.speed * 5;
				else
					balde.x += context.speed > context.speedLimit ? context.speedLimit * 5 : context.speed * 5;
			}
			
			hitter.x = balde.x;
			hitter.y = balde.y - 45;
		}
		
		function handleKeyDown(e)
		{
			if (e.keyCode == 39)
				moveBalde("right");
			else if (e.keyCode == 37)
				moveBalde("left");
		}
		
		function handleKeyUp(e)
		{
			stopBalde();
		}
		
		document.onkeydown = handleKeyDown;
		document.onkeyup = handleKeyUp;
		
		if (createjs.Touch.isSupported())
		{
			left.on('mousedown', downPoint);
			left.on('pressup', upPoint);
			left.on('rollout', upPoint);
			right.on('mousedown', downPoint);
			right.on('pressup', upPoint);
			right.on('rollout', upPoint);
		}
					
		inicializa();
		
		createjs.Touch.enable(context, true, true);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// game over
	this.gameOver = new lib.GameOver();
	this.gameOver.setTransform(1460.8,275,1,1,0,0,0,490.8,275);

	this.timeline.addTween(cjs.Tween.get(this.gameOver).wait(21));

	// vidas
	this.text = new cjs.Text("vidas", "15px 'Brady Bunch Remastered'", "#A73535");
	this.text.lineHeight = 17;
	this.text.lineWidth = 41;
	this.text.setTransform(200,10);

	this.vidas = new lib.vidas();
	this.vidas.setTransform(197.1,32.8);
	this.vidas.shadow = new cjs.Shadow("rgba(255,255,0,1)",0,0,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vidas},{t:this.text}]}).wait(21));

	// dispatcher
	this.dropDispatcher = new lib.DropDispatcher();
	this.dropDispatcher.setTransform(75,-34);

	this.timeline.addTween(cjs.Tween.get(this.dropDispatcher).wait(21));

	// pontos
	this.max_txt = new cjs.Text("0", "20px 'Brady Bunch Remastered'", "#FFFFFF");
	this.max_txt.name = "max_txt";
	this.max_txt.textAlign = "center";
	this.max_txt.lineHeight = 22;
	this.max_txt.lineWidth = 46;
	this.max_txt.setTransform(68.3,79.5);

	this.text_1 = new cjs.Text("HIGH\nSCORE:", "15px 'Brady Bunch Remastered'", "#FFFFFF");
	this.text_1.lineHeight = 10;
	this.text_1.lineWidth = 36;
	this.text_1.setTransform(5,76.6);

	this.pontos_txt = new cjs.Text("0", "60px 'Brady Bunch Remastered'", "#FFFFFF");
	this.pontos_txt.name = "pontos_txt";
	this.pontos_txt.textAlign = "center";
	this.pontos_txt.lineHeight = 62;
	this.pontos_txt.lineWidth = 106;
	this.pontos_txt.setTransform(125,2.6);

	this.text_2 = new cjs.Text("PONTOS:", "22px 'Brady Bunch Remastered'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 77;
	this.text_2.setTransform(38.7,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,204,0.749)").s().rc(-110,-32,220,64,0,10,10,0);
	this.shape.setTransform(74,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(153,0,0,0.749)").s().rc(-60.2,-17.5,120.4,35,0,10,10,0);
	this.shape_1.setTransform(38.2,93.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_2},{t:this.pontos_txt},{t:this.text_1},{t:this.max_txt}]}).wait(21));

	// hitter
	this.hitter = new lib.hitter();
	this.hitter.setTransform(480,435);
	this.hitter.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.hitter).wait(21));

	// pause button
	this.pause = new lib.btpause();
	this.pause.setTransform(737.3,47.3,1.546,1.535,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.pause).wait(21));

	// touchButton
	this.right = new lib.touchButton();
	this.right.setTransform(1010,600);
	this.right.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.right).wait(16).to({x:910,y:500},4,cjs.Ease.get(1)).wait(1));

	// touchButton
	this.left = new lib.touchButton();
	this.left.setTransform(-50,600);
	this.left.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.left).wait(16).to({x:50,y:500},4,cjs.Ease.get(1)).wait(1));

	// balde
	this.balde = new lib.wooden_bucket();
	this.balde.setTransform(-163.9,480);

	this.timeline.addTween(cjs.Tween.get(this.balde).to({x:500},14,cjs.Ease.get(1)).to({x:480},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227.9,-49,2179.5,718);


(lib.mc_audioComponent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var music = playSound("music", 1000);
		music.setVolume(0.5);
		
		var context = this;
		var musica = this.musica;
		var sons = this.sons;
		
		function musicaHandler(event)
		{
			musica.cont++;
			if (musica.cont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (musica.currentFrame == 0) 
			{
				musica.gotoAndStop(1);
				music.setVolume(0.0);
			}
			else 
			{
				musica.gotoAndStop(0);
				music.setVolume(0.5);
			}
		}
		
		function sonsHandler(event)
		{
			sons.cont++;
			if (sons.cont % 2 == 0 && createjs.Touch.isSupported())
				return;
			
			if (sons.currentFrame == 0)
			{
				context.parent.enableSounds = false;
				sons.gotoAndStop(1);
			}
			else
			{
				context.parent.enableSounds = true;
				sons.gotoAndStop(0);
			}
		}
		
		musica.on("click", musicaHandler);
		musica.cont = 0;
		sons.on("click", sonsHandler);
		sons.cont = 0;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botao
	this.musica = new lib.btmusic();
	this.musica.setTransform(-39.3,0.2,1,0.998,0,0,0,0,0.2);

	this.sons = new lib.btsound();
	this.sons.setTransform(0.2,0.2,1,0.998,0,0,0,0,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.sons},{t:this.musica}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-32.3,71.8,49.8);


// stage content:



(lib.model = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{instrucoes:25,game:60});

	// timeline functions:
	this.frame_0 = function() {
		this.name = "cinematica";
		var context = this;
		
		this.enableSounds = true;
		
		// Declaração dos objetos
		var btjogar = this.btjogar;
		btjogar.clickCont = 0;
		
		var btcontinuar = this.btcontinuar;
		btcontinuar.clickCont = 0;
		
		var fullscreenSwitch = this.fullscreenSwitch;
		fullscreenSwitch.clickCont = 0;
		
		var bg = this.bg;
		
		this.jogarHandler = function(event)
		{
			btjogar.clickCont++;
			
			if (createjs.Touch.isSupported() && btjogar.clickCont % 2 == 0)
				return;
			
			btjogar.gotoAndPlay("s1");
			context.gotoAndPlay("instrucoes");
			
			if (context.enableSounds)
				playSound("click");
		}
		
		this.gotoGame = function(event)
		{
			btcontinuar.clickCont++;
			
			if (createjs.Touch.isSupported() && btcontinuar.clickCont % 2 == 0)
				return;
			
			btcontinuar.gotoAndPlay("s1");
			context.gotoAndPlay("game");
			
			if (context.enableSounds)
				playSound("click");
		}
		
		this.fullscreenHandler = function(event) 
		{
			fullscreenSwitch.clickCont++;
			
			if (createjs.Touch.isSupported() && fullscreenSwitch.clickCont % 2 == 0)
				return;
			
			toggleFullScreen();
		};
		
		this.reinicia = function()
		{
			context.gotoAndPlay(0);
		}
		
		function toggleFullScreen() 
		{
			if (!document.fullscreenElement &&    // alternative standard method
				!document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
				
				fullscreenSwitch.gotoAndStop(1);
				
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				} else if (document.msExitFullscreen) {
					document.msExitFullscreen();
				} else if (document.mozCancelFullScreen) {
					document.mozCancelFullScreen();
				} else if (document.webkitExitFullscreen) {
					document.webkitExitFullscreen();
				}
				
				fullscreenSwitch.gotoAndStop(0);
			}
			
			window.scrollTo(0, 1);
			window.pageYOffset = 0;
		}
		
		createjs.Touch.enable(stage, true, true);
		
		//inicializa();
		btjogar.addEventListener("click", this.jogarHandler);
		btjogar.cursor = "pointer";
		
		btcontinuar.addEventListener("click", this.gotoGame);
		btcontinuar.cursor = "pointer";
		
		fullscreenSwitch.addEventListener("click", this.fullscreenHandler);
		
		var keepAspectRatio = true;
		
		window.onresize = function()
		{
			onResize();
		}
		
		function onResize()
		{
			// browser viewport size
			var w = window.innerWidth;
			var h = window.innerHeight;
			
			// stage dimensions
			var ow = 960; // your stage width
			var oh = 550; // your stage height
			
			if ((fullscreenSwitch.currentFrame == 1) && (window.innerWidth > window.innerHeight))
				keepAspectRatio = false;
			else 
				keepAspectRatio = true;
			
			if (keepAspectRatio)
			{
				// keep aspect ratio
				var scale = Math.min(w / ow, h / oh);
				stage.scaleX = scale;
				stage.scaleY = scale;
				
				// adjust canvas size
				stage.canvas.width = ow * scale;
				stage.canvas.height = oh * scale;
			}
			else
			{
				// scale to exact fit
				stage.scaleX = w / ow;
				stage.scaleY = h / oh;
				
				// adjust canvas size
				stage.canvas.width = ow * stage.scaleX;
				stage.canvas.height = oh * stage.scaleY;
			}
			
			bg.cache(0, 0, stage.canvas.width / stage.scaleX, stage.canvas.height / stage.scaleY);
			
			// update the stage
			stage.update();
		}
		
		onResize();
	}
	this.frame_24 = function() {
		this.stop();
		
		var instrucoes = this.instrucoes;
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_89 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(35).call(this.frame_59).wait(30).call(this.frame_89).wait(1));

	// fullscreen
	this.fullscreenSwitch = new lib.fullscreenButton();
	this.fullscreenSwitch.setTransform(799.5,46.8,1.547,1.546);

	this.timeline.addTween(cjs.Tween.get(this.fullscreenSwitch).wait(90));

	// music
	this.audioComponent = new lib.mc_audioComponent();
	this.audioComponent.setTransform(921,46.9,1.547,1.538,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.audioComponent).wait(90));

	// game
	this.instance = new lib.Game();
	this.instance.setTransform(453,250.5,1,1,0,0,0,453,250.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).wait(30));

	// bg
	this.instance_1 = new lib.gr_instrucoes("synched",0);
	this.instance_1.setTransform(1450,229.2,1,1,0,0,0,480,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({x:480},14,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({x:-490},7,cjs.Ease.get(-1)).to({_off:true},1).wait(23));

	// continuar
	this.btcontinuar = new lib.btcontinuar();
	this.btcontinuar.setTransform(-180,410.5);

	this.timeline.addTween(cjs.Tween.get(this.btcontinuar).wait(48).to({x:500},9,cjs.Ease.get(1)).to({x:480},2).to({x:460},1).to({x:1180},6,cjs.Ease.get(-1)).to({_off:true},1).wait(23));

	// title
	this.instance_2 = new lib.title();
	this.instance_2.setTransform(480,-164.3);
	this.instance_2._off = true;
	this.instance_2.cache(-209,-104,421,205);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:1.25,scaleY:1.25,y:199.7},8,cjs.Ease.get(1)).to({y:179.7},2).to({y:199.7},1).to({scaleX:1,scaleY:1,y:-164.3},6).to({_off:true},1).wait(58));

	// bt iniciar
	this.btjogar = new lib.btjogar();
	this.btjogar.setTransform(-235,410.5);

	this.timeline.addTween(cjs.Tween.get(this.btjogar).wait(9).to({x:500},10,cjs.Ease.get(1)).to({x:480},2).wait(7).to({x:460},1).to({x:1233.9},5,cjs.Ease.get(-1)).to({_off:true},1).wait(55));

	// bg
	this.bg = new lib.background();
	this.bg.cache(-2,-52,964,604);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(170,225,1270,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;