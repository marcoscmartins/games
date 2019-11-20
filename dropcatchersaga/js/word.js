class Word extends Phaser.GameObjects.Container
{
    constructor(scene, str)
    {
        super(scene);
        scene.add.existing(this);

        this.createWord(str);
        // this.createImage();
    }
    // método responsável por criar o label juntamente com o fundo e o marcador
    createWord(str)
    {
        this.background = this.scene.add.graphics();
        this.background.fillStyle(0xFCECC9, 1);
        this.background.fillRect(0, 0, 200, 28);

        this.green = this.scene.add.graphics();
        this.green.fillStyle(0x88D498, 1);
        this.green.fillRect(0, 0, 200, 28);

        this.label = this.scene.make.text({
            text: str,
            x : 100, 
            y : 15, 
            style: {
                font: '20px Itim',
                fill: '#140F2D'
            }
        });
        this.label.setOrigin(0.5, 0.5);
        this.green.visible = false;

        this.add([this.background, this.green, this.label]);
    }    
    // marca como resposta correta
    mark() 
    { 
        this.green.visible = true; 
    }

    // método responsável por esconder as cores
    clear() 
    { 
        this.green.visible = false;
    }
}