# KGE *AKA* Kenji's Game Engine

A Game Engine Built for Front End Sites!

## Features

- Similar syntax to Unity = Easy to Pick Up
- Runs in Browser
- Easily Readable Source Code ***(I think... don't question my spaghetti code)***

## Documentation

- Game Instance
 - [Create Game Instance](#1-1)
 - [Settings and Configuration](#1-2)
 - Add GameObjects to Game Instance
- GameObjects
 - Create GameObjects
 - Add Components
- Components
 - Create Components
 - Position
 - Sprite
- Input

## Game Instance

<h3 id="1-1">Create Game Instance</h3>

To create a game instance, all you have to do is make a new Game.

```js
var game = new Game();

game.run();
```

<h3 id="1-2">Settings and Configurations</h3>

There are multiple different configurations. Here are all of them in a code block
```js
//Sets Background
game.setBackground(rgb(100,100,100) /% Or %/ "#FFFFFF" /% Or %/ "url(image)");

//Sets Camera
game.setCamera(/* insert camera GameObject here /*);

//Sets FPS
game.setFPS(60);
```

I'm too lazy to create all the documentation right now. I guess you'll just have to read the source code for now