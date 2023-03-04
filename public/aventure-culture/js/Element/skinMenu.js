class SkinMenu extends Menu {

    constructor(player, callback) {
        super(callback);
        this.callback = callback;
        this.player = player;

        this.playerConfig = {
            image: document.getElementById("player"),
            height: document.getElementById("player").getBoundingClientRect().height,
            width: document.getElementById("player").getBoundingClientRect().width,
        };

        /**
         * Ajouter un joueur
         */
        this.players = [
            {
                name: "",
                images: {
                    left: "agathe_chemise_pantalon_left.png",
                    right: "agathe_chemise_pantalon_right.png"
                },
                width: 177,
                height: 371
            },
            {
                name: "",
                images: {
                    left: "agathe_robe_noire_left.png",
                    right: "agathe_robe_noire_right.png"
                },
                width: 177,
                height: 381
            },
            {
                name: "",
                images: {
                    left: "agathe_sport_noir_left.png",
                    right: "agathe_sport_noir_right.png"
                },
                width: 177,
                height: 372
            },
        ];

        this.init();
    }

    init() {
        let menu = document.createElement("div");
        menu.id = "skin-menu";
        menu.innerHTML = "<h1>Choisissez votre personnage</h1>";

        let skins = document.createElement("div");
        skins.id = "skins";
        for (let i = 0; i < this.players.length; i++) {
            let skin = document.createElement("div");
            skin.className = "skin";
            skin.onclick = () => {
                this.changePlayerSkin(i);
            }
            skin.innerHTML = `
                <img src="../../../aventure-culture/img/${this.players[i].images.right}" width="${this.players[i].width}px" height="${this.players[i].height}px">
                <p>${this.players[i].name}</p>
            `;

            skins.append(skin);
        };

        let prev = document.createElement("div");
        prev.id = "prev-skin";
        prev.innerText = "<";
        prev.onclick = () => {
            skins.scrollBy(-230, 0);
        }

        let next = document.createElement("div");
        next.id = "next-skin";
        next.innerText = ">";
        next.onclick = () => {
            skins.scrollBy(230, 0);
        }

        skins.appendChild(prev);
        skins.appendChild(next);

        menu.appendChild(skins);

        document.body.appendChild(menu);
    }

    changePlayerSkin(i) {
        this.playerConfig.image.setAttribute("src", `../../../aventure-culture/img/${this.players[i].images.right}`);
        this.playerConfig.width = this.players[i].width;
        this.playerConfig.height = this.players[i].height;
        this.playerConfig.images = this.players[i].images;
        new LoadingScreen(400, document.getElementById("bg-image-loader"), () => {
            this.callback()
        });
        document.getElementById("skin-menu").remove();
    }

    getPlayerConfig() {
        return this.playerConfig;
    }
}