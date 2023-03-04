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
})