class ActionButton {
    constructor(text, link, targetBlank = false) {
        this.text = text;
        this.link = link;
        this.targetBlank = targetBlank;
        this.boundaries = {};

        this.button = document.createElement("a");
        this.button.classList.add("action-button");
        this.button.innerText = this.text;
        this.button.href = this.link;
        if(this.targetBlank) this.button.setAttribute("target", "_blank");
        document.body.append(this.button);
    }

    setBoundaries(x, width) {
        this.boundaries.x = x;
        this.boundaries.width = width;

        setInterval(() => {
            this.checkBoundaries();
        }, 100);
    } 

    checkBoundaries() {
        if(!this.boundaries.x || !this.boundaries.width) return;

        if(-map.x >= this.boundaries.x && -map.x <= this.boundaries.x + this.boundaries.width) {
            this.insert();
        } else {
            this.remove();
        }
    }

    insert() {
        this.button.classList.add("show");
    }

    remove() {
        this.button.classList.remove("show");
    }
}