const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const WALL_Y = innerHeight / 1.2;

canvas.width = innerWidth;
canvas.height = innerHeight;

const BG_COLOR = getComputedStyle(document.querySelector(':root')).getPropertyValue('--theme');

let game;

addEventListener("DOMContentLoaded", () => {
    game = new Game();
})