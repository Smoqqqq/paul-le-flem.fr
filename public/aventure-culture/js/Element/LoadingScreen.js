class LoadingScreen {
    /**
     * 
     * @param {Number} duration durée de la transition en millisecondes
     * @param {HTMLImageElement} backgroundImage Image de fond
     * @param {Function} callback Action suivant la fin de la transition
     */
    constructor(duration, backgroundImage, callback) {
        this.duration = duration;
        this.backgroundImage = backgroundImage;
        this.callback = callback;

        this.gap = 50;
        this.stepLength = 10;
        this.finalWidth = 600;

        this.initialX = innerWidth / 2 - this.finalWidth / 2;
        this.initialY = innerHeight - this.gap * 6;

        this.loader = {
            x: this.initialX,
            y: this.initialY,
            width: 0,
            height: this.gap,
            background: "white"
        };

        this.nbOfSteps = this.finalWidth / (this.stepLength * 2);

        this.stepDelay = duration / this.nbOfSteps;

        this.drawBackground();
        this.load();
    }

    drawBackground() {
        let placeholder = document.getElementById("logo-placeholder");

        c.fillStyle = BG_COLOR;
        c.fillRect(0, 0, innerWidth, innerHeight);
        // c.drawImage(placeholder, innerWidth / 2 - 200, innerHeight / 2 - 200, 400, 400);

        c.fillStyle = this.loader.background;
        c.font = "300 40px impact";
        c.textAlign = "center";
        c.fillText("AVENTURE CULTURE", this.initialX + this.finalWidth / 2, innerHeight / 2);
    }

    async load() {
        c.fillStyle = this.loader.background;
        for (let i = 0; i < this.loader.width / (this.stepLength * 2); i++) {
            this.loader.x += this.stepLength * 2;
            c.fillRect(this.loader.x, this.loader.y, this.stepLength, this.loader.height);
        }

        let percentage = Math.round(100 * (this.loader.width / this.finalWidth));

        c.font = "300 30px impact";
        c.fillText(`${percentage}%`, this.initialX + this.finalWidth - 50, this.initialY + this.loader.height + 60);
        c.fillText(`chargement`, this.initialX + 95, this.initialY + this.loader.height + 60);

        this.loader.width += this.stepLength * 2;
        this.loader.x = this.initialX;

        if (this.loader.width + this.stepLength * 2 <= this.finalWidth) {
            setTimeout(() => {
                c.clearRect(0, 0, innerWidth, innerHeight);
                this.drawBackground();
                this.load();
                // TIMING (*10)
            }, this.stepDelay * 10);
        } else {
            c.clearRect(0, 0, innerWidth, innerHeight);
            this.callback();
        }
    }
}