class Camera extends Component{
    componentName = "camera";
    follow;

    constructor(options){
        super()
        this.options = options
    }

    follow(gameObject){
        this.follow = gameObject;
    }
    Update(gameObject){
        if(gameObject == game.camera && typeof follow == "GameObject"){
            console.log("I am the main camera");

        }
    }
}