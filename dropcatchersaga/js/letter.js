class Letter extends Phaser.GameObjects.Container
{
    constructor(scene, str)
    {
        super(scene);
        scene.add.existing(this);

        this.createLetter(str);
    }

    createLetter(str)
    {
        this.background = this.scene.add.graphics();
        this.background.fillStyle(0xFCECC9, 1);
        this.background.fillRoundedRect(-15, -15, 30, 30, 0);

        this.blue = this.scene.add.graphics();
        this.blue.fillStyle(0x5296A5, 0.7);
        this.blue.fillRoundedRect(-15, -15, 30, 30, 5);

        this.green = this.scene.add.graphics();
        this.green.fillStyle(0x88D498, 0.7);
        this.green.fillRoundedRect(-15, -15, 30, 30, 5);

        this.label = this.scene.make.text({
            text: str.toUpperCase(),
            x : 0, 
            y : 0, 
            style: { font: '20px Itim', fill: '#140F2D' }
        });
        this.label.setOrigin(0.5, 0.5);
        this.blue.visible = false;
        this.green.visible = false;

        this.add([this.background, this.blue, this.green, this.label]);
    }
    getText()
    {
        return this.label.text;
    }

    // marca a letra como selecionada
    select() 
    { 
        this.blue.visible = true; 
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
        this.blue.visible = false;
    }
}