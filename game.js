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

function preload ()
{
    this.load.setBaseURL('assets/game');

    this.load.image('background', 'background.png');
    this.load.image('player', 'player.png');
    this.load.image('block', 'block.png');
    this.load.image('particle_Red', 'particle_red.png');
    this.load.image('logo', 'logo.png');

    // If loaded images dont update, its a cache issue
    // https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development
}

function create ()
{
    this.add.image(400, 300, 'background'); //.setOrigin(0,0)

    platforms = this.physics.add.staticGroup();

    platforms.create(600, 400, 'block');
    platforms.create(50, 250, 'block');
    platforms.create(750, 220, 'block');

    //Create a new block, scale it and refresh to apply scale.
    platforms.create(400, 568, 'block').setScale(20, 1).refreshBody();

    //investigate manually adding objects as children to the physicsgroup

    var particles = this.add.particles('particle_Red');
    //https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObjectFactory.html

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'NORMAL'
        //Other standard blenmodes like ADD and MULTIPLY works too. How the particle gets drawn based on whats behind it.
    });

    var logo = this.physics.add.image(400, 100, 'logo');
    
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);

    this.physics.add.collider(logo, platforms);
    
    this.player = new Player(this, 150, 450)
    this.physics.add.collider(this.player.sprite, platforms)
    this.physics.add.collider(this.player.sprite, logo)


    this.enemy = new Enemy(this, 100, 100);
    this.physics.add.collider(this.player.sprite, this.enemy.sprite)
    this.physics.add.collider(this.enemy.sprite, platforms)
}


function update ()
{
    this.player.update()
}

function Player(game, x, y) 
{
    this.sprite = game.physics.add.sprite(x, y, 'player');
    this.sprite.setBounce(0.1);
    this.sprite.setCollideWorldBounds(true);

    var shoot = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    var up = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    var left = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    var down = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    var right = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    var speed = 200;

    this.update = function()
    {
        //This is an exeample of closures, this function can reach variables defined in outer scope function, 
        //even when called from the outside
        //In this case, this.update() can reach jump, even after Player() constructor has closed, like when
        //it is called in scene.update()
        if(shoot.isDown)                        
        {                                      
            this.sprite.setVelocityY(-speed);
        }

        if(up.isDown && this.sprite.body.touching.down)
        {
            //since "down" is positive Y in phaser, up is negative, wich is why we subtract speed from velocity in the Y-axis.
            this.sprite.setVelocityY(-330);
        }

        if(left.isDown)
        {
            //The same goes for "left" in the X-axis, since right is positive X
            this.sprite.setVelocityX(-speed);
        }
        
        //If you are using Vimium for chrome, the D key will not register without holding shift.
        //This is a known issue, and exclusively on your side, a good workaround is to add a rule to exclude d/D from on this domain
        //Or choose another key layout for movement
        //https://github.com/photonstorm/phaser/issues/1651
        if(right.isDown)
        {
            this.sprite.setVelocityX(speed);
        }

        if(down.isDown)
        {
            this.sprite.setVelocityY(speed);
        }
    }
}


function Enemy (game, x, y){

    this.game = game
    this.sprite = game.physics.add.sprite(x, y, 'logo');
    this.sprite.setBounce(0.1);
    this.sprite.setCollideWorldBounds(true);

    this.speed = 150;
}