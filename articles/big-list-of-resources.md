# The Big List Of Gamedev Resources

## Frameworks and Libraries

### Phaser.js
**Official website:** https://phaser.io/

**Language:** Javascript (with some level of Typescript support)

**Platform:** Web (Cross platform)

**Abstraction Level:** High

**Community and poularity:** Very strong

**Support and documentation:** Very good, but rapid development sometimes leave docs incomplete

**Successful games:**  Minecraft: Hero's Journey, Bomb It 4, Exocraft, [and many more](https://phaser.io/games)

**License:** [MIT](https://phaser.io/download/license)

Phaser.js is a very easy and powerful framework to quickly create cross platform html5 games for the web. There is a incredibly strong community with hundreds of tutorials and example games to learn from, and the newest iteration Phaser 3 is currently under rapid development. Phaser.js is very high level and will handle a lot of the more tedious things automagically for you, like physics and rendering, which thus lets you focus strictly on designing the game. Some basic grasp of how javascript handles objects and scope is probably required to properly work with it.

### PyGame
**Official website:** https://www.pygame.org/news

**Language:** Python

**Platform:** Desktop, Mobile*

**Abstraction Level:** Medium - Low

**Community and poularity:** Medium. Often recommended to beginners

**Support and documentation:** Good

**Successful games:** [Lots of Indiecade award winning games](https://inventwithpython.com/blog/2013/02/19/what-professional-games-use-pygame/)

**License:** [LGPL-2.1](https://github.com/pygame/pygame/blob/master/LICENSE)

PyGame is based on the very low level and cross platform C framework SDL but has built an abstract high level Python interface on top. Graphics and basic collision checking functionality is included, but you still have to do some low level stuff yourself, like manually swapping screen buffers. Nevertheless if you want a more hands on approach to game development or already know some Python, PyGame is a good and mature framework to use.

### Libgdx
**Official website:** https://libgdx.badlogicgames.com/

**Language:** Java

**Platform:** Desktop, Mobile*

**Abstraction Level:** Medium - High

**Community and poularity:** Good

**Support and documentation:** Good

**Successful games:** Ingress, [and over 4863 others are listed in their gallery](https://libgdx.badlogicgames.com/gallery.html)

**License:** Apache 2.0     

Libgdx is a cross platform game development framework written in Java that abstract away the differences between IO, Graphics and Sound on different platforms. It offers a pretty standard object oriented game architecture, and if you have previous Java experience you'll pick it up in no time. Also runs on Android and has been successfully employed by Google.

### Monogame
**Official website:** http://www.monogame.net/

**Language:** C#

**Platform:** Desktop (Windows biased), Mobile*, Nintendo Switch oddly enough

**Abstraction Level:** Medium

**Community and poularity:** Medium - Low

**Support and documentation:** Medium

**Successful games:** [Fez, Bastion](http://www.monogame.net/showcase/)

**License:** [Ms - Pl](https://github.com/MonoGame/MonoGame/blob/develop/LICENSE.txt)

Made as a spiritual successor with backwards compability to Microsofts now defunct XNA framework, Monogame offers a medium level interface to rendering as well as compile time content pipeline processor. You'll get a load, update and draw function and a very good math library, but not much more. Overall very similar architecture to Libgdx, but the C# templates will _pretty much_ force you to use Visual Studio. A big personal favorite and just abstract enough to still let me implement the architecture like I want it while avoiding any graphics or sound driver bindings. A good base to "build" your own engine on top of, if youre into that.

### LWJGL
**Official website:** https://www.lwjgl.org/

**Language:** Java

**Platform:** Desktop, Mobile*

**Abstraction Level:** Very low

**Community and poularity:** Low

**Support and documentation:** Medium - Low

**Successful games:** Minecraft

**License:** [Custom, but very lenient](https://www.lwjgl.org/license)

LWJGL is not so much a framework as it is a bunch of Java bindings to low level c libraries like OpenGL and OpenAL. If you want to build your own engine from scratch in a garbage collected language and have full control of every part of the game, LWJGL will provide you with the tools you need. It is a very fun excercise and you'll learn a lot, but if you want to actually finish a game I would recommend you use something premade.

### OpenTK
**Official website:** https://github.com/opentk/opentk

**Language:** C#, .NET

**Platform:** .NET and OpenGL Compatible Platforms

**Abstraction Level:** Very low

**Community and poularity:** Very low

**Support and documentation:** Very low

**Successful games:** Not really a game, but [Monogame is built on top of it](https://github.com/MonoGame/MonoGame/issues/1528)

**License:** [Custom](https://github.com/opentk/opentk/blob/develop/License.txt)

Like LWJGL, but in C# instead and with bindings only to openGL and openAL. I only really included it because C# > Java

***

Mobile* - While most framework have mobile capabilities they usually require considerable more effort to properly deploy on mobile devices or may be severly limited, especially on IOS.

## Engines

### Unity Engine
**Official website:** https://unity3d.com/

**Language:** C#

**Platform:** Desktop, Mobile, Console, Web

**Abstraction Level:** High

**Community and poularity:** Very Good 

**Support and documentation:** Very Good

**Successful games:** [Cuphead, Monument Valley, Hollow Knight, many more](https://unity.com/madewith?_ga=2.127988875.681268737.1524497131-624480261.1524497131)

**License:** [Custom, but free for hobbyists](https://store.unity.com/)

Probably the most popular engine out there today. Kind of easy to get into and has a very flexible editor as well as well populated asset store. It is closed source, and because of that can be somewhat of a black box sometimes. Has a very flexible GameObject architecture that makes composing objects quick and easy, even at runtime, however it also requires pretty much everything in the game to be a "GameObject", which can lead to some really bad practices and sub-optimal implementations of mechanics. Handling physics, GUI, graphics, input and assets in 3D has never been easier however, and the what-you-see-is-what-you-get drag and drop editor makes it super intuitive to create maps and levels and debug the game. You are somewhat bound to use Visual Studio when scripting though.

### Unreal Engine 4
**Official website:** https://www.unrealengine.com/en-US/blog

**Language:** Special C++ dialect, Visual "Blueprint" scripting

**Platform:** Desktop, Mobile, Console

**Abstraction Level:** High

**Community and poularity:** Very Good 

**Support and documentation:** Very Good

**Successful games:** Fortnite, PUBG

**License:** [Custom, but you have to pay royalties if your game makes money](https://www.unrealengine.com/en-US/faq)



### Godot Engine
**Official website:** https://godotengine.org/

**Language:** Multiple. GDScript, C++, bindings to many more like C# and Python.

**Platform:** Desktop, Mobile, Web

**Abstraction Level:** High - Very High

**Community and poularity:** Medium - Low, But steadily rising!

**Support and documentation:** Medium

**Successful games:** [Tanks of Freedom](https://godotengine.org/showcase), [Deponia (IOS)](https://godotengine.org/showcase/tags/adventure)

**License:** [Open source, MIT](https://godotengine.org/license)




## Tools

## Asset Resources

### KenneyNL
**Website:** https://kenney.nl/assets

KenneyNL is like the dutch god of game development. This guy has released litteraly over thousands of beautiful game assets to the public for free! And they are all released to the [public domain under CC0](http://kenney.nl/support), which means you're even allowed to use his assets in commercial projects! Even if you plan to create your own assets to your game, KenneyNL's work is invaluable when you want to quickly prototype mechanics and iterate game design without having to wait for the artist on the team to catch up.

### OpenGameArt
**Website:** https://opengameart.org/

OpenGameArt harbors a lot of free game assets uploaded by different users. The quality of assets can vary wildly however, and there have been instances of intelectual property theft where users have uploaded other peoples work. Always be careful and read the license if you plan to use something from there. Either way, its a good resource to find temporary prototype assets or to be inspired.

## Other Resources