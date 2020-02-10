class ImageContainer extends Phaser.GameObjects.Container
{
    constructor(scene, x, y)
    {
        super(scene);
        scene.add.existing(this);
        this.setPosition(x, y);
        this.createContainer();
    }
    createContainer()
    {
        let bg = this.scene.add.graphics();
        bg.fillStyle(0xFCECC9, 1);
        bg.fillRect(0, 0, 200, 200);

        this.sprite = this.scene.add.sprite(100, 100,'gui', 'gui/opening_play.png');
        this.sprite.visible = false;

        this.add([bg, this.sprite]);
    }
    changeTexture(texture)
    {
        this.sprite.visible = true;
        this.sprite.setTexture('gui', 'gui/' + texture);
    }
}