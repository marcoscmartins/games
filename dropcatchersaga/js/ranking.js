class Ranking extends Phaser.GameObjects.Container
{
    constructor (scene, x, y, children) 
    {
        super(scene, x, y, children);
        scene.add.existing(this)
        this.scope = 'geral'
        // this.users = main.scoreManager.users
        // this.scores = main.scoreManager.scores
        // this.keys = main.scoreManager.keys
        
        this.badges = [];
        this.lines = [];
        this.points = [];
        this.names = [];
        this.positions = [];
        this.numbg = [];
    }
    // Método que constrola a criação dos componentes do ranking
    init()
    {
        // console.clear();
        this.createShadow()
        this.title = this.createTitle()
        this.createStructure()
        this.createButtons()

        let ok = this.scene.add.sprite(main.width * 0.5, main.height * 0.85, 'gui', 'gui/ok.png')
        .setInteractive()
        .on('pointerdown', () => this.close())

        this.container = this.scene.add.container(main.width, 0);
        this.container.add([ok, this.title, this.linesContainer/*, this.positionsContainer, this.pointsContainer, this.namesContainer*/]);
        this.container.add([this.geralon, this.geraloff, this.pessoalon, this.pessoaloff]);

        this.scene.tweens.add({
            targets: [this.container],
            x: 0,
            ease: 'Sine.easeOut',
            duration: 250
        });

        this.fillRanking()
    }
    // Muda o escopo de geral para pessoal e vice-e-versa
    changeScope()
    {
        main.playSound('click')
        this.scope = this.scope == 'geral' ? 'pessoal' : 'geral'
        let isGeral = this.scope == 'geral'
        this.geralon.visible = isGeral
        this.geraloff.visible = !isGeral
        this.pessoalon.visible = !isGeral
        this.pessoaloff.visible = isGeral
        
        this.users = [];
        this.scores = [];
        this.keys = [];
        // this.users = isGeral ? main.scoreManager.users : main.scoreManager.nearestUsers;
        // this.scores = isGeral ? main.scoreManager.scores : main.scoreManager.nearestScores;
        // this.keys = isGeral ? main.scoreManager.keys : main.scoreManager.nearestKeys;

        // console.log(this.users)

        this.fillRanking();
    }
    enableStructures(i, boo)
    {
        this.names[i].visible = boo;
        this.points[i].visible = boo;
        this.badges[i].visible = boo;
        this.lines[i].visible = boo;
        this.positions[i].visible = boo;
        this.numbg[i].visible = boo;
    }
    // Gerencia a iteração entre os componentes dos containers
    fillRanking()
    {
        let count = 5; //this.users.length < 5 ? this.users.length : 5;

        this.linesShape.height = count * 50

        for (let i = 0; i < this.names.length; i++)
            this.enableStructures(i, false)

        for (let i = 0; i < count; i++)
        {
            this.enableStructures(i, true)

            this.names[i].text = ['0', '0', '0', '0', '0']; // this.users[i].name;
            this.points[i].text = ['0', '0', '0', '0', '0']; //this.scores[i].score;
            
            let key = ['0', '0', '0', '0', '0']; // this.keys[i]
            this.positions[i].text = key
            this.badges[i].setTexture('gui', key == 1 ? 'gui/gold.png' : key == 2 ? 'gui/silver.png' : key == 3 ? 'gui/bronze.png' : 'gui/coin.png');

            // if (this.users[i].name === main.scoreManager.user.name)
            // {
            //     this.lines[i].setFillStyle(0xFFC045, 1)
            //     this.names[i].setFill('#2E3D48');
            //     this.points[i].setFill('#2E3D48');
            // }
            // else
            // {
                this.lines[i].setFillStyle(this.getDefaultColor(i), 1)
                this.names[i].setFill('#FFFFFF');
                this.points[i].setFill('#FFFFFF');
            // }
        }
    }
    // Cria e anima a sombra
    createShadow()
    {
        this.shape = this.scene.add.rectangle(main.width * 0.5, main.height * 0.5, main.width, main.height, 0x000000);
        this.shape.alpha = 0.0;
        
        this.scene.tweens.add({
            targets: [this.shape],
            alpha: 0.7,
            ease: 'Sine.easeOut',
            duration: 250
        });
    }
    // Cria o título do quadro
    createTitle()
    {
        let title = this.scene.make.text({
            x: main.width * 0.5,
            y: main.height * 0.15,
            text: 'RANKING',
            style: {
                font: '50px Fredoka One',
                fill: '#ffffff'
            }
        });
        title.setOrigin(0.5, 1.0);
        return title;
    }
    // Cria os botões que alternam as informações do quadro
    createButtons()
    {
        this.geralon = this.scene.add.sprite(main.width * 0.15, main.height * 0.25, 'gui', 'gui/geralon.png')
        this.pessoalon = this.scene.add.sprite(main.width * 0.325, main.height * 0.25, 'gui', 'gui/pessoalon.png')
        
        this.geraloff = this.scene.add.sprite(main.width * 0.15, main.height * 0.25, 'gui', 'gui/geraloff.png')
        .setInteractive()
        .on('pointerdown', () => this.changeScope());
        this.pessoaloff = this.scene.add.sprite(main.width * 0.325, main.height * 0.25, 'gui', 'gui/pessoaloff.png')
        .setInteractive()
        .on('pointerdown', () => this.changeScope());

        // this.pessoaloff.visible = !main.scoreManager.nearestScores.length == 0;

        this.geraloff.visible = false
        this.pessoalon.visible = false
    }
    // Cria a estrutura onde as informações serão posicionadas
    createStructure()
    {
        let count = 5; //this.users.length < 5 ? this.users.length : 5;
        this.linesContainer = this.scene.add.container(0, 0);
        
        for (let i = 0; i < count; i++)
            this.createLine(i)

        let posX = (main.width * 0.5) - (main.width * 0.85) * 0.5;
        let posY = main.height * 0.35 - 25;
        this.linesShape = this.scene.add.rectangle(posX, posY, 60, 50 * count, 0x96B856);
        this.linesShape.setOrigin(0, 0);
        this.linesShape.alpha = 0.6;
        this.linesContainer.add(this.linesShape);
        
        for (let i = 0; i < count; i++)
            this.createPositions(i)
    }
    getDefaultColor(i)
    {
        return i % 2 == 0 ? 0x567649 : 0x768A5B
    }
    // Cria uma linha dentro da estrutura
    createLine(i)
    {
        let color = this.getDefaultColor(i)
        let posX = main.width * 0.5;
        let posY = main.height * 0.35 + (50 * i);
        let shape = this.scene.add.rectangle(posX, posY, main.width * 0.85, 50, color)

        let nome = this.scene.make.text({
            x: shape.x - shape.width * 0.5,
            y: posY,
            text: '', 
            padding: {
                left:150
            },
            style: {
                font: '25px Fredoka One',
                fill: '#ffffff',
                align: 'left'
            },
            origin: {x : 0, y : 0.5}
        });
        let pontos = this.scene.make.text({
            x: shape.width + 50,
            y: posY,
            text: '', 
            style: {
                font: '25px Fredoka One',
                fill: '#ffffff',
                align: 'right'
            },
            origin: {x : 1, y : 0.5}
        });

        let badge;
        if (i < 3)
            badge = this.scene.add.sprite(nome.x + 100, posY, 'gui', i == 0 ? 'gui/gold.png' : i == 1 ? 'gui/silver.png' : 'gui/bronze.png')
        else
            badge = this.scene.add.sprite(nome.x + 100, posY, 'gui', 'gui/coin.png')

        this.badges.push(badge);
        this.names.push(nome);
        this.points.push(pontos);
        this.lines.push(shape);
        
        this.linesContainer.add([shape, badge, pontos, nome])
    }
    // Método responsável por criar as posições nas linhas 
    createPositions(i)
    {
        let posX = main.width * 0.5 - this.linesContainer.first.width * 0.5 + 30;
        let posY = main.height * 0.35 + (50 * i);
        let numbg = this.scene.add.sprite(posX, posY, 'gui', 'gui/position.png')
        let num = this.scene.make.text({
            x: numbg.x,
            y: numbg.y,
            text: '',
            style: {
                font: '25px Fredoka One',
                fill: '#ffffff',
            },
            origin: 0.5
        });
        
        this.linesContainer.add([numbg, num])

        this.numbg.push(numbg);
        this.positions.push(num);
    }
    // Destroy o objeto ranking para voltar às telas do jogo
    close()
    {
        main.playSound('click')
        main.hasModal = false;
        this.shape.destroy(true);
        this.linesContainer.destroy(true);
        this.container.destroy(true);
        this.destroy(true);
    }
}