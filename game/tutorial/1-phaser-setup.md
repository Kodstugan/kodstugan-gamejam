
#Phaser Setup#

This guide will use Phaser 3, a popular and powerful game framework for making games on the web. A great benefit of doing gamedev on the web, and one of the primary reasons that we chose Phaser.js for this guide, is that it is very easy to make your game cross platform, which in turn makes it very easy to develop togheter with people on different operating systems and what not. Javascript is also an interpreted language, which means you dont have to do any fiddling with compilers or setting up complex IDE's in order to start developing.

###Sounds great! What's the catch?###

Well... web development can be somewhat tricky and javascript has its quirks, but the only real obstacle to overcome when working with Phaser.js is that you need to host a web server locally in order to test your game and load content. Why? [Well, you cant just let a web page access whatever it wants on your system right?](https://blog.chromium.org/2008/12/security-in-depth-local-web-pages.html)

Now fret not, it sounds complicated and cumbersome, but it is super easy. If you have experience in this field you should probably do it your way, but if not, you can easily host a simple http server with Python. 

If you have Python 3 installed, simply navigate to your working directory and then run:
```pyton -m "http.server"```

And python will now serve locally at:
http://localhost:8000

If you have Python 2 installed, you should really consider updating, otherwise use:

```python -m SimpleHTTPServer```

And if you dont have Python installed at all, what are you waiting for? If you plan to make a career in software development you will _probably_ write a python script at least once. Head on over and grab the latest version [here](https://www.python.org/downloads/)

Now we can host stuff locally, but we dont have anything to host yet! So lets start setting up our web page!

##Getting started with the web page##

First of all, we have to create a simple web page where we can embed the game. This guide will not really cover any web development but we'll do a brief overview anyway, so just copy and paste this code snippet into a new file and name it ``index.html`` and we'll go through it.

```
<!DOCTYPE html>
<html>
<head>
  <title>My Game!</title>
  <!-- Phaser.js -->
  <script src="//cdn.jsdelivr.net/npm/phaser@3.1.1/dist/phaser.js"></script>
  <!-- Game -->
  <script src="game.js"></script>
</head>
<body>
  <h1>Game</h1>
  <div id="game-viewport">

    <!-- This is where we will insert the game canvas -->

  </div>
</body>
</html>
```

HTML websites are fundamentally made out of different ``<tags>`` that tell the browser how to render the page. While the syntax is somewhat dense, the concept is similar to other markup languages such as markdown or latex.

Most tags in HTML, have an open ``<tag>`` and a closing ``</tag>`` marked with a ``/`` that specifies where an element starts and ends. Everything in this page is wrapped between the ``<html></html>`` tag so the browser properly interprets everything inside as html. 
The ``<head>`` tag contains the all the scripts we want to load and usually other meta stuff. In our case we just want to load phaser.js from the cdn that [jsdelivr](https://www.jsdelivr.com/) and [npm](https://www.npmjs.com/) kindly hosts for us, and then also load the game.js script locally where we will write our game. The text written inside of the ``<!-- -->`` are just comments.
The ``<body>`` tag usually marks the actual main content on a website, but since our site is pretty simplistic it only conains a ``<h1>`` with the  a title, and a ``<div>`` tag that will eventually wrap the game viewport. ``<h1>`` tags are strictly used to mark "headings" on a webpage, like titles, but the ``<div>`` tag is somewhat more complicated to explain. Generally ``<div>``'s are used mostly like containers or "wrappers" to format and structure other tags, or when there is no other tag that fits the use case. We have given this div a name, or id, "game-viewport" because we can then easily tell Phaser.js where we want the game window, or _canvas_ to be inserted on the page by referring to the id.

Feel free to change the titles or customize this page further, this guide wont do anything more with it. You can learn more about the different html tags and their different uses [here](http://www.simplehtmlguide.com/cheatsheet.php)


##Enter the Javascript##

Phew, finally, we can get down to actually creating the game!

Create a new file in your working directory, the same directoy where your index.html file is, and name it game.js. You can name it whatever you want actually, just make sure it ends with .js and that you load it in the script tag in index.html.
Now this file is where we will interact with Phaser.js and write all the logic for our game. Phaser is a very powerful framework, and you will find that Phaser can and will handle a lot of the more complex things for us, such as drawing our game to the screen as well as all the physics and collisions in our game. So the first thing we have to do is configure Phaser.js with our desired parameters regarding those things.

We will be creating a config object that we can pass to phaser, wherein we have declared our parameters as properties of the object.

```
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
```

Now lets go through this
The ``type:`` property declares what rendering backend we will use, either standard html canvas or hardware accelerated WebGL. WebGL is faster even if we wont use any advanced 3d features, but not all browser support it yet. Since we dont know if the player's browser supports WebGL we will instead let Phaser choose, by assigning it ``Phaser.AUTO``, which is a constant declared by Phaser.

``width:`` and ``height`` just specify the dimensions of the window in pixels.
``parent:`` specifies the id of the element where we want Phaser to insert our game window, which we've set to the id of our game wrapper in ``index.html``

``physics:`` declares what physics engine we will use in our game. Phaser comes bundled with [4 different physics systems](https://phaser.io/docs/2.6.2/Phaser.Physics.html) each with their pros and cons, but we are not really interested in super realistic physics or advanced, and the Arcade system has very performant and "video-gamey" physics. We also declare an arcade physics config object where we specify the direction and strength of the gravity in the world, as well as a debug flag. Somewhat important to note is that "down" inside Phaser.js is towards the positive y axis, and up is negative. So the gravity of our game world will accelerate everything downwards 300 pixels each second.


Finally we specify and declare the main scene object. You can think of a scene as a container that represent a part of the game, or as the world where out game objects live. Whenever we create object we want phaser to do stuff with, like drawing or physics calculations we will attach them to a scene and then tell phaser which scene to draw/update/calculate things in. A classic example is that you separate "screens" in different scenes, like the main menu, the game and the game over screen. So when you press play on the main menu we instantiate the game scene and when you lose the game we switch to the game over screen. Different levels or maps are also usually separated into different scenes.
Right now we only have on scene, but we will create many more later. That said, we want to do stuff in our scene too, like creating our game objects or updating them with our logic each frame, and thus we have to tell phaser which of our functions to call at different stages in the games life cycle.
We will declare three properties that Phaser knows what to do with, ``preload:``, ``create`` and ``update``, and we will assign them three functions that we will logically call ``preload``, ``create`` and ``update``.
Phaser expects to recieve a scene object with preload, create and update properties and thus know what to do with them. In fact, Phaser will look for and call a lot of other property functions in our scene object if we supply them, like ``render:`` that gets called after Phaser is done drawing each frame, in case we want to draw other things manually. However, we are content with the just the three we have.

Now lets declare these functions and we'll go through and explain their purpose.

```
function preload(){

    this.load.setBaseURL('assets/game');
    this.load.image('background', 'background.png');
}

function create(){

    this.add.image(400, 300, 'background');
}

function update(){

}
```

First up is ``preload()``
Since we assigned the ``preload:`` property of our scene object with the ``preload()`` function, Phaser will call it as soon as the game loads. It is in this function that we will load any assets wether it be images or sounds into the memory of our browser. It is important that we load everything before the game starts, or the game might stall or things might pop in randomly when running the game since it needs to stop and load stuff into memory.

Then we have the ``create()`` function.
``create()`` will be called after ``preload()`` but before the main loop of updating and drawing start. It is here where we will create and initialize our game objects, like creating the player, placing all the obstacles on the map, spawning all the enemies and resetting the score. The games starting state will be defined by this function.

Lastly we have ``update()``.
``update()`` is pretty much the core part of our game, this function will be called every frame, before Phaser draws everything to the screen. It is here that we want to check for player input, increment any timers, or update any states. All logic that constantly have to be checked in our scene have to live inside this function.


### What about drawing?? and physics??? shold we not have a render() and physicsUpdate() function too? ###
Well dont worry about that, Phaser is kind enough to handle that for us, litterally behind the scenes. We simply just tell phaser that we want this object to have an image and Phaser will draw it for us. Same goes for physics. In fact, lets try drawing something!


In order to draw something we first need to load whatever image we want to draw. Lets start by loading and drawing the background image for our game. You can find the background image and all the other assets for our game over at [github](TODO).
Download the entire assets folder and put it in your working directory. Now we can start loading stuff like so

```
function preload(){

    this.load.setBaseURL('assets/game');
    this.load.image('background', 'background.png');
}
```

The ``this`` keyword here refers to our current scene, and so we load the image into our scene so we can refer to it later. But first we also give the scene the "base URL", which is the path from the current directory where Phaser will start looking for assets whenever we want to load anything. Here we've set the base URL to the game directory inside the assets folder and we can thus omit that part from the path where we load the background image. We've put the game specific assets into ``assets/game/`` because you might want to make a ``assets/web/`` you can store the assets for the website, if you want to spice it up later that is. Note that this is not _really_ necessary, we could've just specified the whole path, but this way you'll save on some typing when we load more assets later.

Now we've loader our image into the scene, lets actually instantiate it as a game object.

in the ``create()`` function we'll create it like so.

```
function create(){

    this.add.image(400, 300, 'background');
}
```

The first two arguments correspond to where in the world we want to place the image. Our background image is the size of the screen (800x600) but phaser considers the origin of things to be in the center of their bounds. So if we want to place the background image to align with the bounds of the screen we have to offset it by half its width and height inwards.


Oh, I almost forgot, we have tell phaser to create the game with our config object!
After youve declared the config object, add the following line:

``var game = new Phaser.Game(config);``

In reality we could've just supplied all the config data to this constructor function directly, but that would've been a lot more fiddly and messy. It is a lot cleaner to keep the config as a separate object and then send the entirety of it to Phaser.



Now were done! If you start the http server in your working directory you should [see something like this](TODO)!

Congratulations, you've finally set up Phaser properly and drawn something to the screen! In the next chapter we'll make sure you're able to run around in this wonderfully empty world you've made!

[Chapter 2. Creating the Player](TODO)