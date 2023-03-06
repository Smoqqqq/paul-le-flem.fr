class TextScroll {
    constructor(root) {
        this.root = root;
        this.offset = 0;

        this.getTexts();
        this.initAnimation();
    }

    getTexts() {
        let texts = this.root.querySelectorAll(".text");
        this.texts = [];

        for (let i = 0; i < texts.length; i++) {
            this.texts.push({
                elem: texts[i],
                textContent: texts[i].getAttribute("data-text-content") + "          ",
                direction: texts[i].getAttribute("data-direction"),
                charIndex: 0
            });

            this.texts[i].elem.innerHTML = this.texts[i].textContent.replaceAll(" ", "&nbsp;");
            this.texts[i].elem.innerHTML += this.texts[i].textContent.replaceAll(" ", "&nbsp;");
            this.texts[i].elem.innerHTML += this.texts[i].textContent.replaceAll(" ", "&nbsp;");
            this.texts[i].elem.innerHTML += this.texts[i].textContent.replaceAll(" ", "&nbsp;");
        }

        let height = innerWidth > 992 ? 100 : 48;

        this.root.style.height = this.texts.length * height + "px";
    }

    initAnimation() {
        setInterval(() => {
            this.animate();
        }, 50)
    }

    animate() {
        this.offset += 2;

        this.texts.forEach(text => {
            if (text.direction === "left") {
                let letter = (text.textContent[text.textContent.length - text.charIndex - 1] === " ") ? "&nbsp;" : text.textContent[text.textContent.length - text.charIndex - 1];
                text.elem.innerHTML = letter + text.elem.innerHTML;
            } else {
                let letter = (text.textContent[text.charIndex] === " ") ? "&nbsp;" : text.textContent[text.charIndex];
                text.elem.innerHTML += letter;
            }

            text.charIndex++;

            if(text.charIndex === text.textContent.length) {
                text.charIndex = 0;
            }

            if (text.direction === "left") {
                text.elem.style.right = -this.offset + "px";
            } else {
                text.elem.style.left = -this.offset + "px";
            }
        });
    }
}

export default TextScroll;