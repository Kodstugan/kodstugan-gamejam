var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: "game-viewport",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


function preload(){

    this.load.setBaseURL('assets/game');
    this.load.image('background', 'background.png');
}

function create(){

    this.add.image(400, 300, 'background');
}

function update(){

}