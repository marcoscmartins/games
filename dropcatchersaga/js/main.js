var main;

window.onload = function () {
    console.clear();

    var WebFontConfig = {
        google: {
            families: ['Fredoka One', 'Itim', 'Quicksand']
        }
    };


    var config = {
        width: 960,
        height: 600,
        backgroundColor: 0x222222,
        scene: [Preloader, Opening, Game],
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 960,
            height: 600
        }
    }
    main = new Phaser.Game(config);
    // main.hasModal = false;
    main.width = main.config.width;
    main.height = main.config.height;
    main.isFullscreen = false;
    // main.allowMidia = true;
    // main.firstTime = true;
    // main.points = 0;
    // main.running = false;
    main.music;
    main.click;
    main.error;
    main.chimes;
    main.data;
    main.playSound = function (str) {
        if (!main.allowMidia)
            return;

        if (str == 'click') main.click.play()
        else if (str == 'error') main.error.play()
        else if (str == 'chimes') main.chimes.play()
    }
    main.switch = function (str) {
        if (str == 'game') {
            main.game.play()
            main.opening.stop()
        }
        else {
            main.game.stop()
            main.opening.play()
        }
    }
    main.toggleFullScreen = function () {
        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
            main.isFullscreen = true;
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            main.isFullscreen = false;
        }

        window.scrollTo(0, 1);
        window.pageYOffset = 0;
    }

    main.updateScores = function () {
        main.scoreManager = new LocalScoreManager();
        main.scoreManager.getLoggedUser();
    }

    // Método utilizado para embaralhar elementos de um array
    main.shuffle = function (arr) {
        arr.sort(main.randMethod);
    }

    main.randMethod = function (a, b) {
        return Math.random() > 0.5 ? 1 : -1;
    }
    // Método utilizado para criar um array com o tamanho passado por parâmetro
    main.createArray = function(size)
    {
        let arr = [];
        for(let i = 0; i < size; i++)
            arr.push(i);
        return arr;
    }
    // main.updateScores();

    // resize();
    // window.focus();
    // window.addEventListener("resize", resize, false);
}

function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = main.config.width / main.config.height;
    if (windowRatio < gameRatio) {
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}