class DialogScreen {
    constructor(phrases, textColor, callback) {
        this.textColor = textColor;
        this.phrases = phrases;
        this.callback = callback;
        this.currentPhrase = 0;
        this.x = innerWidth / 3;
        this.y = innerHeight / 2;
        this.keyEvent = null;
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.print();
        this.listen();
        this.isWritting = true;
    }

    listen() {
        addEventListener("keydown", this.handleKeyDown, false)
    }

    handleKeyDown(e) {
        if (e.key === "Enter" && !this.isWritting) {
            if (this.currentPhrase < this.phrases.length - 1) {
                this.currentPhrase += 1;
                this.print();
            } else {
                document.getElementById("dialog-elem")?.remove();
                document.getElementById("hint")?.remove();
                removeEventListener("keydown", this.handleKeyDown);
                this.callback();
            }
        }
    }

    print() {
        document.getElementById("dialog-elem")?.remove();
        document.getElementById("hint")?.remove();
        let phrases = "";
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.fillStyle = BG_COLOR;
        c.fillRect(0, 0, innerWidth, innerHeight);
        this.elem = document.createElement("div");
        this.elem.id = "dialog-elem";
        this.isWritting = true;

        document.body.appendChild(this.elem);

        for (let i = 0; i < this.phrases[this.currentPhrase].length; i++) {
            setTimeout(() => {
                phrases += this.phrases[this.currentPhrase][i];
                c.fillStyle = this.textColor;
                this.elem.innerText = phrases;

                if (i === this.phrases[this.currentPhrase].length - 1) {
                    this.isWritting = false;

                    let hint = document.createElement("div");
                    hint.innerText = "Appuyez sur entree ↵";
                    hint.id = "hint";

                    document.body.appendChild(hint);
                }
                // TIMING
            }, i * 5)
        }
    }
}