<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Choix du lieux</title>
</head>

<body>
    <div class="container">
        <?php include("modules/navbar.php"); ?>

        <script>
            popup("Vous avez choisi l'activité 'Demander le livre du mois'. Choisissez maintenant où réaliser l'activitée. La liste ci-dessous vous propose des lieux proches de chez vous, où vous pourrez réaliser cette activitée.<br><br> Pour vous aider à choisir, vous pouvez consulter le nombre d'étoiles attribués au commercant par les autres apprenants, ainsi que la distance de votre position actuelle, indiquée à côté du nom du commercant.<br><br> Bonne chance !");
        </script>

        <br>

        <div>
            <div class="shop">
                <div class="content">
                    <h1>Activité sélectionnée</h1><br>
                    <h3>Demander le livre du mois
                        <span class="difficulty easy">Facile</span>
                    </h3>
                    <p>Rendez-vous dans une librairie proche de chez vous, et allez parler au libraire. Demandez lui le livre le plus populaire du moment, engagez une discussion et soyez curieux !</p>
                </div>
                <div></div>
            </div>
        </div>

        <div class="sticky-top">
            <div id="header">
                <h2>Choisissez le lieux ou réaliser votre activité</h2>
                <div id="filters">
                    <div class="filter">
                        <div class="name">Distance</div>
                        <div class="select">
                            <div class="value">Toutes
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                            <div class="options">
                                <div class="option">&lt; 500m</div>
                                <div class="option">&lt; 1km</div>
                                <div class="option">&lt; 2km</div>
                                <div class="option">&lt; 5km</div>
                                <div class="option">&lt; 10km</div>
                                <div class="option">Toutes</div>
                            </div>
                        </div>
                    </div>
                    <div class="filter">
                        <div class="name">Horaires</div>
                        <div class="select">
                            <div class="value">Toutes
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                                </svg>
                            </div>
                            <div class="options">
                                <div class="option">Toutes</div>
                                <div class="option">8h-10h</div>
                                <div class="option">10h-12h</div>
                                <div class="option">12h-14h</div>
                                <div class="option">14h-16h</div>
                                <div class="option">16h-18h</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br><br>

        <div class="row">
            <div class="w-50">
                <div class="shop">
                    <div class="content">
                        <h3>Chez Marwan
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 5
                            <span class="difficulty easy">- 550m</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: 14h-16h
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Chez Jamy
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 4.5
                            <span class="difficulty easy">- 600m</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: Toute la journée
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Libre'airie
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 4
                            <span class="difficulty easy">- 650m</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: 14h-16h
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Soho
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 5
                            <span class="difficulty medium">- 1,2km</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: 13h-16h
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Idael
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 5
                            <span class="difficulty medium">- 1.6km</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: 9h-11h
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Répartou
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 3.8
                            <span class="difficulty medium">- 2km</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: 9h-10h
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Chez louis
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 4.2
                            <span class="difficulty medium">- 2km</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: Toute la journée
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>Le barjo
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 4
                            <span class="difficulty medium">- 2.4km</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: Toute la journée
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
                <div class="shop">
                    <div class="content">
                        <h3>coup'tiff
                            <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg> 3.9
                            <span class="difficulty hard">- 3km</span> <span class="time">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                                </svg> Disponibilité: 15h-16h30
                            </span>
                        </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p>
                    </div>
                    <a href="/sankliche/activite.php">Choisir</a>
                </div>
            </div>
            <div class="w-50">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2627.3744567035724!2d2.378803976775878!3d48.8129164039052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47e673ca476aff9b%3A0x515dbb68e96bd861!2s3%20Pl.%20de%20la%20R%C3%A9publique%2C%2094200%20Ivry-sur-Seine!3m2!1d48.8114765!2d2.3838014!4m5!1s0x47e673ccc8943fa9%3A0xec15c5bd8c3b0773!2schez%20marwan!3m2!1d48.8146224!2d2.3787327!5e0!3m2!1sfr!2sfr!4v1711528035981!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="map" class="map-sticky"></iframe>
            </div>
        </div>
    </div>


    <?php include("modules/footer.php"); ?>
</body>

</html>