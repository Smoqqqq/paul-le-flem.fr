let player;

class Design extends Level {
    init() {
        this.caracters = [
            new Caracter(
                this.player,
                "Steve Jobs",
                document.getElementById("steve-jobs"),
                innerWidth,
                WALL_Y - 373,
                158,
                373,
                "Salut à toi jeune aventurier, es-tu prêt à subir un interrogatoire qui va t'en apprendre davantage sur ma vie personnelle et professionnelle ? ",
                "../../../aventure-culture/img/head_steve_jobs.png",
                this.steveJobsCallback
            ),

            new Caracter(
                this.player,
                "James Dyson",
                document.getElementById("james-dyson"),
                innerWidth * 1.75,
                WALL_Y - 373,
                158,
                373,
                "Hello, beaucoup connaissent la marque Dyson, mais peu connaissent son créateur. Je pense qu'il est temps de découvrir par qui a été créé cette enseigne.",
                "../../../aventure-culture/img/head_james_dyson.png",
                this.jamesDysonCallback
            ),

            new Caracter(
                this.player,
                "Philippe Starck",
                document.getElementById("philippe-starck"),
                innerWidth * 2.5,
                WALL_Y - 373,
                158,
                373,
                "Tu ne me connais pas encore ? Ne t'inquiète pas tu sauras bientôt qui je suis. Prêt ?",
                "../../../aventure-culture/img/head_philippe_starck.png",
                this.philippeStarckCallback
            ),

            new Caracter(
                this.player,
                "Verner Panton",
                document.getElementById("verner-panton"),
                innerWidth * 3.25,
                WALL_Y - 373,
                158,
                373,
                "Tu n'as jamais entendu parler de moi ? Je comprends. Mais je pense que tu rates quelques chose, alors viens découvrir mon univers.",
                "../../../aventure-culture/img/head_verner_panton.png",
                this.vernerPantonCallback
            ),
        ];

        this.walls = [
            new Wall(0, WALL_Y, map.width * 5, 40, "grey", this.player)
        ];
    }

    steveJobsCallback() {

        let content = {
            tabs: {
                style: {
                    title: "BIOGRAPHIE",
                    content: `
                    <p>Steve Jobs (né le 24 février 1955 et décédé le 5 octobre 2011) est connu notamment pour être le cofondateur et actuel CEO d'Apple. Il est considéré comme un des fondateurs de la micro-informatique pour avoir introduit l'ordinateur dans les foyers. Au début des années 80, Steve Jobs est le seul à cerner le potentiel commercial de l'interface graphique couplée avec l'usage d'une souris développée au Xerox PARC, dont il s'inspire pour le lancement de l'Apple Lisa en 1983, puis du Macintosh en 1984. Une innovation qui reste aujourd'hui encore le standard général. En 1985, Steve jobs est destitué de son rôle de CEO d'Apple. Ildécide alors de créer NeXT et les studios d'animation Pixar, avant de revenir prendre la direction de l'entreprise qu'il a fondée (Apple) en 1997. S'en suit dans les années 2000 le lancement des succès planétaires de l'iPod et de l'iPhone. Il est alors considéré en 2009 comme la 43ème fortune américaine.</p><br>
                    <img src="../../../aventure-culture/img/portrait_steve_jobs.png" alt="Réalisations Steve Jobs" style="width: 100%;"><br><br>
                    <h1>RELATIONS AMOUREUSES</h1>
                    <p>Durant sa vie, Steve Jobs va enchaîner les histoires d'amour. En 1978, à la suite de sa première relation amoureuse avec Chrisann Brennan, il devient père d'une jeune fille : Lisa Brennan Jobs. Chrisann élève seule leur fille car Steve Jobs ne reconnaît pas son rôle de père et il nie carrément, prétendant être stérile. À la même période, Steve Jobs lance l'Apple Lisa (un des premiers ordinateurs personnels à posséder une souris et une interface graphique). De 1982 jusqu'en 1985, Jobs a une relation avec Joan Baez. Puis en 1989 il fait la rencontre de Laurene Poxwell, avec qui il décide de se marier le 18 mars 1991. S'en suit la naissance de ses trois autres enfants : Reed, Erin et Eve.</p>
                    <h1>DÉCÈS</h1>
                    <p>Le 5 octobre 2011, alors agé de 56 ans, Steve Jobs décède à sa résidence de paléo Alto en Californie, à la suite d'un cancer du pancréas. Il luttait contre cette maladie depuis 2003 (année où il a découvert son cancer), subissant plusieurs hospitalisation et arrêts maladie. Il maigrissait à perte de vue au fur et à mesure que sa santé déclinait. Il a démissionné d'Apple le 24 août 2011, quelques mois avant son décès. Sa disparition est annoncée par Apple. Les deux semaines qui ont suivi son décès, le site internet d'Apple lui rend hommage à sa manière en exposant une photo de lui en noir et blanc en page d'accueil. Son enterrement a lieu de manière privée le 7 octobre 2011.</p>`
                },
                realisations: {
                    title: "SES RÉALISATIONS",
                    content: `<img src="../../../aventure-culture/img/realisations_steve_jobs.png" alt="Réalisations Steve Jobs" style="width: 100%;">`
                },
                pourquoi: {
                    title: "EN QUOI EST-CE UN MENTOR ?",
                    content: `<h1>LA PERSONNE</h1>
                    <p>Steve Jobs est un grand homme avec une carrière professionnelle qui donne envie à plus d'une personne. Il incarne l'homme à qui tout réussi professionnellement parlant. Il donnait d'ailleurs régulièrement des astuces, des conseils pour trouver sa voie, ce pour quoi l'on était fait. 
                    <br>
                    <br>
                    Steve Jobs a dit « <span class="textRed">Il faut découvrir ce que l'on aime. La seule manière de faire du bon travail est d'aimer ce que l'on fait. Si vous n'avez pas encore trouvé, continuez de chercher. Et ne baissez pas les bras jusqu'à ce que vous ayez trouvé.</span> »
                    <br>
                    <br>
                    Un des conseils que Steve Jobs souhaitait partagé est le fait de devoir à tout prix détecter son talent.  Selon lui « <span class="textRed">Chacun de nous est excellent dans quelque chose. L'ennui, c'est que beaucoup de gens passent la plus grande partie de leur vie à faire quelque chose d'autre. Sachez pour quoi vous êtes fait… Ce n'est jamais trop tard.</span> »
                    <br>
                    <br>
                    Il estime que pour s'épanouir et réussir professionnellement, il faut conjuguer talent et plaisir. « <span class="textRed">Le travail va occuper une large part de votre existence et la seule façon d'être pleinement satisfait, c'est de faire ce que l'on estime être du bon travail. Et la seule façon de faire du bon travail, c'est d'aimer réellement ce que l'on fait.»</span> »
                    <br>
                    <br>
                    Si Steve Jobs était encore de ce monde, et qu'il était à nos côtés, il nous dirait probablement de ne pas abandonner et de tout faire pour vivre ce pour quoi l'on est destiné. « <span class="textRed">Si vous capitulez maintenant, vous n'avez aucune chance d'échapper à votre réalité. Mais si vous persistez et gardez la foi, vous avez une excellente chance de forcer le destin et de vivre une vie heureuse et pleine de sens.</span> »
                    <br>
                    <br>
                    En plus d'avoir réussi sa carrière professionnelle, Steve Jobs est un des mentors que j'ai choisi pour sa force mentale et sa détermination sans faille. Pour lui, rien n'est rédhibitoire et même échouer n'est pas une fin en soit car après un échec vient la réussite. Steve Jobs estime que le vrai fiasco n'est pas de chuter mais de rester à terre.</p>
                    
                    <h1>LE DESIGN</h1>
                    
                    <p>Steve Jobs est un des personnages emblématiques que j'ai choisi de présenter dans ce premier niveau du jeu car il est le fondateur d'Apple, marque dont le nom évoque le design. 
                    <br>
                    <br>
                    iPod, iMac, iPhone, iPad… Les produits conçus par Apple ont dépassé le stade de simple objet pour devenir des icônes à part entière. Depuis la fin des années 90, Apple Computer a fait du design sa marque de fabrique et a transformé les ordinateurs gris et sans âme en bijoux… avec l'aide précieuse de Jonathan Ive, arrivé chez Apple en 1996 et désormais vice-président en charge du design.
                    <br>
                    <br>
                    « <span class="textRed">Apple Computer n'a jamais développé un produit électronique innovant : il n'a pas inventé l'ordinateur, ni le lecteur mp3, ni le téléphone portable. Le fait que les appareils Apple soient considérés comme étant les plus innovants de notre époque peut surtout être expliqué par leur design</span> » explique Ina Grätz, dans la langue de Shakespeare, en guise d'introduction.</p>`
                }
            },
            quizz: {
                title: "QUIZZ",
                user: "steve_jobs",
                questions: {
                    one: {
                        question: "De quel type de cancer Steve Jobs est-il décédé ?",
                        propositions: {
                            one: {
                                answer: "De la moelle osseuse",
                                valid: false
                            },
                            two: {
                                answer: "Du pancréas",
                                valid: true
                            },
                            three: {
                                answer: "Des poumons",
                                valid: false
                            }
                        }
                    },
                    two: {
                        question: "Avec quelle chanteuse américaine célèbre a-t-il eu une relation de trois ans ?",
                        propositions: {
                            one: {
                                answer: "Janis Joplin",
                                valid: false
                            },
                            two: {
                                answer: "Joan Baez",
                                valid: true
                            },
                            three: {
                                answer: "Signe Anderson",
                                valid: false
                            }
                        }
                    },
                    three: {
                        question: "Combien a t-il d'enfants ?",
                        propositions: {
                            one: {
                                answer: "Il a trois enfants qu'il a eu avec Laurene Powell-Jobs",
                                valid: false
                            },
                            two: {
                                answer: "Il a quatre enfant, dont une fille qu'il a eu lors de sa première relation et dont il n'a pas assumé le statut de père",
                                valid: true
                            }
                        }
                    },
                    four: {
                        question: "Qu'est-ce que l'Apple Lisa ?",
                        propositions: {
                            one: {
                                answer: "L'Apple Lisa est un ordinateur personnel lancé par Apple en 1983. C'est l'un des premiers ordinateurs personnels à posséder une souris et une interface graphique",
                                valid: true
                            },
                            two: {
                                answer: "L'Apple Lisa est une des variété de pommes les plus utilisé en France. Son succès vient de sa capacité à répondre au goût des consommateurs, aux exigences de la production et du commerce moderne",
                                valid: false
                            },
                            three: {
                                answer: "L'Apple Lisa est une application mobile créée en 2004 par Steve Jobs dans le but d'aider et former les individus à l'informatique.",
                                valid: false
                            }
                        }
                    },
                    five: {
                        question: "Steve Jobs, en plus d'être fondateur de Apple était aussi…",
                        propositions: {
                            one: {
                                answer: "Fondateur de Pixar",
                                valid: true
                            },
                            two: {
                                answer: "Fondateur de Cartoon Network",
                                valid: false
                            },
                            three: {
                                answer: "Fondateur de Dreamworks",
                                valid: false
                            }
                        }
                    }
                }
            }
        };

        new CaracterQuizz(content);
    }

    jamesDysonCallback() {

        let content = {
            tabs: {
                style: {
                    title: "BIOGRAPHIE",
                    content: `
                    <p>James Dyson est né le 2 mai 1947 au nord du Norfolk, en Angleterre. Il est marié à Deirdre Hindmarsh (actuelle Lady Dyson), et a trois enfants, Emily, Jake et Sam. Surnommé le « Steve Jobs de l'électroménager », James Dyson se déplace en Ferrari grise et en hélicoptère privé pour rejoindre sa demeure imposante de Chelsea, à Londres, possède des vignes et des champs d'oliviers dans le Sud de la France, a vu sa fortune personnelle de 4,2 milliards de dollars dévoilée au classement Forbes 2012… Le plus grand investisseur du Royaume-Uni, en termes de recherche, garde pourtant la tête froide. Son enfance lui ayant enseigné le sens de l'humilité. Benjamin d'une famille de trois enfants, il n'a que 6 ans lorsque son père, professeur de lettres classiques, quitte la maison pour l'hôpital. Il n'y reviendra jamais. Trois ans après sa disparition, le petit garçon de 9 ans se sent seul au monde et chasse son vague à l'âme en dessinant et bricolant. Après ses études au Royal College of Art, il oublie le dessin artistique pour se consacrer au dessin industriel et rejoindre l'équipe de Jeremy Fry, auteur d'un bateau rapide à fond plat, le Sea Truck, destiné à transporter de lourdes charges. Il devient inventeur à son tour avec la brouette « Ballbarrow », capable de filer sur le gazon vert anglais sans laisser aucun sillon grâce à sa roue en forme de ballon.</p><br>
                    <img src="../../../aventure-culture/img/portrait_james_dyson.png" alt="portrait james dyson" style="width: 100%;"><br><br>
                    <h1>RÉALISATIONS</h1>
                    <p>James Dyson est un designer industriel britannique. En faisant le ménage de sa maison de campagne dans les Cotswolds au sud-ouest de l'Angleterre, il constate que le sac de son aspirateur se bouche suite au cumul des poussières, engendrant la perte en puissance de l'appareil. Il décide alors de concevoir un aspirateur sans sac, en ayant recours à la méthode de séparation cyclonique, qui permet de conserver l'énergie de ce dernier.Ce premier modèle baptisé, DC01, voit le jour en 1993, et est proposé au prix indicatif de 200 livres sterling, réalisant un chiffre d'affaires de 2,4 millions de livres sterling, une année plus tard.Il rénove ainsi le segment des aspirateurs en déposant 5127 prototypes de l'aspirateur Dual Cyclone, la gamme d'aspirateur la plus vendue aux États-Unis, appuyant la notoriété de la marque dans plus de 45 pays. Par ailleurs, James Dyson développe l'activité de son groupe en revisitant, entre autres la conception des brouettes par la création d'un modèle qui ne s'enfonce pas dans la boue et un lanceur de bateaux flottants.</p>
                    <h1>SES RÉCOMPENSES</h1>
                    <p>En 1991, le tout premier aspirateur conçu par la société Dyson, le G-Force, est récompensé par le prix du Salon International du Design au Japon. En 1996, la marque Dyson remporte le Trophée Grand Prix et le Prix Consommateur du Design Produit de la part du Conseil du Design Britannique et du Design Business Awards. En 1997, la Dyson Appliances est la première société britannique à recevoir le Prix du Design européen. En 2006, James Dyson reçoit la Cross of British Empire (qui équivaut à la Légion d'honneur) qui lui est remise par Sa Majesté elle-même.</p>`
                },
                realisations: {
                    title: "SES RÉALISATIONS",
                    content: `<img src="../../../aventure-culture/img/realisations_james_dyson.png" alt="Réalisations James Dyson" style="width: 100%;">`
                },
                pourquoi: {
                    title: "EN QUOI EST-CE UN MENTOR ?",
                    content: `<h1>LA PERSONNE</h1>
                    <p>Un des traits de caractère qui représente James Dyson selon moi est la persévérance. Au total, il aura fallu douze longues années de persévérance à James Dyson pour faire de son aspirateur sans sac un succès commercial. Aujourd'hui, pratiquement toutes les grandes marques ont leurs aspirateurs sans sac. Lorsqu'il part à la rencontre d'investisseurs au début des années 1990, quelle n'est pas sa surprise de constater que les 4 millions de livres qu'il a déjà engloutis dans l'aventure ne les intéressent pas. Ce qu'ils veulent, c'est qu'il investisse à nouveau de l'argent. Mais il en faut plus pour décourager James Dyson. En 1992, il lance la production du Dual Cyclone. En 1994, il devient l'aspirateur brosseur le plus vendu en Grande-Bretagne. Quatre ans plus tard, ses produits représentent 20 à 30% du marché britannique et les premiers succès à l'exportation suivront. <span class="textRed">«Depuis le lancement de la marque, nous avons vendu plus de 50 millions d'aspirateurs dans le monde»</span>, rappelle James Dyson… avant de marquer un temps d'hésitation.</p>
                    <p>Un autre point qui m'a fait choisir ce personnage emblématique est son sens de l'humilité. Malgré sa réussite, il garde la tête froide et n'oubli pas comment il est arrivé jusque là.</p>
                    <h2>LE DESIGN</h2>
                    <p>James Dyson est un inventeur né. Toutes ses créations sont plus ingénieuses les unes que les autres. Un design épuré et minimaliste avec une technologie avancée : le combat idéal. J'admire la manière dont il embelli les objets banales du quotidien.</p>`
                }
            },
            quizz: {
                title: "QUIZZ",
                user: "james_dyson",
                questions: {
                    one: {
                        question: "En quelle année est né James Dyson ?",
                        propositions: {
                            one: {
                                answer: "2002",
                                valid: false
                            },
                            two: {
                                answer: "1984",
                                valid: false
                            },
                            tree: {
                                answer: "1947",
                                valid: true
                            }
                        }
                    },
                    two: {
                        question: "De quelle nationalité est James Dyson",
                        propositions: {
                            one: {
                                answer: "Américain",
                                valid: false
                            },
                            two: {
                                answer: "Anglais",
                                valid: true
                            },
                            three: {
                                answer: "Autstralien",
                                valid: false
                            }
                        }
                    },
                    three: {
                        question: "Quel type d'objets à designé James Dyson ?",
                        propositions: {
                            one: {
                                answer: "Du mobilier",
                                valid: false
                            },
                            two: {
                                answer: "Des produits électroménagers",
                                valid: true
                            },
                            three: {
                                answer: "Des luminaires",
                                valid: false
                            }
                        }
                    },
                    four: {
                        question: "Quel est son produit phare ?",
                        propositions: {
                            one: {
                                answer: "L'aspirateur haut de gamme sans sac",
                                valid: true
                            },
                            two: {
                                answer: "La bouilloire électrique avec thermostat réglable",
                                valid: false
                            },
                            three: {
                                answer: "Le purificateur d'air qui filtre les gaz et odeurs",
                                valid: false
                            }
                        }
                    },
                    five: {
                        question: "En 1991, Quelle récompense recoit la société Dyson ?",
                        propositions: {
                            one: {
                                answer: "En 1991, la société Dyson est récompensée pour ses nombreuses innovations depuis sa création.",
                                valid: false
                            },
                            two: {
                                answer: "En 1991, le tout premier aspirateur conçu par la société Dyson, le G-Force, est récompensé par le prix du Salon International du Design au Japon",
                                valid: true
                            }
                        }
                    }
                }
            }
        };

        new CaracterQuizz(content);
    }

    philippeStarckCallback() {

        let content = {
            tabs: {
                style: {
                    title: "BIOGRAPHIE",
                    content: `
                    <p>Philippe Starck, né le 18 janvier 1949 à Paris, est un créateur français dans des domaines variés ; design industriel, architecture, décoration d’intérieur, mobilier urbain, électroménager, bureautique, luminaire, habillage, transport, et même alimentaire. Considéré en France comme un des pionniers du design démocratique, il connaît depuis les années 1980 une renommée internationale, notamment grâce à sa vision et sa philosophie : un objet doit être bon et utile, avant d’être beau.</p>
                    <img src="../../../aventure-culture/img/portrait_philippe_strack.png" alt="portrait philippe starck" style="width: 100%;">
                    <h1>VIE PRIVÉE</h1>
                    <p>Marié à quatre reprises, il est depuis décembre 2007 marié avec Jasmine Abdellatif (ancienne attachée de presse de son entreprise). Sa fille aînée Ara, peintre et musicienne, a collaboré à certains chantiers de son père comme la décoration du palace parisien, l’hôtel Meurice, dont elle a dessiné la toile du plafond du restaurant Le Dali ou plus récemment le vitrail de l’entrée de L’Avenue at Saks, ouvert en janvier 2019. Il possède une dizaine de maisons, notamment à Paris, Venise, au Cap Ferret ou encore à Cascais. Il déclare être autiste lors d’une interview accordée au Huffington Post en 2013.</p>
                    <h1>CARRIÈRE</h1>
                    <p>Starck conçoit en 1969 une structure gonflable et amorce une réflexion sur la matérialité et les lieux de vie. Peu de temps après, Pierre Cardin, lui propose le poste de directeur artistique de sa maison d’édition. </p>
                    <p>Il fonde sa première agence de design industriel, Starck Product, qu’il rebaptisera Ubik en référence au roman de Philip K. Dick, et entame ses collaborations avec les éditeurs italiens, tels que Driade, Alessi, Kartell, et les autrichiens de Drimmer, le suisse Vitra, ou l’espagnol Disform. </p>
                    <p>La conception de Starck en matière de design était de réaliser des produits, qui seraient vendus à des prix abordables et dans des lieux de vente grand public. Rejetant le design simplement pour la beauté ou comme symbole de richesse, Starck espérait que son travail améliorerait la vie des gens en ajoutant un élément d’humour et de surprise aux actes quotidiens tels que se brosser les dents ou cuisiner. </p>
                    <p>C’est en 1983 que le grand public découvre Philippe Starck lorsque le président François Mitterrand, sur la recommandation de Jack Lang, ministre de la Culture, choisit son projet pour la décoration des appartements privés du palais de l’Élysée. Il crée d’ailleurs en 1984, avec une pointe d’humour, le Fauteuil J. à trois pieds, appartenant à la série « Lang ». </p>
                    <p>Le travail de Philippe Starck a progressivement touché tous les domaines où peut s’appliquer le design : mobilier, décoration intérieure, architecture, mobilier urbain, industrie (éolienne, photomaton, Freebox, équipement de la maison (cuisines, ustensiles, revêtements, sanitaires), luminaires, électroménager, bureautique (de la télévision au presse-citron et de la brosse à dents à l’agrafeuse), arts de la table, habillement et accessoires (vêtements, chaussures, lunetterie, bagagerie, horlogerie), jouets, verrerie (parfum, miroirs), graphisme et édition, ou même alimentation (pâtes Panzani, bûche de noël Lenôtre), et véhicules (vélo, moto, yacht, avion), sur terre, sur mer, comme dans les airs et l’espace.</p>`
                },
                realisations: {
                    title: "SES RÉALISATIONS",
                    content: `<img src="../../../aventure-culture/img/realisations_philippe_starck.png" alt="Réalisations Philippe Starck" style="width: 100%;">`
                },
                pourquoi: {
                    title: "EN QUOI EST-CE UN MENTOR ?",
                    content: `<h1>LA PERSONNE</h1>
                    <p>Philippe Starck fait partie des designers qui m'inspirent. C'est un homme très positif, qui regorge de bonne humeur. Il aime ce qu'il fait et ça se ressens.</p>
                    <p>J'aime énormément la créativité dont il fait preuve : «<span class="textRed"> J'ai cette maladie mentale appelée créativité. </span>»</p> <p>Philippe Stack n'a pas peur de n'en faire qu'à sa tête. Même si la majorité n'est pas d'accord avec ce qu'il propose, à partir du moment où il a décidé de le faire, il va jusqu'au bout des choses : «<span class="textRed"> Vous voulez être créatif? N'écoutez pas les experts! car les experts savent à l'avance pourquoi une idée est saugrenue. Et c'est là le problème. Comme ils le savent à l'avance, ils n'explorent pas cette voie. Or on innove vraiment quand on reste naïf, innocent, et qu'on ose tester des idées saugrenues. Ce sont d'elles que viennent les vraies innovations. </span>»</p>
                    <p>Il ne lâche pas l'affaire au premier obstacle se présentant à lui. Pour lui, la persévérance est un trait de caractère nécessaire pour réaliser de grande chose. Il a d'ailleurs prononcé la phrase suivante : «<span class="textRed"> Ce que j'ai appris de la course à pied, c'est que le moment de pousser fort, c'est quand vous avez mal comme un fou et que vous voulez abandonner. Le succès est souvent au coin de la rue. </span>»</p> 
                    <p>C'est un homme qui promeut la participation. Il pense que pour réussir, il faut au moins essayer car «qui ne tente rien n'a rien ». Selon lui, «<span class="textRed"> Personne n'est obligé d'être un génie, mais tout le monde est obligé de participer. </span>»</p>
                    <h1>LE DESIGN</h1>
                    <p>Philippe Starck est un des personnages emblématiques que j'ai choisi de présenter dans ce premier niveau du jeu car c'est un homme qui selon moi était destiné au monde du design.</p>
                    <p>Pour lui, le design n'est pas qu'une histoire de « beau », c'est avant tout pour créer des sujets de conversations qu'il créer. «<span class="textRed"> Mon presse-agrumes n'est pas destiné à presser des citrons ; il est destiné à démarrer des conversations. </span>»</p> 
                    <p>Tout ce qu'il crée est pour lui porteur de sens. Il ne se contente pas de créer pour créer, tout est pensé en amont, avec une véritable utilité à la fin : « <span class="textRed">Tout ce que je fais est un symbole. Tout, a un sens.</span> »</p>`
                }
            },
            quizz: {
                title: "QUIZZ",
                user: "philippe_starck",
                questions: {
                    one: {
                        question: "En 1968, Philippe Starck crée sa première entreprise. Dans quel secteur était-elle spécialisée ?",
                        propositions: {
                            one: {
                                answer: "L'architecture d'intérieur",
                                valid: false
                            },
                            two: {
                                answer: "La conception d'objets gonflables",
                                valid: true
                            },
                            tree: {
                                answer: "La production en série",
                                valid: false
                            }
                        }
                    },
                    two: {
                        question: "Dès 1969, avec quel grand couturier commence-t-il à travailler ?",
                        propositions: {
                            one: {
                                answer: "Pierre Cardin",
                                valid: true
                            },
                            two: {
                                answer: "Jean Paul Gaultier",
                                valid: false
                            },
                            three: {
                                answer: "Christian Lacroix",
                                valid: false
                            }
                        }
                    },
                    three: {
                        question: "Dans les années 80, pour quelle marque de pâtes crée-t-il un design original ?",
                        propositions: {
                            one: {
                                answer: "Lustucru",
                                valid: false
                            },
                            two: {
                                answer: "Barilla",
                                valid: false
                            },
                            three: {
                                answer: "Panzani",
                                valid: true
                            }
                        }
                    },
                    four: {
                        question: "De quel trouble es atteint Philippe Starck ?",
                        propositions: {
                            one: {
                                answer: "Autisme",
                                valid: true
                            },
                            two: {
                                answer: "Bipolarité",
                                valid: false
                            },
                            three: {
                                answer: "Dépression",
                                valid: false
                            }
                        }
                    },
                    five: {
                        question: "En 1982, Philippe Starck reçoit une commande prestigieuse de :",
                        propositions: {
                            one: {
                                answer: "Louis Vouitton",
                                valid: false
                            },
                            two: {
                                answer: "François Mitterrand",
                                valid: true
                            },
                            three: {
                                answer: "Richard Branson",
                                valid: false
                            }
                        }
                    }
                }
            }
        };

        new CaracterQuizz(content);
    }

    vernerPantonCallback() {

        let content = {
            tabs: {
                style: {
                    title: "BIOGRAPHIE",
                    content: `
                    <p>Verner Panton (13 février 1926, Gamtofte - 5 septembre 1998, Copenhague) est un designer danois. Il est considéré comme l’un des plus influents du XXe siècle. Au cours de sa carrière, il créé des objets au design innovant et futuriste. Il avait une prédilection pour tout ce qui permettait de s’asseoir, et utilisait couramment le plastique avec des couleurs vives et des formes généreuses. Son style en fait un des plus typiques designers des années 1960. Le designer danois Verner Panton est rarement vu comme typiquement danois. Créateur offrant une alternative très éloignée de la discrétion et du confort caractérisé comme typiquement danois. Panton fut pendant longtemps un designer incompris dans son propre pays, et est encore aujourd’hui vu comme un déviant de la tradition danoise du design.  Fort heureusement l’intérêt renouvelé pour les années 60 et 70 et la mode du retro et du design ont sensibilisés le public à son génie créateur.</p>
                    <img src="../../../aventure-culture/img/portrait_verner_panton.png" alt="portrait verner panton" style="width: 100%;">
                    <h1>SES ÉTUDES </h1>
                    <p>Verner Panton, né en 1926 à Gamtofte, Danemark, fréquente l’école technique à Odense puis fait des études d’architecture à l’Académie royale des beaux-arts à Copenhague. De 1950 à 1952 il est employé dans le cabinet d’architecture d'Arne Jacobsen puis fonde son propre studio d’architecture et de design en 1955. Ses meubles basés sur des formes géométriques, fabriqués par la société « Plus-linje“ lui valent pour la première fois l’attention publique. Au cours des années suivantes, il crée de nombreux sièges et luminaires.</p>
                    <h1>LA CHAISE PANTON</h1>
                    <p>En 1959 ou en 1960 Panton commence à développer ce qui deviendra la Chaise Panton, Les premiers modèles sont fabriqués en polyester renforcé à la fibre de verre. La forme de cette chaise lui permet d’être empilable et facilement déplaçable. En 1967 elle devient la première chaise fabriquée par le procédé de moulage par injection de mousse de polyuréthane. Les technologies actuelles ont cependant permis que la Panton Chair puisse également être fabriquée selon un procédé d’injection avec du polypropylène Elle est toujours produite en série par Vitra et est devenue sa création la plus célèbre. Cette chaise, par sa forme monobloc en « porte-à-faux » est directement inspirée par la chaise Zig Zag de Gerrit Rietveld. Panton avait déjà réalisé la chaise 276 S en reprenant la forme de la chaise Zig Zag. </p>
                    <h1>DÉCÈS</h1>
                    <p>Verner Panton meurt en 1998 à Copenhague. Les rééditions des créations de Panton par Vitra et la rétrospective de son œuvre présentée en 2000 par le Vitra Design Museum attestent la relation particulière entre Vitra et Verner Panton.</p>`
                },
                realisations: {
                    title: "SES RÉALISATIONS",
                    content: `<img src="../../../aventure-culture/img/realisations_verner_panton.png" alt="Réalisations Verner Panton" style="width: 100%;">`
                },
                pourquoi: {
                    title: "EN QUOI EST-CE UN MENTOR ?",
                    content: `<h1>LA PERSONNE</h1>
                    <p>Verner Panton n’avait pas peur d’être différent, au contraire, il faisait tout pour l’être et cherchait constamment des nouvelles combinaisons de couleurs, de matières… Pour lui, il faut tenter de nouvelles combinaisons pour réussir à en trouver des spectaculaires. Il a d’ailleurs dit : «<span class="textRed">Une expérience ratée peut être plus importante qu’une conception triviale.</span>»</p>
                    <h1>LE DESIGN</h1>
                    <p>Verner Panton est un des personnages emblématiques que j’ai choisi de présenter dans ce premier niveau du jeu car c’est un homme dans lequel je me reconnais beaucoup artistiquement parlant. 
                    <br><br>
                    Le design de Panton est souvent basé sur des formes géométriques simples, utilisés d’une manière classique, dans le sens architectural du terme, comme des blocks de construction. Les formes les plus fréquemment utilisées sont les carrés et les cercles. Dans ses compositions 3D, comme le mobilier et les lampes ces formes apparaissent comme des cubes, des anneaux, des sphères et des sections sphériques.
                    <br><br>
                    C’est un homme qui aime les couleurs et qui les expérimente à merveille. Pour lui, les couleurs ont un rôle essentiels dans notre quotidien, chaque couleur à une signification : «<span class="textRed">Choisir les couleurs ne devrait pas être un pari. Ce devrait être une décision consciente. Les couleurs ont un sens et une fonction.</span>»
                    <br><br>
                    Il créer dans un but spécial, rendre le quotidien de gens plus stimulant : «<span class="textRed">Le but principal de mon travail est de provoquer les gens à utiliser leur imagination et de rendre leur environnement plus excitant.</span>»</p>`
                }
            },
            quizz: {
                title: "QUIZZ",
                user: "verner_panton",
                questions: {
                    one: {
                        question: "De quelle nationalité est verner panton",
                        propositions: {
                            one: {
                                answer: "Danois",
                                valid: true
                            },
                            two: {
                                answer: "Suédois",
                                valid: false
                            },
                            tree: {
                                answer: "Français",
                                valid: false
                            }
                        }
                    },
                    two: {
                        question: "Au cours de sa carrière, Verner Panton crée...",
                        propositions: {
                            one: {
                                answer: "Des peintures",
                                valid: false
                            },
                            two: {
                                answer: "Des produits électroménagers",
                                valid: false
                            },
                            three: {
                                answer: "Des objets au design innovant et futuristes",
                                valid: true
                            }
                        }
                    },
                    three: {
                        question: "Quelle est l'année de création de la Panton Chair par Verner Panton ?",
                        propositions: {
                            one: {
                                answer: "1946",
                                valid: false
                            },
                            two: {
                                answer: "1959",
                                valid: true
                            },
                            three: {
                                answer: "1969",
                                valid: false
                            }
                        }
                    },
                    four: {
                        question: "Quelle est la prédilection de Verner Panton ?",
                        propositions: {
                            one: {
                                answer: "Le noir et blanc",
                                valid: false
                            },
                            two: {
                                answer: "Les couleurs vives et les formes géométriques",
                                valid: true
                            }
                        }
                    },
                    five: {
                        question: "Quelle citation à prononcé Verner Panton",
                        propositions: {
                            one: {
                                answer: "\" Le choix des couleurs ne devrait jamais être un hasard. Les couleurs ont une fonction et une signification. \"",
                                valid: true
                            },
                            two: {
                                answer: "\" Les grandes réalisations sont tuojours précédées par de grandes pensées. \"",
                                valid: false
                            },
                            three: {
                                answer: "\" Appréciez d'échouer, et apprennez de l'échec, car on, n'apprend rien de ces succés. \""
                            }
                        }
                    },
                }
            }
        };

        new CaracterQuizz(content);
    }

    endLevel() {
        let button = new ActionButton("Ouvrir le message", "../../../aventure-culture/img/certificat_reussite_niveau_1_aventure_culture.pdf", true);
        button.setBoundaries(map.width - innerWidth, innerWidth / 1.5);
    }
}