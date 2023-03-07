/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/index.scss';

// start the Stimulus application
import '../bootstrap';
import TextScroll from './text-scroll';
import TextBlockAnimation from "./text-block-animation";
import ImageZoomAnimation from './image-zoom-animation';

window.addEventListener("turbo:load", () => {

    animateLoader();

    const cursor = document.getElementById('cursor');
    const cursor_triggers = document.getElementsByClassName("cursor_trigger");
    const cursor_soon_triggers = document.getElementsByClassName("cursor_soon_trigger");
    const cursor_opacity_triggers = document.querySelectorAll(".cursor_opacity_trigger, .simple-link");

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = String(e.x + "px");
        cursor.style.top = String(e.y + "px");
    })

    for (let i = 0; i < cursor_triggers.length; i++) {
        cursor_triggers[i].addEventListener('mouseenter', () => {
            cursor.innerText = "OUVRIR";
            cursor.classList.add('hovering');
        })
        cursor_triggers[i].addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            cursor.innerText = "";
        })
    }

    for (let i = 0; i < cursor_soon_triggers.length; i++) {
        cursor_soon_triggers[i].addEventListener('mouseenter', () => {
            cursor.innerText = "BIENTÔT";
            cursor.classList.add('hovering');
        })
        cursor_soon_triggers[i].addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            cursor.innerText = "";
        })
    }

    for (let i = 0; i < cursor_opacity_triggers.length; i++) {
        cursor_opacity_triggers[i].addEventListener('mouseenter', () => {
            cursor.classList.add('hovering-opacity');
        })
        cursor_opacity_triggers[i].addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering-opacity');
        })
    }

    let textScrolls = document.getElementsByClassName("text-scroll");

    for (let i = 0; i < textScrolls.length; i++) {
        new TextScroll(textScrolls[i]);
    }

    document.querySelectorAll('a[href*="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            let target = document.querySelector("#" + this.getAttribute('href').split("#")[1]);

            document.getElementById("navbar").classList.remove("open");

            if (target) {
                console.log(target.getBoundingClientRect());

                let offset = (target.getAttribute("data-scroll-offset")) ? target.getAttribute("data-scroll-offset") : 0;

                window.scroll({
                    left: 0,
                    top: target.getBoundingClientRect().y - offset + document.documentElement.scrollTop || document.body.scrollTop,
                    behavior: "smooth"
                })
            } else {
                Turbo.visit(anchor.getAttribute("href").split("#")[0]);

                function navigateToAnchor() {
                    let target = document.querySelector("#" + this.getAttribute('href').split("#")[1]);

                    if (target) {
                        setTimeout(() => {
                            console.log(target.getBoundingClientRect());
                            let offset = (target.getAttribute("data-scroll-offset")) ? target.getAttribute("data-scroll-offset") : 0;

                            window.scroll({
                                left: 0,
                                top: target.getBoundingClientRect().y - offset + document.documentElement.scrollTop || document.body.scrollTop,
                                behavior: "smooth"
                            })
                        }, 100)
                    }

                    removeEventListener("turbo:load", navigateToAnchor);
                }

                navigateToAnchor = navigateToAnchor.bind(this);

                addEventListener("turbo:load", navigateToAnchor);
            }
        });
    });

    new TextBlockAnimation();
    new ImageZoomAnimation();
})

function animateLoader() {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("loaded");
        loader.classList.remove("loading");
        loader.style.transition = "0.5s";
        setTimeout(() => {
            loader.classList.add("visible");
            loader.classList.remove("loaded");

            setTimeout(() => {
                loader.classList.remove("visible");
            }, 400)
        }, 400)
    }, 400);
}

function animateOutLoader() {
    const loader = document.getElementById("loader");
    loader.classList.add("loading");
}

addEventListener("turbo:click", (e) => {
    e.preventDefault();
    visit = true;
    animateOutLoader();

    setTimeout(() => {
        Turbo.visit(e.detail.url);
    }, 400)
})