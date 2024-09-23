let player;

class Design extends Level {
    init() {
        this.caracters = [
            new Caracter(
                this.player,
                "Steve Jobtimisation",
                document.getElementById("steve-jobs"),
                innerWidth,
                WALL_Y - 373,
                158,
                373,
                "Salut à toi jeune aventurier, es-tu prêt à subir un interrogatoire qui va tester tes connaissances sur la réduction de l'impact logiciel ? ",
                "img/head_steve_jobs.png",
                this.steveJobsCallback
            ),

            new Caracter(
                this.player,
                "James Dyson que c'est bon",
                document.getElementById("james-dyson"),
                innerWidth * 3,
                WALL_Y - 373,
                158,
                373,
                "Salut à toi jeune aventurier, es-tu prêt à subir un interrogatoire qui va tester tes connaissances sur la réduction de l'impact logiciel ? ",
                "img/head_james_dyson.png",
                this.jamesDysonCallback
            ),
        ];

        this.walls = [
            new Wall(0, WALL_Y, map.width * 5, 40, "grey", this.player)
        ];
    }

    steveJobsCallback() {
        let content = {
            tabs: {
                intro: {
                    title: "Introduction",
                    content: "La réduction d'impact logiciel est une discipline essentielle dans le domaine du développement informatique moderne. Elle vise à minimiser les conséquences négatives associées à la conception, au déploiement et à l'utilisation de logiciels, notamment en ce qui concerne leur empreinte écologique, leur efficacité énergétique, et leur impact sur les ressources matérielles et humaines. Avec la croissance exponentielle des technologies numériques, la question de l'impact environnemental des logiciels devient de plus en plus pressante. Ainsi, la réduction de cet impact est devenue une préoccupation majeure pour les développeurs, les entreprises et les utilisateurs soucieux de préserver l'environnement tout en optimisant les performances des applications. Ce paragraphe introductif propose d'explorer les principes fondamentaux de la réduction d'impact logiciel ainsi que ses implications et ses applications dans différents contextes.",
                }
            },
            quizz: {
                title: "QUIZZ",
                user: "steve_jobs",
                questions: {
                    one: {
                        question: "Quel est le système le plus efficace en énergie ?",
                        propositions: {
                            one: {
                                answer: "Windows",
                                valid: false
                            },
                            two: {
                                answer: "Linux",
                                valid: true
                            }
                        }
                    },
                    two: {
                        question: "Quel type d'élément consomme le plus de bande passante sur une page web ?",
                        propositions: {
                            one: {
                                answer: "Les images",
                                valid: false
                            },
                            two: {
                                answer: "Les vidéos",
                                valid: true
                            },
                            three: {
                                answer: "Les liens",
                                valid: false
                            },
                            four: {
                                answer: "Les textes",
                                valid: false
                            }
                        }
                    },
                    three: {
                        question: "Quel est l'ordre de grandeur de l'économie potentielle de CO2 en vidant sa boite mail ?",
                        propositions: {
                            one: {
                                answer: "Grammes",
                                valid: false
                            },
                            two: {
                                answer: "Kilogrammes",
                                valid: true
                            },
                            three: {
                                answer: "Tonnes",
                                valid: false
                            }
                        }
                    },
                    four: {
                        question: "Quels sont les hébergeurs les plus éco-responsables ?",
                        propositions: {
                            one: {
                                answer: "Planet Hoster et EX2",
                                valid: true
                            },
                            two: {
                                answer: "OVH et Gandi",
                                valid: false
                            },
                            three: {
                                answer: "Amazon et Google cloud",
                                valid: false
                            }
                        }
                    },
                    five: {
                        question: "Quel navigateur est le plus écologique ?",
                        propositions: {
                            one: {
                                answer: "Google Chrome",
                                valid: false
                            },
                            two: {
                                answer: "Lilo",
                                valid: false
                            },
                            three: {
                                answer: "Écosia",
                                valid: true
                            }
                        }
                    }
                }
            }
        }

        new CaracterQuizz(content);
    }

    jamesDysonCallback() {
        let content = {
            tabs: {
                intro: {
                    title: "Introduction",
                    content: "<p>La réduction d'impact logiciel est une discipline essentielle dans le domaine du développement informatique moderne. Elle vise à minimiser les conséquences négatives associées à la conception, au déploiement et à l'utilisation de logiciels, notamment en ce qui concerne leur empreinte écologique, leur efficacité énergétique, et leur impact sur les ressources matérielles et humaines. Avec la croissance exponentielle des technologies numériques, la question de l'impact environnemental des logiciels devient de plus en plus pressante. Ainsi, la réduction de cet impact est devenue une préoccupation majeure pour les développeurs, les entreprises et les utilisateurs soucieux de préserver l'environnement tout en optimisant les performances des applications. Ce paragraphe introductif propose d'explorer les principes fondamentaux de la réduction d'impact logiciel ainsi que ses implications et ses applications dans différents contextes.</p>",
                }
            },
            quizz: {
                title: "QUIZZ",
                user: "james_dyson",
                questions: {
                    one: {
                        question: "Quel format(s) d'images sont les plus léger et adapté au format web ?",
                        propositions: {
                            one: {
                                answer: "JPEG et PNG",
                                valid: false
                            },
                            two: {
                                answer: "HEIC",
                                valid: false
                            },
                            tree: {
                                answer: "WebP et AVIF",
                                valid: true
                            }
                        }
                    },
                    two: {
                        question: "Quel système mobile est le plus énergivore ?",
                        propositions: {
                            one: {
                                answer: "Android",
                                valid: true
                            },
                            two: {
                                answer: "IOS",
                                valid: true
                            }
                        }
                    },
                    three: {
                        question: "Existe-il des moteurs de recherche neutres en carbonne ?",
                        propositions: {
                            one: {
                                answer: "Oui",
                                valid: true
                            },
                            two: {
                                answer: "Non",
                                valid: false
                            }
                        }
                    },
                }
            }
        };

        new CaracterQuizz(content);
    }

    endLevel() {
        let button = new ActionButton("Ouvrir le message", "/aventure-eco-logic/img/certificat_reussite_niveau_1_aventure_culture.pdf", true);
        button.setBoundaries(map.width - innerWidth, innerWidth / 1.5);
    }
}

