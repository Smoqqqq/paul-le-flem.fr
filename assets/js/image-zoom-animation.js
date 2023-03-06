class ImageZoomAnimation {
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
        let images = document.querySelectorAll(".image-zoom img");

        for (let i = 0; i < images.length; i++) {
            let distance = 1.1 - Math.round(images[i].getBoundingClientRect().y) / innerHeight / 20;
            images[i].style.transform = `scale(${distance})`;
        }
    }
}

export default ImageZoomAnimation;