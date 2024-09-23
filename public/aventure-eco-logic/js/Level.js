class Level {
    constructor(game, playerConfig) {
        this.player = new Player();
        this.game = game;

        for (const [key, value] of Object.entries(playerConfig)) {
            this.player[key] = value;
        }

        this.frameRate = 1000 / 144;

        this.init();
        this.eventLoop();
    }

    eventLoop() {
        clearInterval(this.gameInterval);
        this.gameInterval = setInterval(() => {
            requestAnimationFrame(() => {
                this.clearCanvas();
                // no gravity => no need to compute collisions
                // this.handleWallsCollisions();
                this.drawMap();
                this.drawWalls();
                this.drawCaracters();
                this.player.draw();
            })
        }, this.frameRate);
    }

    clearCanvas() {
        c.clearRect(0, 0, innerWidth, innerHeight);
    }

    drawWalls() {
        for (let i = 0; i < this.walls.length; i++) {
            if ((map.x <= 0 && this.player.xSpeed < 0) || (map.x >= -map.width + innerWidth && this.player.xSpeed > 0)) {
                this.walls[i].x += map.xSpeed;
            }
            this.walls[i].draw();
        }
    }

    drawMap() {
        if ((map.x <= 0 && this.player.xSpeed < 0) || (map.x >= -map.width + innerWidth && this.player.xSpeed > 0)) {
            map.x -= this.player.xSpeed;
        }

        c.drawImage(map.backPlane, map.x / 2 - 50, map.y, map.width, map.height);
        c.drawImage(map.frontPlane, map.x, map.y, map.width, map.height);
    }

    drawCaracters() {
        for (let i = 0; i < this.caracters.length; i++) {
            if ((map.x <= 0 && this.player.xSpeed < 0) || (map.x >= -map.width + innerWidth && this.player.xSpeed > 0)) {
                this.caracters[i].x += map.xSpeed;
            }
            this.caracters[i].draw();
        }
    }

    // unused
    handleWallsCollisions() {
        for (let i = 0; i < this.walls.length; i++) {
            this.walls[i].handlePlayerCollisions();
        }
    }

    init() {
        console.error("Cette méthode doit être implémenté manuellement par niveau");
        return false;
    }

    endLevel() {
        console.error("Cette méthode doit être implémenté manuellement par niveau");
        return false;
    }
}