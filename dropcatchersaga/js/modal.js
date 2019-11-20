class Modal extends Phaser.GameObjects.GameObject
{
    // construtor do componente. Recebe referências da cena e das posições x e y
    constructor(scene, x, y)
    {
        super(scene);
        scene.add.existing(this);

        this.create();
    }
    create()
    {
        
    }

    enter()
    {
        this.scene.tweens.add({
            targets : this,
            x : game.config.width * 0.5,
            y : game.config.height * 0.5,
            duration : 500,
            ease : 'Cubic'
        });
    }
    leave()
    {
        this.scene.tweens.add({
            targets : this,
            x : game.config.width * 1.5,
            y : -game.config.height * 0.5,
            duration : 500,
            ease : 'Cubic'
        });
    }
}