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
                        }, 100)
                    })
                }
            })
        }
    }

    animate() {
        let images = document.querySelectorAll(".image-zoom img");

        for (let i = 0; i < images.length; i++) {
            let y = images[i].getBoundingClientRect().y;
            let height = images[i].getBoundingClientRect().height;
            if (y + height > 0 && y < innerHeight) {
                let distance = 1.1 - Math.round(y) / innerHeight / 20;
                images[i].style.transform = `scale(${distance})`;
            }
        }
    }
}

export default ImageZoomAnimation;