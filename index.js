const Input = {
	keys: {},
	run(){
		document.addEventListener("keydown", function keydown(e) {
			Input.keys[e.code] = true;
		})
		document.addEventListener("keyup", function keyup(e) {
			Input.keys[e.code] = false;
		})
	},
	isKeyDown(code){
		return Input.keys[code] || false;
	}
};

Input.run();

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

	constructor(){
		var div = document.createElement("div");
		div.id = "gameView";
		div.style.padding = 0;
		div.style.margin = 0;
		div.style.position = "absolute";
		div.style.display = "block";
		div.style.top = 0;
		div.style.left = 0;
		div.style.width = "100%";
		div.style.height = "100%";
		div.style.overflow = "visible";

		this.gameElem.append(div);
		this.gameElem.style.overflow = "hidden";

		this.gameElem = div;
	}

	//Simple Settings
	setGameElem(gameElem) {
		var div = document.createElement("div");
		div.id = "gameView";
		div.style.padding = 0;
		div.style.margin = 0;
		div.style.position = "absolute";
		div.style.display = "block";
		div.style.top = 0;
		div.style.left = 0;
		div.style.width = "100%";
		div.style.height = "100%";
		div.style.overflow = "visible";
		gameElem.append(div);
		gameElem.style.overflow = "hidden";
		this.gameElem = div;
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
	game.gameElem.parentElement.style.background = game.background;

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