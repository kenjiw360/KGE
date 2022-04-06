class Camera extends Component{
    componentName = "camera";
    followObj;

    constructor(options){
        super()
        this.options = options
    }

    follow(gameObject){
        this.followObj = gameObject;
    }

    Update(gameObject, game){
        if(gameObject == game.camera && this.followObj.name == "GameObject"){
            var gbox = game.gameElem.getBoundingClientRect();
            var box = this.followObj.sprite.img.getBoundingClientRect();
            game.gameElem.style.transform = `translate(${-this.followObj.position.x+gbox.width/2-box.width/2}px,${-this.followObj.position.y+gbox.height/2-box.height/2}px)`;
        }
    }
}