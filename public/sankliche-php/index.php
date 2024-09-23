<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - activitées</title>
</head>

<body>
    <div class="container">
        <?php include("modules/navbar.php"); ?>

        <script>
            popup(`Bienvenue sur la plateforme San'Kliché ! <br><br>Maintenant que vous avez terminé votre inscription, nous vous invitons à choisir votre première activité à réaliser dans la liste ci-dessous.<br> Pour le moment, vous n'avez accès qu'aux activités de niveau facile. Vous accederez aux niveaux suivants après avoir validé deux activités du niveau précédent.<br><br> Bonne chance !<br><br><div class='bg-yellow'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>&nbsp;Vous pouvez activer / désactiver les popup d'aide dans le menu en haut à droite.<br>Vous pouvez également traduire le site, ou utiliser une liseuse, grâce aux boutons en bas à droite de l'écran.</div>`);
        </script>

        <div class="sticky-top">
            <div id="header">
                <h2>Choisissez une activitée</h2>
                <div id="filters">
                    <div class="filter">
                        <div class="name">Catégorie</div>
                        <div class="select">
                            <div class="value">Toutes
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                            <div class="options">
                                <div class="option">Toutes</div>
                                <div class="option">Libraires</div>
                                <div class="option">Restaurants</div>
                                <div class="option">Associations</div>
                                <div class="option">Commerces</div>
                                <div class="option">Service public</div>
                            </div>
                        </div>
                    </div>
                    <div class="filter">
                        <div class="name">Difficulté</div>
                        <div class="select">
                            <div class="value">Toutes
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                            <div class="options">
                                <div class="option">Toutes</div>
                                <div class="option">Facile</div>
                                <div class="option">Moyen</div>
                                <div class="option">Difficile</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <div class="shop">
                <div class="content">
                    <h3>Demander le livre du mois <span class="difficulty easy">Facile</span></h3>
                    <p>Rendez-vous dans une librairie proche de chez vous, et allez parler au libraire. Demandez lui le livre le plus populaire du moment, engagez une discussion et soyez curieux !</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>
            <div class="shop">
                <div class="content">
                    <h3>Lire la carte <span class="difficulty easy">Facile</span></h3>
                    <p>Rendez-vous dans un restaurant proche de chez vous, consultez la carte du restaurant. N'hésitez pas à demander plus d'informations au personnel du restaurant.</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>
            <div class="shop">
                <div class="content">
                    <h3>Demander un conseil <span class="difficulty easy">Facile</span></h3>
                    <p>Rendez-vous dans une boutique proche de chez vous, et allez demander conseil au vendeur. Engagez une discussion technique concrète</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>

            <br><br>
            <hr>
            <h2 style="color: red">Activitées verouillées</h2><br>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>&nbsp;&nbsp;Réalisez au moins deux activités du niveau précédent pour y avoir accès</p>
            <hr>
            <br><br>

            <div class="shop disabled">
                <div class="content">
                    <h3>Proposer son aide <span class="difficulty medium">Moyen</span></h3>
                    <p>Vous vous sentez une ame charitable ? RDV dans une association proche de chez vous pour proposer votre aide aux bénévoles.</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>
            <div class="shop disabled">
                <div class="content">
                    <h3>Demander conseil a l'office du tourisme <span class="difficulty medium">Moyen</span></h3>
                    <p>Rendez-vous à l'office du tourisme de votre ville. Demandez conseil sur des activités à faire dans la ville.</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>
            <div class="shop disabled">
                <div class="content">
                    <h3>Participer à un évènement <span class="difficulty hard">Difficile</span></h3>
                    <p>De nombreux évènenements sont disponibles dans les villes ! appelez ou rendez vous à l'office du tourisme pour en trouver, puis participez à l'évènement.</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>
            <div class="shop disabled">
                <div class="content">
                    <h3>Organiser une rencontre <span class="difficulty hard">Difficile</span></h3>
                    <p>Organisez une rencontre sportive, ludique ou éducative dans votre région. Cela sera une bonne manière d'engager une discussion avec des inconnus !</p>
                </div>
                <a href="/sankliche/choisir-le-lieux.php">Démarrer</a>
            </div>
        </div>
    </div>

    <?php include("modules/footer.php"); ?>
</body>

</html>