class Caracter {
    /**
     * Affiche un personnage avec un dialogue éventuel 
     * @param {String} name Nom du personnage
     * @param {HTMLImageElement} image Son image
     * @param {Number} x position horizontale
     * @param {Number} y position verticale
     * @param {Number} width Largueure
     * @param {Number} height Hauteure
     * @param {String} dialog Dialog / false si pas de dialogue
     * @param {Boolean} randomMovement 
     */
    constructor(player, name, image, x, y, width, height, dialog = false, dialogHeadPic = false, dialogCallback = false) {
        this.player = player;
        this.name = name;
        this.image = image;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.dialog = dialog;
        this.dialogElem = false;
        this.dialogHeadPic = dialogHeadPic;
        this.dialogCallback = (dialogCallback) ? dialogCallback : () => { };
        this.threshold = 100;
        this.iterationCount = 0;

        addEventListener("keydown", (e) => {
            if (e.key === "e") {
                this.handlePlayerCollisions(true);
            }
        })
        this.initHint();
    }

    draw() {
        if ((map.x <= 0 && this.player.xSpeed < 0) || (map.x >= -map.width + innerWidth && this.player.xSpeed > 0)) {
            this.x -= this.player.xSpeed;
        }

        if (localStorage.getItem("succeededQuizz") && localStorage.getItem("succeededQuizz").includes(this.name.toLowerCase().replace(" ", "_"))) {
            c.font = "40px 'impact'";
            c.textAlign = "center";
            c.fillStyle = "green";
        } else {
            c.font = "40px 'impact'";
            c.textAlign = "center";
            c.fillStyle = "white";
        }

        let textX = this.x + this.width / 2;

        c.fillText(this.name, textX, this.y - 50);
        c.drawImage(this.image, this.x, this.y, this.width, this.height);

        this.iterationCount++;

        if (this.iterationCount % 5 == 0) {
            this.handlePlayerCollisions();
        }
    }

    async printDialog() {
        this.dialogElem = true;
        let dialogElem = new Dialog(this.dialog, this.name, this.dialogHeadPic, this.dialogCallback);
        await dialogElem.animate().then(() => {
            this.dialogElem = false;
        });
    }

    initHint() {
        let id = this.name + "-caracter";
        if (!document.getElementById(id)) {
            this.hint = document.createElement("div");
            this.hint.className = "caracter-hint";
            this.hint.id = id;
            this.hint.innerText = "APPUIE SUR E POUR PARLER";
            document.body.appendChild(this.hint);
        }
    }

    printHint() {
        this.hint.classList.add("show");
    }

    hideHint() {
        this.hint.classList.remove("show");
    }

    handlePlayerCollisions(activate = false) {
        // Si le joueur et le personnage sont sur la même "colonne"
        if (this.x - this.threshold <= this.player.x + this.player.width && this.x + this.width + this.threshold >= this.player.x) {
            if (typeof this.dialog == "string" && !this.dialogElem) {
                if (activate) {
                    this.hideHint();
                    this.printDialog();
                } else {
                    this.printHint();
                }
            }
        } else {
            this.hideHint();
        }
    }
}

