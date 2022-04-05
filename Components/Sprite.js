class Sprite extends Component {
    componentName = "sprite";
    img
    constructor(url, options) {
        super()
        this.url = url;
        this.options = options || {};
    }

    Start(gameObject, game) {
        if (!gameObject.position) {
            return console.error("Sprites need Position component to work");
        }
        var img = document.createElement("img");
        img.src = this.url;
        img.style.position = "absolute";
        img.style.top = gameObject.position.x + "vh";
        img.style.left = gameObject.position.y + "vh";

        var options = this.options;

        Object.keys(options).forEach(function (option) {
            img.style[option] = options[option];
        })
        game.gameElem.append(img);
        this.img = img;
    }

    updateSprite(gameObject) {
        if (!gameObject.position) {
            return console.error("Sprites need Position component to work");
        }
        var img = this.img;
        img.src = this.url;
        img.style.position = "absolute";
        img.style.left = gameObject.position.x + "vh";
        img.style.top = gameObject.position.y + "vh";

        var options = this.options;

        Object.keys(options).forEach(function (option) {
            img.style[option] = options[option];
        })
    }
}