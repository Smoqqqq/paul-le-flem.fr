class TextBlockAnimation {
    constructor() {
        if (innerWidth > 992) {
            let delay = false;
            window.addEventListener("scroll", () => {
                if (!delay) {
                    requestAnimationFrame(() => {
                        delay = true;
                        this.animate();

                        setTimeout(() => {
                            delay = false;
                        }, 50)
                    })
                }
            })
        }
    }

    animate() {
        let blocks = document.getElementsByClassName("text-block");

        for (let i = 0; i < blocks.length; i++) {
            let y = blocks[i].getBoundingClientRect().y;

            if (y > 0 && y < innerHeight) {
                let height = blocks[i].getBoundingClientRect().height;
                let h2 = blocks[i].querySelector(".title");

                if (h2) {
                    let distance = height * (innerHeight - y) / innerHeight / 6;
                    h2.style.transform = `translateY(${distance}px)`;
                }
            }
        }
    }
}

export default TextBlockAnimation;