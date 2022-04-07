# KGE *AKA* Kenji's Game Engine

A Game Engine Built for Front End Sites!

## Features

- Similar syntax to Unity = Easy to Pick Up
- Runs in Browser
- Easily Readable Source Code ***(I think... don't question my spaghetti code)***

## Documentation

- [Game Instance](#1-1)
  	- [Create Game Instance](#1-1)
  	- [Settings and Configuration](#1-2)
  	- [Add GameObjects to Game Instance](#1-3)
- [GameObjects](#2-1)
  	- [Create GameObjects](#2-1)
  	- [Add Components](#2-2)
- [Components](#3-1)
  	- [Create Components](#3-1)
  	- [List of Default Components](#3-2)
- [Input](#4-1)

# Game Instance

<h2 id="1-1">Create Game Instance</h2>

The Game Instance is where all the GameObjects, Components, Scripts, etc. are stored. It's basically a wrapper for the entire game. To create a game instance, all you have to do is make a new Game.

```js
var game = new Game();

game.run();
```

<h2 id="1-2">Settings and Configurations</h2>

There are multiple different configurations. Here are all of them in a code block
```js
//Sets Background
game.setBackground(rgb(100,100,100) /% Or %/ "#FFFFFF" /% Or %/ "url(image)");

//Sets Camera
game.setCamera(Camera GameObject);

//Sets FPS
game.setFPS(number);

//Sets Game Element
game.setGameElem(elem);
```

<h2 id="1-3">Add GameObjects to Game Instance</h2>

```js
game.addGameObject(GameObject);
```

# GameObjects

<h2 id="2-1">Create GameObjects</h2>

GameObjects make up the scene, filling the game with objects. To create one, do:

```js
var Player = new GameObject();
```

Once created, it'll automatically generate itself an id *(a string)* which can be referenced in the future.

```js
//Read the GameObject's ID
Player.id;

//Change the GameObject's ID
Player.setId("new id");
```

## ***IMPORTANT: Keep the ID a string***

<h2 id="2-2">Add Components</h2>

Components are the building blocks of GameObjects. Without Components, GameObjects will be an empty, useless object.

```js
Player.addComponent(Component);
```

Once it's created, you can start using it.

```js
Player.componentName

//For example
Player.movement.x
```

# Components

<h2 id="3-1">Create Components</h2>

```js
var randomComponent = new class RandomComponent extends Component{
	componentName = "randomcomponent" /*How it'll be referenced by the code*/
	constructor(/*Whatever params you want to use here*/){
	  	super()
	  	//Whatever params you want to use here
	}
	Start(GameObject /*The GameObject the Component is in*/, game /*The game instance the GameObject is in*/){
		//Runs at start up
	}

	Update(GameObject /*The GameObject the Component is in*/, game /*The game instance the GameObject is in*/){
		//Runs once per frame
	}

	CustomFunction(){
		//do whatever
	}
}

//Use Case
Player.randomcomponent.CustomFunction();
```

<h2 id="3-2">List of Default Components</h2>

KGE Starts with some Components built in. Here's a list of all of them, what they do, etc.

```js
//Position Component

Player.addComponent(new Position(x::int,y::int));

//Gives the GameObject a point in space

//Sprite Component

Player.addComponent(new Sprite(imgurl::string, options::object));

//Gives the GameObject a sprite, allowing it to be seen in the scene (see what I did there ;)

//Options are CSS options, if you want to edit the image

var options = {
	zIndex:100,
	width: "100px",
	imageRendering: "pixelated"
	/*All the CSS options available can be used here*/
}

//If you want to update the sprite (eg. changed positioning, or img src), run updateSprite

Player.sprite.updateSprite();

//Camera Component

camera.addComponent(new Camera());

// I recommend giving it it's own GameObject. Technically you can put it on any GameObject, but for simplicity's sake, make reserved GameObject for Camera.

//Follow a GameObject
camera.follow(GameObject);

//Move to a specific x and y
camera.moveTo(x,y);
```

<h1 id="4-1">Input</h1>

A game without input is not a game, it's literally just a movie. The Input module adds inputs to your game.

```js
Input.isKeyDown("whatever key") /*Returns true/false*/;

//Use Cases
var Player = new GameObject();

Player.addComponent(new Position(0,0));
Player.addComponent(new Sprite(url, {
    width: "10vh"
}));
Player.addComponent(new class Movement extends Component{
    componentName = "movement";
    speed = 5;

    Update(gameObject){
        if(Input.isKeyDown("KeyW")){
            gameObject.position.y -= this.speed;
        }
        if(Input.isKeyDown("KeyS")){
            gameObject.position.y += this.speed;
        }
        if(Input.isKeyDown("KeyD")){
            gameObject.position.x += this.speed;
        }
        if(Input.isKeyDown("KeyA")){
            gameObject.position.x -= this.speed;
        }
        gameObject.sprite.updateSprite(gameObject);
    }
})

game.addGameObject(Player);
```