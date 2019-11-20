class Game extends Phaser.Scene 
{
    constructor()
    {
        super('game');
        this.currentLevel = 1;                      // define a fase atual
        this.canMove = false;                       // define se as letras serão selecionadas ou não enquanto o mouse é movimentado
        this.selecteds = [];                        // armazena as letras selecionadas a cada interação do usuário
        this.randomOrder = main.createArray(9);     // cria um array com 9 posições
        main.shuffle(this.randomOrder);             // mistura o array
    }
    create()
    {
        // cria estruturas como fase, tempo, pontuação, entre outros
        this.createGameGUI();

        main.data = this.cache.json.get('data');

        this.nextLevel();
    }

    nextLevel() 
    {
        
        // configurações do quadro de letras
        let boardConfig = {
            cols : 20,
            rows : 16,
            width : 20 * 30,
            height : 16 * 30,
            marginRight : 25,
            namesWidth : 250,
            namesHeight : 30
        }

        // tamanho do quadro com margin
        let boardWidth = boardConfig.width + boardConfig.marginRight;
        // posição inicial para a construção do board
        let initialPos = (main.width - (boardWidth + boardConfig.namesWidth)) / 2;
        // posição inicial do quadro com os nomes
        let namesPos = initialPos + boardWidth;
        
        // Pegando as informações do JSON
        let letters = main.data.letters;
        let words = main.data.words;
        let dimins = main.data.diminutive;

        // criando o quadro de letras
        for (let i = 0; i < boardConfig.cols; i++) 
        {
            main.shuffle(letters);

            for (let j = 0; j < boardConfig.rows; j++) 
            {
                let letter = new Letter(this, letters[j]);
                letter.setPosition(initialPos + 30 * (i + 1), 30 * (j + 1) + 60);
                letter.setInteractive( new Phaser.Geom.Circle(0, 0, 15), Phaser.Geom.Circle.Contains);
                letter.on('pointerdown', () => {
                    this.selecteds = [];
                    this.select(letter);
                    this.canMove = true;
                }, this);

                letter.on('pointerover', () => {
                    if (this.canMove) this.select(letter);
                }, this);
            }
        }

        let currentWords = words['level' + this.randomOrder[this.currentLevel]];
        let currentDimins = dimins['level' + this.randomOrder[this.currentLevel]];

        this.wordsContainer = this.add.container();
        // criando as palavras
        for (let i = 0; i < 9; i++)
        {
            let word = new Word(this, currentWords[i]);
            word.setPosition(namesPos, 30 * (i + 1) + 45);
            this.wordsContainer.add(word);
        }

        // criando a imagem
        this.images = new ImageContainer(this, namesPos, 30 * 10 + 50);
        this.images.changeTexture('opening_play.png');
        
        this.input.on('pointerup', () => {
            this.canMove = false;
            
            // compara o conteúdo do array selecteds
            this.compareWords(currentDimins, currentWords);
        });
        this.input.on('pointermove', this.move, this);

        // insere as sequências de letras que formam as palavras em questão
        this.insertRightSequences(currentDimins);

        // let ranking = new Ranking(this);
        // ranking.init();
    }
    // Evento disparado quando o mouse se movimenta após ter sido pressionado sobre uma letra
    move(pointer)
    {
        if(!this.canMove) return;
    }
    // Método responsável por marcar as letras pelas quais o mouse passou pressionado
    select(letter)
    {
        letter.select();
        this.selecteds.push(letter);
    }
    // Método responsável pela inserção das letras que formam as palavras corretas
    insertRightSequences(dimins)
    {

    }
    
    // Método responsável pela comparação entre as letras selecionadas e a palavra no diminutivo extraída do JSON
    compareWords(dimins, words)
    {
        let str = '';
        this.selecteds.map((s) => { 
            str += s.getText(); 
        });
        
        // índice da palavra no array
        let index = dimins.indexOf(str);

        if (index != -1)
        {
            let word = words[index];
            this.wordsContainer.each((w) => {
                if (w.label.text === word)
                    w.mark();
            });
        }
        else
        {
            this.resetLetters();
            // console.log(`não existe ${index}`);
        }
        
    }
    resetLetters()
    {
        for (let letter of this.selecteds)
            letter.clear();
    }
    // Método responsável pela criação das estruturas de informação do game, como pontuação, tempo, level, etc
    createGameGUI()
    {
        // container para os text
        let guiContainer = this.add.container(0,0);

        this.levelLabel = this.make.text({
            text:'fase',
            x : main.width * 0.8, 
            y : 15,
            style: {
                font: '15px monospace',
                fill: '#FAFAFA'
            }
        });
        this.level = this.make.text({
            text: '01/12',
            x : main.width * 0.8, 
            y : 40, 
            style: {
                font: '20px monospace',
                fill: '#FAFAFA'
            }
        });
        this.pointsLabel = this.make.text({
            text:'pontuação',
            x : main.width * 0.6, 
            y : 15,
            style: {
                font: '15px monospace',
                fill: '#FAFAFA'
            }
        });
        this.points = this.make.text({
            text: '00000',
            x : main.width * 0.6, 
            y : 40, 
            style: {
                font: '20px monospace',
                fill: '#FAFAFA'
            }
        });
        this.timerLabel = this.make.text({
            text:'tempo',
            x : main.width * 0.4, 
            y : 15,
            style: {
                font: '15px monospace',
                fill: '#FAFAFA'
            }
        });
        this.timer = this.make.text({
            text: '00:59',
            x : main.width * 0.4, 
            y : 40, 
            style: {
                font: '20px monospace',
                fill: '#FAFAFA'
            }
        });
        
        guiContainer.add([this.level, this.levelLabel, this.points, this.pointsLabel, this.timer, this.timerLabel]);

        guiContainer.each((text) => {
            text.setOrigin(0.5);
        });
    }
}