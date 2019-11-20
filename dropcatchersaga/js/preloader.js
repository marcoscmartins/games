class Preloader extends Phaser.Scene 
{
    constructor ()
    {
        super( { key:'Preloader', active: true } );
    }
    init(){}
    preload()
    {
        // this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');

        this.load.json('data', 'data/data.json');
        
        this.load.atlas('gui', 'assets/sprites/gui.png', 'assets/sprites/gui.json');

        // this.load.multiatlas('opening', 'assets/opening.json', 'assets');
        // this.load.multiatlas('game', 'assets/game.json', 'assets');
        this.load.audio('chimes', ['sounds/chimes.mp3', 'sounds/chimes.ogg']);
        this.load.audio('click', ['sounds/click.mp3', 'sounds/click.ogg']);
        this.load.audio('error', ['sounds/error.mp3', 'sounds/error.ogg']);
        this.load.audio('opening', ['sounds/opening.mp3', 'sounds/opening.ogg']);
        this.load.audio('game', ['sounds/game.mp3', 'sounds/music.ogg']);

        
        let width = this.cameras.main.width;
        let height = this.cameras.main.height;

        this.px = width * 0.5 - 170;
        this.py = height * 0.5;

        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x444444, 0.8);
        progressBox.fillRect(this.px, this.py, 320, 30);
        let loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 25,
            text: 'Carregando o conteúdo ...',
            style: {
                font: '20px Itim',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);

        let percentText = this.make.text({
            x: width / 2,
            y: this.py + 55,
            text: '0%',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, 0.5);

        this.load.on('progress', function (value) {
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(this.px + 5, this.py + 5, 310 * value, 20);
            percentText.text = Math.round(value * 100) + "%";
        }, this);
                    
        this.load.on('fileprogress', function (file) {
            // console.log(file.src);
        });
         
        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
        });
    }
    create ()
    {
        this.scene.start('opening', Opening);
    }
}