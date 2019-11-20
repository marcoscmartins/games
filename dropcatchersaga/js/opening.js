class Opening extends Phaser.Scene 
{
    constructor()
    {
        super('opening');
    }
    create()
    {
        let menu = new Menu(this, 50, 50);

        // o modo do tween do botão play. Pode ser: scale, horizontal ou vertical
        let tweenType = 'scale';
        let tweenTime = 1000;          

        // BOTÃO PLAY
        let play = this.add.sprite(main.width * 0.5, main.height * 0.5 + 75, 'gui', 'gui/opening_play.png')
        .setInteractive( { useHandCursor : true } );
        play.on('pointerdown', this.playGame, this);

        if (tweenType == 'vertical')
            this.tweens.add({ targets : play, y : play.y + 15, duration : tweenTime, yoyo : true, ease : 'Sine.easeInOut', loop : -1 });
        else if (tweenType == 'scale')
            this.tweens.add({ targets : play, scaleX : 1.1, scaleY : 1.1, duration : tweenTime, yoyo : true, ease : 'Sine.easeInOut', loop : -1 });
        else if (tweenType == 'horizontal')
        {
            play.x = play.x - 15;
            this.tweens.add({ targets : play, x : play.x + 15, duration : tweenTime, yoyo : true, ease : 'Sine.easeInOut', loop : -1 });
        }

        // TITULO
        let titulo = this.add.sprite(main.width * 0.5, -200, 'gui', 'gui/opening_title.png');
        this.tweens.add({ targets : titulo, y : main.height * 0.3, duration : 500, ease : 'Quart.easeOut', loop : 0 });

        this.createInfoBar();

        // let ranking = new Ranking(this, 0, 0);
        // ranking.init();
        // ranking.parentContainer = this;
    }
    createInfoBar()
    {
        let barra = this.add.graphics();
        barra.fillStyle(0x000000, 0.7);
        barra.fillRoundedRect(10, -40, main.width - 20, 80, { tl: 18, tr: 18, bl: 0, br: 0 });

        let indicacao = this.add.sprite(main.width * 0.35, 0, 'gui', 'gui/opening_indicacao.png');
        let concentracao = this.add.sprite(main.width * 0.65, 0, 'gui', 'gui/opening_concentracao.png');

        let container = this.add.container(0, main.height);
        container.add([barra, indicacao, concentracao]);

        this.tweens.add({
            targets: [container],
            y: main.height - 45,
            ease: 'Sine.easeOut',
            duration: 250,
            repeat: 0,
            yoyo: false
        });
    }
    playGame()
    {
        this.scene.start('game');
    }
}