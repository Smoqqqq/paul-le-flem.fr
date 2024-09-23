class Game {
    constructor() {
        // réinitialisation de la complétion des quizz
        localStorage.removeItem("succeededQuizz")
        // On apelle un écran de chargement
        new LoadingScreen(200, document.getElementById("bg-image-loader") , () => {
            this.dialog1() // la fonction qui suivra sera le dialogue d'intro
        });
        this.levels = this.getLevels();
        this.addQuizzSubmitListener();
    }

    // Dialogue d'introduction au jeu
    dialog1() {
        new DialogScreen(
            [
                "Bienvenue dans l'aventure éco-logic",
                "Qui que vous soyez",
                "Testez vos connaissances sur l'impact logiciel",
                "Prêt pour vous enrichir culturellement ?"
            ],
            "white",
            this.startToPlayBtn // appelera l'affichage du boutton "commencer a jouer une fois terminé"
        );
    }

    // Affiche les bouttons "JE SUIS PRÊT" et "J'ABANDONNE"
    startToPlayBtn() {
        let btn = document.createElement("div");
        btn.innerText = "JE SUIS PRÊT";
        btn.className = "btn";
        btn.onclick = () => {
            game.start();
        }

        let restartBtn = document.createElement("div");
        restartBtn.innerText = "J'ABANDONNE";
        restartBtn.className = "btn-outline";
        restartBtn.onclick = () => {
            location.reload();
        }

        let holder = document.createElement("div");
        holder.id = "btn-holder";

        holder.appendChild(restartBtn);
        holder.appendChild(btn);
        document.body.appendChild(holder);
    }

    getLevels() {
        this.levels = {
            design: {
                name: "James Dyson",
                start: () => {
                    return new Design(this, this.playerConfig);
                }
            }
        }
        return this.levels;
    }

    start() {
        this.skinMenu = new SkinMenu(this.player, () => {
            new PickLevelMenu((selection) => {
                this.startLevel(selection)
            });
        });

        this.playerConfig = this.skinMenu.getPlayerConfig();

        document.getElementById("btn-holder").remove();
    }

    startLevel(selection) {
        this.selection = selection;
        this.currentLevel = this.getLevels()[this.selection.level].start();

        document.getElementById("startpopup").classList.add("open");

        this.checkForGameEnd();
    }

    addQuizzSubmitListener() {
        document.addEventListener("quizzsubmit", (e) => {
            if (!localStorage.getItem("succeededQuizz") || !localStorage.getItem("succeededQuizz").includes(e.detail.quizz)) {
                let current = (localStorage.getItem("succeededQuizz")) ? localStorage.getItem("succeededQuizz") : "";
                localStorage.setItem("succeededQuizz", current + e.detail.quizz);
            }

            this.checkForGameEnd();
        })
    }

    checkForGameEnd() {
        if (this.isGameEnded()) {
            map.frontPlane = document.getElementById("front-plane-game-end");
            this.currentLevel.endLevel()
        }
    }

    isGameEnded() {
        let quizz = [
            "steve_jobs",
            "james_dyson",
            // "philippe_starck",
            // "verner_panton"
        ];

        for (let i = 0; i < quizz.length; i++) {
            if (!localStorage.getItem("succeededQuizz") || !localStorage.getItem("succeededQuizz").includes(quizz[i])) {
                return false;
            }
        }

        return true;
    }
}