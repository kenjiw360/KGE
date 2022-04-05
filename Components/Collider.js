class Collider extends Component {
    componentName = "collider";

    isColliding(go1,go2){
        var collider1 = go1.sprite.img.getBoundingClientRect();
        var collider2 = go2.sprite.img.getBoundingClientRect();

        return !(
            collider1.top > collider2.bottom ||
            collider1.right < collider2.left ||
            collider1.bottom < collider2.top ||
            collider1.left > collider2.right
        );
    }

    Update(gameObjectr,Game){
        var isColliding = this.isColliding;
        Object.values(Game.gameObjects).forEach(function (gameObject){
            if(isColliding(gameObjectr,gameObject)){
                console.log("collided with something");
            };
        });
    }
    constructor(x, y) {
        super()
        this.x = x || 0;
        this.y = y || 0;
    }
}