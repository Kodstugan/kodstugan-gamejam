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
    this.load.image('player', 'player.png')
}

function create(){

    this.add.image(400, 300, 'background');
    this.player = new Player(this, 150, 450)
}

function update(){

    this.player.update()
}


function Player(game, x, y){
    //We want the "outisde" to be able to access the physics component of our player, so we attach the sprite as a property of Player.
    this.sprite = game.physics.add.sprite(x, y, 'player');
    this.sprite.setCollideWorldBounds(true);

    //Thanks to closures, these var fields are effectively private variables, only accessible to the Player object.
    var up = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    var space = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    var left = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    var down = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    var right = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    var speed = 225;
    this.sprite.setMaxVelocity(300, 600)

    this.update = function(){

        this.sprite.body.drag.x = 0;

        if(this.sprite.body.onFloor()){

            this.sprite.body.drag.x = 300;

            if(up.isDown || space.isDown){
                //Since "down" is positive Y in phaser, up is negative, wich is why we subtract speed from velocity in the Y-axis
                this.sprite.setVelocityY(-300);
            }

        }

        if(left.isDown){
            //The same goes for "left" in the X-axis, since right is positive X
            this.sprite.setVelocityX(-speed);
        }

        if(right.isDown){
            this.sprite.setVelocityX(speed);
        }

        if(down.isDown){
            //We want to be able to fall faster once we are in the air, and thus need to "add" some downards force onto our exisiting velocity.
            this.sprite.setVelocityY(this.sprite.body.velocity.y + 50);
        }
    }
}