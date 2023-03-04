class PickLevelMenu extends Menu {

    constructor(callback) {
        super();
        this.callback = callback;

        this.element = document.getElementById("pick-level-menu");

        this.levels = this.element.querySelectorAll(".level");

        this.selection = {
            level: false
        };

        this.init();
    }

    addLevelEvents() {
        for (let i = 0; i < this.levels.length; i++) {
            this.levels[i].addEventListener("click", () => {
                this.selection.level = this.levels[i].getAttribute("data-level");
                this.callback(this.selection);
                this.element.remove();
            })
        }
    }

    getSelection() {
        return this.selection;
    }

    init() {
        this.element.style.display = "flex";
        this.addLevelEvents();
    }

}