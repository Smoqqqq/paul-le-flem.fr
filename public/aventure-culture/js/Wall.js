class Wall {

    /**
     * Affiche un Mur avec des colisions
     * @param {Number} x position horizontale
     * @param {Number} y position verticale
     * @param {Number} width Largueure
     * @param {Number} height Hauteure
     * @param {String} background Couleur CSS valide
     */
    constructor(x, y, width, height, background, player) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.background = background;
        this.player = player;
    }

    draw() {
        // this.handlePlayerCollisions();
        c.fillStyle = this.background;
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    handlePlayerCollisions() {

        // Coliisions en hauteur
        // Si le joueur et le mur sont sur la même "colonne"
        if (this.x <= this.player.x + this.player.width && this.x + this.width >= this.player.x) {

            // Et qu'ils sont sur la même ligne
            if (this.y + this.player.ySpeed <= this.player.y + this.player.height && this.y + this.player.ySpeed + this.height >= this.player.y) {

                if (this.player.y <= this.y) {
                    this.player.y = this.y - this.player.height;
                } else {
                    this.player.y = this.y + this.height;
                }

                if (this.player.jumping) {
                    this.player.stopJump = true;
                }

                this.player.ySpeed = 0;
            }
        }

        // Collisions coté
        // Si le joueur et le mur sont sur la même "ligne"
        if (this.y < this.player.y + this.player.height && this.y + this.height > this.player.y) {

            // Et qu'ils sont sur la même colonne
            if (this.x + this.player.xSpeed <= this.player.x + this.player.width && this.x + this.player.xSpeed + this.width >= this.player.x) {
                this.player.ySpeed = 0;
            }
        }
    }
}