class Menu extends Phaser.GameObjects.GameObject
{
    // construtor do componente. Recebe referências da cena e das posições x e y
    constructor(scene, x, y)
    {
        super(scene, 'menu');
        scene.add.existing(this);

        this.active = false;
        this.buttons = null;
        // define o tipo de menu: opening e game. Isso permite estabelecer quais botões irão compor o menu.
        this.menuType = 'opening';
        
        this.create();
    }
    create()
    {
        // cria o grupo de buttons
        this.createButtons(50, 50);

        this.settings = this.scene.add.sprite(50, 50, 'gui', 'gui/settings.png').setInteractive( { useHandCursor : true } );
        this.settings.on('pointerdown', this.toggleMenu, this);
    }
    // método responsável por criar os botões do menu
    createButtons(px, py)
    {
        this.buttons = this.scene.add.container(0,0);

        let home = this.scene.add.sprite(px, py, 'gui', 'gui/home.png')                     // sprite para o botão home
        .setInteractive( { useHandCursor : true } );
        home.on('pointerdown', this.goHome, this);

        let informations = this.scene.add.sprite(px, py, 'gui', 'gui/informations.png')     // sprite para o botão informations
        .setInteractive( { useHandCursor : true } );
        informations.on('pointerdown', this.showInformations, this);
        
        let instructions = this.scene.add.sprite(px, py, 'gui', 'gui/instructions.png')     // sprite para o botão instructions
        .setInteractive( { useHandCursor : true } );
        instructions.on('pointerdown', this.showInstructions, this);
        
        this.full = this.scene.add.sprite(px, py, 'gui', 'gui/fulloff.png')           // sprite para o botão fullscreen off
        .setInteractive( { useHandCursor : true } );
        this.full.on('pointerdown', this.toggleFullscreen, this);

        this.midia = this.scene.add.sprite(px, py, 'gui', 'gui/midiaon.png')                // sprite para o botão midiaon
        .setInteractive( { useHandCursor : true } );
        this.midia.on('pointerdown', this.toggleSounds, this);

        let ranking = this.scene.add.sprite(px, py, 'gui', 'gui/ranking.png')                // sprite para o botão midiaon
        .setInteractive( { useHandCursor : true } );
        ranking.on('pointerdown', this.showRanking, this);

        if (this.menuType == 'opening')
            this.buttons.add([informations, ranking, this.midia, this.full]);
        else
            this.buttons.add([home, instructions, ranking, this.midia, this.full]);
        // this.buttons.add([home, ranking, informations, instructions, this.midia, this.full]);
    }
    // move os buttons de acordo com o type, que pode ser in ou out
    moveButtons(type)
    {
        let increment = type === 'in' ? 85 : 0;
        let py = 0;
        // varre os filhos do container, que são buttons, para movê-los
        this.buttons.each((child, x, y) => {
            py += increment;
            this.scene.tweens.add({
                targets : child,
                y : this.settings.y + py,
                duration : 500,
                ease : 'Cubic'
            });
        });
    }
    // alterna entre apresentar e esconder as opções do menu
    toggleMenu(wait)
    {
        if (wait === true)
        {
            this.scene.time.addEvent ({
                delay : 250,
                callback : () => {
                    this.active = !this.active,
                    this.moveButtons(this.active ? 'in' : 'out');
                },
                loop : false
            });
        }
        else
        {
            this.active = !this.active,
            this.moveButtons(this.active ? 'in' : 'out');
        }
    }

    // EVENT HANDLERS

    goHome()
    {
        // chama o método que leva o game para a tela inicial
        this.toggleMenu(true);
    }
    showInformations()
    {
        // chama o método que cria a tela de informações
        this.toggleMenu();
    }
    showInstructions()
    {
        // chama o método que cria a tela de instruções
        this.toggleMenu();
    }
    toggleSounds()
    {
        // chama o método que alterna a reprodução dos sons
        this.midia.frame.name === 'gui/menu_midiaon.png' ?
            this.midia.setTexture('gui', 'gui/midiaoff.png') :
            this.midia.setTexture('gui', 'gui/midiaon.png');
        this.toggleMenu(true);
    }
    toggleFullscreen()
    {
        // chama o método que alterna a disposição da tela
        this.full.frame.name === 'gui/fulloff.png' ?
            this.full.setTexture('gui', 'gui/fullon.png') :
            this.full.setTexture('gui', 'gui/fulloff.png');
        this.toggleMenu(true);
    }
    showRanking()
    {
        // chama o método que cria a tela de instruções
        this.toggleMenu();
    }
}