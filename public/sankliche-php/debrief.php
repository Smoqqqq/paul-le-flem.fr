<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Débrief</title>
</head>

<body>
    <div class="container">
        <?php include("modules/navbar.php"); ?>

        <script>
            popup("Félicitations ! <br><br>Vous avez terminé l'activité 'Demander le livre du mois'. Nous vous invitons maintenant à remplir un compte rendu. Cette étape n'est pas obligatoire, mais elle est importante. Elle vous permettra d'améliorer votre qualité rédactionelle. <br><br>Vous pouvez également laisser une note au commercant, pour aiguiller les prochains apprenants. Bonne chance !");
        </script>

        <div id="popup">
            <h1>Vous avez terminé, félicitations !</h1>
            <img src="/sankliche-php/asset/confetti-gif-1.gif" alt="Félicitations">
        </div>

        <br>

        <div class="row center-y">
            <div class="w-50">
                <div class="shop">
                    <div class="content">
<!--                         <h1>Compte rendu d'activité</h1><br>
                        <h3>Demander le livre du mois <span class="difficulty easy">Facile</span></h3>
                        <p>Rendez-vous dans une librairie proche de chez vous, et allez parler au libraire. Demandez lui le livre le plus populaire du moment, engagez une discussion et soyez curieux !</p>

                        <br><br>

                        <h2>Localisation</h2><br>
                        <h3>Chez Marwan <span class="distance">- 600m</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni, necessitatibus quisquam officiis maiores sapiente?</p> -->


                        <div class="timeline">
                            <div class="step active">Choix<br><small>(terminé)</small></div>
                            <div class="step active">Réalisation<br><small>(terminé)</small></div>
                            <div class="step half">Compte rendu / avis<br><small>(en cours)</small></div>
                        </div><br><br>

                        <br><br><br>
                        <h3>Mon compte rendu</h3>
                        <p>Comment c'est passé l'activité ?</p>
                        <small>Ne négligez pas ce compte rendu, il vous aide à améliorer votre qualité rédactionelle</small>
                        <textarea placeholder="J'ai aimé... J'ai trouvé... J'aurais aimé..."></textarea><br>

                        <br><br>

                        <p>Qu'avez-vous pensé du personnel de Chez Marwan ?</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <br>
                        <br><br>

                        <p>Ajoutez un justificatif</p>
                        <input type="file"><br>
                        <small>image ou vidéo</small>

                        <div style="text-align: right; margin-top: 40px;">
                            <a href="mes-activites.php">Terminer l'activité</a>
                        </div>

                    </div>
                    <div></div>
                </div>
            </div>
            <div class="w-50">
                <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2627.3744567035724!2d2.378803976775878!3d48.8129164039052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47e673ca476aff9b%3A0x515dbb68e96bd861!2s3%20Pl.%20de%20la%20R%C3%A9publique%2C%2094200%20Ivry-sur-Seine!3m2!1d48.8114765!2d2.3838014!4m5!1s0x47e673ccc8943fa9%3A0xec15c5bd8c3b0773!2schez%20marwan!3m2!1d48.8146224!2d2.3787327!5e0!3m2!1sfr!2sfr!4v1711528035981!5m2!1sfr!2sfr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" id="map"></iframe>
            </div>
        </div>
    </div>


    <?php include("modules/footer.php"); ?>
</body>

</html>