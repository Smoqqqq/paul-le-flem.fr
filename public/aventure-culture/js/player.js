class Player {

    constructor() {
        this.image = document.getElementById("player");
        this.images = {
            left: "agathe_chemise_pantalon_left.png",
            right: "agathe_chemise_pantalon_right.png"
        };
        this.height = this.image.getBoundingClientRect().height;
        this.width = this.image.getBoundingClientRect().width;
        this.xSpeed = 0;
        this.lastDirection = "right";
        this.x = innerWidth / 2 - this.width / 2;
        this.y = WALL_Y - this.height;
        this.walkSpeed = 15;
        this.jumpSpeed = 3;
        this.jumpDistance = 100;
        this.jumping = false;
        this.movement = {
            x: true,
            y: true
        };
        this.jumpTimeout = [];

        this.addEvents();
    }


    stopJump() {
        this.jumping = false;
        for (let i = 0; i < this.jumpTimeout.length; i++) {
            clearTimeout(this.jumpTimeout[i]);
        }
    }

    draw() {
        this.idealPosition = innerWidth / 2 - this.width / 2;

        let img = (this.lastDirection == "left") ? this.images.left : this.images.right;

        this.image.setAttribute("src", "../../../aventure-culture/img/" + img);

        c.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    addEvents() {
        addEventListener("keydown", (e) => {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    this.xSpeed = -this.walkSpeed;
                    this.lastDirection = "left";
                    break;
                case "ArrowRight":
                case "KeyD":
                    this.xSpeed = this.walkSpeed;
                    this.lastDirection = "right";
                    break;
            }
        })

        addEventListener("keyup", (e) => {
            switch (e.code) {
                case "ArrowLeft":
                case "KeyA":
                    if (this.xSpeed < 0) this.xSpeed = 0;
                    break;
                case "ArrowRight":
                case "KeyD":
                    if (this.xSpeed > 0) this.xSpeed = 0;
                    break;
            }
        })
    }

}