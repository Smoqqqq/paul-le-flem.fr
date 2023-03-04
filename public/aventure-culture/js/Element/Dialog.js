class Dialog {

    /**
     * Fait "parler" un personnage
     * @param {String} text Contenu de l'interaction
     * @param {String} pic tête du personnage
     * @param {String} name Nom du personnage
     */
    constructor(text, name, pic, callback = false) {
        this.text = text;
        this.name = name;
        this.pic = pic;
        this.callback = callback;
        this.transition = 1000;

        this.charDuration = {
            // TIMING
            letter: 50,
            dot: 500,
            comma: 500
        }

        this.textIndex = 0;
        this.insert();
    }

    insert() {
        this.element = document.createElement("div");
        this.element.classList.add("dialog");

        this.element.innerHTML = `
            <div class="dialog-top">
                <div class="dialog-name"><img src="${this.pic}">${this.name}</div>
                <div class="dialog-content"></div>
            </div>
            <div class="dialog-footer">
                <div data-action="dismiss" class="btn-outline">J'ABANDONNE</div>
                <div data-action="accept" class="btn">JE SUIS PRÊT</div>
            </div>
        `;
        document.getElementById("dialogs").appendChild(this.element);

        this.element.querySelector("[data-action='dismiss']").onclick = () => {
            this.remove();
        }

        this.element.querySelector("[data-action='accept']").onclick = () => {
            this.remove();
            this.callback();
        }
    }

    remove() {
        this.element.classList.add("remove");
        setTimeout(() => {
            this.element.remove();
        }, this.transition);
    }

    skipToNextPhrase() {
        const string = this.text.slice(this.textIndex, this.text.length - this.textIndex);
        let dotIndex = string.indexOf(".") > 0 ? string.indexOf(".") + this.textIndex : this.text.length;
        let commaIndex = string.indexOf(",") > 0 ? string.indexOf(",") + this.textIndex : this.text.length;

        let index = (dotIndex > commaIndex) ? commaIndex : dotIndex;

        for (let i = this.textIndex; i < index - 1; i++) {
            this.element.innerHTML += this.text[i];
            this.textIndex++;
        }
    }

    async animate() {
        this.element.querySelector(".dialog-content").textContent += this.text[this.textIndex];
        if (this.textIndex < this.text.length - 1) {
            let duration = (this.text[this.textIndex + 1] == ".") ? this.charDuration.dot : this.charDuration.letter;
            duration = (this.text[this.textIndex + 1] == ",") ? this.charDuration.comma : duration;
            this.textIndex++;
            setTimeout(() => {
                this.animate();
            }, duration)
        } else {
            this.element.classList.add("terminated");
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve("success");
                }, this.transition);
            });
        }
    }
}