// OBJETO LEVEL
var Level = function(incLevel)
{
	if (incLevel == undefined)
		incLevel = true;
	// construtor principal
	var o = new createjs.Container

	Common.atualPoints = 0;

	// atualiza o level atual
	if (incLevel)
		Common.currentLevel++;

	if (Common.currentLevel > 1)
		playSound("fase" +  Common.currentLevel);

	var images = Common.getLevelImages(Common.currentLevel);
	var level = getLevel();

	var levelCounter = new lib.LevelCounter();
	var levelPoints = new lib.LevelPoints();
	var levelTimer = new lib.LevelTimer();

	Common.clearInterval();
	// ao declarar o timer o tempo passa a afetar a duração da partida
	var timer = new Timer(levelTimer, Common.times[Common.currentLevel - 1]);
	
	levelCounter.txt.text = Common.currentLevel + "/7";
	levelTimer.txt.text = Common.times[Common.currentLevel - 1] + "s";
	levelPoints.txt.text = Common.points + " pts";
	// levelPoints.total.text = "Total " + Common.points + " pts";

	var dragged;
	var peca;
	var interval = 0;
	var alvos;

	var errados = [];

	o.addChild(level, levelPoints, levelCounter, levelTimer);

	// método de atualização
	o.update = function(event)
	{
		levelTimer.set({x:window.innerWidth - 40 * scale, y: middleY + 75 * scale, scaleX:scale, scaleY:scale});
		levelPoints.set({x:window.innerWidth - 40 * scale, y: middleY - 75 * scale, scaleX:scale, scaleY:scale});
		levelCounter.set({x:window.innerWidth - 40 * scale, y: middleY, scaleX:scale, scaleY:scale});

		level.set({x:middleX, y:middleY, scaleX:scale, scaleY:scale});
	}
	// método que retorna o level de acordo com o índice do level atual
	function getLevel()
	{
		switch(Common.currentLevel)
		{
			case 1:
				return new lib.Level1();
				break;
			case 2:
				return new lib.Level2();
				break;
			case 3:
				return new lib.Level3();
				break;
			case 4:
				return new lib.Level4();
				break;
			case 5:
				return new lib.Level5();
				break;
			case 6:
				return new lib.Level6();
				break;
			case 7:
				return new lib.Level7();
				break;
		}
	}
	// dá nome aos alvos
	level.giveNames = function(str, num)
	{
		for (var i = 0; i < str.length; i++)
		{
			for (var j = 1; j <= num[i]; j++)
				level[str[i] + j].name = str[i].toUpperCase();
		}
	}
	// duplica a peça de acordo com aquela pressionada no teclado
	level.clonePeca = function(p, point)
	{
		var peca = new lib.Peca();
		peca.name = "peca";
		peca.mouseChildren = false;
		//peca.setLetra(p.str, p.index);
		peca.letra.text = p.str;
		peca.index 		= p.index;
		peca.str 		= p.str;
		peca.set({x:point.x, y:point.y});
		level.addChild(peca);

		peca.on("dblclick", removePeca);
		level.on("pressup", drop);
		interval = setInterval(movePeca, 10, peca)

		dragged = peca;
	}
	// evento responsável por remover a peça quando ela já foi posicionada com um duplo clique
	function removePeca(event)
	{
		var peca = event.currentTarget;
		if (peca.alvo) 
		{
			peca.alvo.filled = false;
			peca.alvo.same = false;
			peca.alvo.peca = null;
			peca.alvo = null;
		}
		level.removeChild(peca);
		Common.atualPoints -= 10;
		console.log("remove peca " + Common.atualPoints);
		updatePontos();
	}
	// evento responsável por mover a peça de acordo com a posição do mouse
	function movePeca(peca)
	{
		var point = level.globalToLocal(level.stage.mouseX, level.stage.mouseY);
		
		dragged.x = point.x;
		dragged.y = point.y;
	}
	// evento disparado quando o mouse é solto no objeto level
	function drop(event)
	{
		// limpa o interval
		clearInterval(interval);
		var dropped = false;

		for (var i = 0; i < alvos.length; i++)
		{
			var alvo = alvos[i];
			if (alvo)
			{
				var point = alvo.globalToLocal(stage.mouseX, stage.mouseY);

				if (!alvo.filled && alvo.hitTest(point.x, point.y))
				{
					dragged.x = alvo.x;
					dragged.y = alvo.y;
					dragged.alvo = alvo;
					alvo.peca = dragged;
					alvo.filled = true;
					alvo.same = alvo.name == dragged.letra.text;
					
					Common.atualPoints += 10;

					dropped = true;
					break;
				}
			}
		}
		// se não consegui dropar a peça então ela é removida
		if (!dropped)
			level.removeChild(dragged);

		// verifica a quantidade de peças soltas
		if (dropped && countFilled() === alvos.length)
		{
			var count = countCombinations();
			if (countCombinations() === alvos.length)
			{
				Common.running = false;
				Common.points += Common.atualPoints;
				Common.points += Common.currentTime + 1;

				if (Common.currentLevel >= 7)
				{
					finalizacao = new Finalizacao();
					game.addChild(finalizacao);

					playLateSound("right", "finalizacao", 1000);
				}
				else
				{
					sucesso = new Sucesso();
					game.addChild(sucesso);

					playLateSound("right", "sucesso", 1000);
				}
			}
			else
			{
				game.gameOver(false);
				playLateSound("wrong", "gameoverletras", 1000);
			}
		}

		updatePontos();
		// remove os eventos do objeto level
		level.removeAllEventListeners();
	}
	// método que remove as peças erradas
	o.removeErradas = function()
	{
		for (var i = 0; i < alvos.length; i++)
		{
			if (alvos[i] && !alvos[i].same)
			{
				alvos[i].filled = false;
				alvos[i].same = false;
				level.removeChild(alvos[i].peca);
				alvos[i].peca = null;
				Common.atualPoints -= 10;
			}
		}

		updatePontos();
		Common.running = true;
	}
	// método responsável por limpar todos os alvos removendo as peças para que o usuário possa reiniciar
	o.clear = function()
	{
		for (var i = 0; i < alvos.length; i++)
		{
			if (alvos[i] && alvos[i].filled)
			{
				alvos[i].filled = false;
				alvos[i].same = false;
				level.removeChild(alvos[i].peca);
				alvos[i].peca = null;
			}
		}

		Common.atualPoints = 0;

		updatePontos();
		Common.running = true;
	}
	// atualiza os pontos
	function updatePontos()
	{
		levelPoints.txt.text = (Common.points + Common.atualPoints) + " pts";
		// levelPoints.total.text = "Total " +  Common.points + " pts";
	}
	// conta quantas das letras foram posicionadas corretamente
	function countCombinations()
	{
		var count = 0;
		for (var i = 0; i < alvos.length; i++)
		{
			if (alvos[i] && alvos[i].same)
				count++;
		}
		return count;
	}
	// método responsável por contar todos os alvos que foram preenchidos
	function countFilled()
	{
		var count = 0;
		for (var i = 0; i < alvos.length; i++)
		{
			if (alvos[i] && alvos[i].filled)
				count++;
		}

		return count;
	}
	// método responsável por listar todos os alvos no array com o mesmo nome
	function getAlvos()
	{
		alvos = [];
		var cont = 0;
		for (var i = 0; i < level.children.length; i++)
		{
			if (level.children[i].type == "alvo")
			{
				alvos[cont++] = level.children[i];
			}
		}
	}
	// timeout necessário para inicializar objetos que foram encapsulados pelo Flash
	setTimeout(function () { level.inicializa(images); getAlvos(); }, 10);

	return o;
}