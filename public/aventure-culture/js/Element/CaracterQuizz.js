class CaracterQuizz {
    constructor(content) {
        this.content = content;
        this.element = document.createElement("div");
        this.element.className = "caracter-quizz";
        this.render();
        this.listen();

        this.notification = document.createElement("div");
        this.notification.className = "caracter-quizz-notification";
        this.element.append(this.notification);
    }

    render() {
        let nav = document.createElement("div");
        nav.className = "caracter-quizz-nav";

        let body = document.createElement("div");
        body.className = "caracter-quizz-body";

        let i = 0;
        for (const key in this.content.tabs) {

            let active = (i === 0) ? "active" : "";
            let style = (i === 0) ? "" : `style="display: none"`;

            nav.innerHTML += `<div class="caracter-quizz-nav-item ${active}">${this.content.tabs[key].title}</div>`;
            body.innerHTML += `<div class="caracter-quizz-body-tab" ${style}>${this.content.tabs[key].content}</div>`;
            i++
        }

        let closeToggle = document.createElement("div");
        closeToggle.className = "caracter-quizz-close";
        closeToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        `;

        this.element.append(nav);
        this.element.append(body);
        this.element.append(closeToggle);

        document.body.appendChild(this.element);

        this.renderQuizz();
    }

    renderQuizz() {
        let quizz = this.content.quizz;

        // let html = `<h1>${quizz.title}</h1>`;
        let html = ``;

        for (const question in quizz.questions) {
            html += `
                <h2>${quizz.questions[question].question}</h2>
                <fieldset>
            `;

            let name = encodeURI(quizz.questions[question].question);

            for (const proposition in quizz.questions[question].propositions) {
                html += `
                    <label for="${name}">
                        <input type="radio" data-valid="${quizz.questions[question].propositions[proposition].valid}" name="${name}" />
                    ${quizz.questions[question].propositions[proposition].answer}</label>
                `;
            }

            html += `</fieldset>`;
        }

        html += `
            <div class="caracter-quizz-submit">Valider</div>
        `;

        let nav = document.createElement("div");
        nav.innerHTML += `<div class="caracter-quizz-nav-item">${quizz.title}</div>`;

        let body = document.createElement("div");
        body.innerHTML += `<div class="caracter-quizz-body-tab" style="display: none">${html}</div>`;

        this.element.querySelector(".caracter-quizz-nav").append(nav);
        this.element.querySelector(".caracter-quizz-body").append(body);
    }

    listen() {
        this.toggles = this.element.querySelectorAll(".caracter-quizz-nav-item");
        this.tabs = this.element.querySelectorAll(".caracter-quizz-body-tab");
        let closeToggle = this.element.querySelector(".caracter-quizz-close");
        let submit = this.element.querySelector(".caracter-quizz-submit");

        for (let i = 0; i < this.toggles.length; i++) {
            this.toggles[i].addEventListener("click", () => {
                this.print(i);
            })
        }

        closeToggle.addEventListener("click", () => {
            this.close()
        })

        submit.addEventListener("click", () => {
            this.checkAnswers();
        })

        let labels = this.element.querySelectorAll("label");

        for(let i = 0; i < labels.length; i++) {
            labels[i].addEventListener("click", () => {
                let input = labels[i].querySelector("input");
                input.checked = true;
            })
        }
    }

    print(active) {
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].style.display = "none";
        }
        this.tabs[active].style.display = "block";
    }

    close() {
        this.element.remove();
    }

    checkAnswers() {
        let radios = this.element.querySelectorAll("input[type='radio']");
        let validCount = 0;

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                if (radios[i].getAttribute("data-valid") != "true") {
                    this.printError();
                    return false;
                } else {
                    validCount++;
                }
            }
        }

        if(validCount < Object.keys(this.content.quizz.questions).length) {
            this.printError();
            return false;
        }

        this.notification.innerHTML = `
            <h1>Wouhou ! Vous avez eu bon a toutes les questions !</h1>
            <p>Vous avez validé ce quizz, félicitations :)</p>
            <div class="caracter-quizz-finish">Terminer</div>
        `;

        this.notification.querySelector(".caracter-quizz-finish").addEventListener("click", () => {
            this.close();
        });

        this.notification.classList.add("show");

        console.log(this.content.quizz.user);

        const event = new CustomEvent("quizzsubmit", {
            detail: {
                quizz: this.content.quizz.user
            }
        })

        document.dispatchEvent(event);
    }

    printError() {
        this.notification.innerHTML = `
            <h1>OUPS ! Vos réponses ne sont pas tout a fait correct...</h1>
            <p>Vous devez avoir ${Object.keys(this.content.quizz.questions).length} / ${Object.keys(this.content.quizz.questions).length} pour compléter le quizz !</p>
            <div class="caracter-quizz-retry" onclick='this.parentNode.classList.remove("show")'>Réessayer</div>
        `;

        this.notification.classList.add("show");
    }
}