class Input{
	keys = {};

	constructor(game){
		game.gameElem.addEventListener("keydown", function keydown(e) {
			this.keys[e.code] = true;
		})
		game.gameElem.addEventListener("keyup", function keyup(e) {
			this.keys[e.code] = false;
		})
	}
	static isKeyDown(code){
		return keys[code] || false;
	}
}

function createString(length) {
	var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
	var result = "";
	for (i = 0; i < length; i++) {
		result += characters[Math.round(Math.random() * (characters.length - 1))];
	}
	return result;
}

function rgb(r,g,b){ return `rgb(${r},${g},${b})` }

class Game{
	camera
	gameObjects = {};
	gameElem = document.querySelector("body");
	background = "rgba(255,255,255,0)";
	fps = 60;

	//Simple Settings
	setGameElem(gameElem) {
		this.gameElem = gameElem;
	}

	setBackground(background){
		this.background = background;
	}

	setCamera(gameObject){
		this.camera = gameObject;
	}
	//Game Object Stuff
	addGameObject(gameObject){
		var id = createString(6);
		gameObject.setId(id);
		this.gameObjects[id] = gameObject;
		return id;
	}

	//Runs the Game
	static run(game){
		run(game);
	}
	run(){
		run(this);
	}
	setFPS(fps){
		this.fps = fps;
	}
}

class GameObject{
	id="";
	components = [];
	constructor(name){
		this.name = name || "GameObject";
	}
	addComponent(component){
		if(this.components.indexOf(component.componentName) == -1){
			this[component.componentName] = component;
			this.components.push(component.componentName);
		}
	}
	setId(id){
		this.id = id;
	}
}

//Components
class Component {}

function run(game){
	game.gameElem.innerHTML = "";
	game.gameElem.innerText = "";
	game.gameElem.style.background = game.background;
	//Handles Start
	Object.values(game.gameObjects).forEach(function (gameObject) {
		gameObject.components.forEach(function (component) {
			var component = gameObject[component];
			if(component.Start){
				component.Start(gameObject,game);
			}
		})
	})

	//Handles Update
	setInterval(function (){
		Object.values(game.gameObjects).forEach(function (gameObject){
			gameObject.components.forEach(function (component){
				var component = gameObject[component];
				if(component.Update){
					component.Update(gameObject,game);
				}
			})
		})
	},1000/game.fps)
}