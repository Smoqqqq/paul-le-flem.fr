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

addEventListener("turbo:load", () => {
    const cursor = document.getElementById('cursor');
    const cursor_triggers = document.getElementsByClassName("cursor_trigger");
    const cursor_opacity_triggers = document.getElementsByClassName("cursor_opacity_trigger");

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
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: "start"
                });
            } else {
                Turbo.visit(anchor.getAttribute("href").split("#")[0]);

                function navigateToAnchor() {
                    let target = document.querySelector("#" + this.getAttribute('href').split("#")[1]);

                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: "start"
                        });
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