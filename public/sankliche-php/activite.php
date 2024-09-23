<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Réalisation de l'activité</title>
</head>

<body>
    <div class="container">
        <?php include("modules/navbar.php"); ?>

        <script>
            popup("C'est à vous ! <br><br>Vous avez choisi l'activité 'Demander le livre du mois'. Rendez-vous maintenant chez 'chez Marwan' pour effectuer le défi. Une fois terminé, revenez sur cette page pour valider la réalisation.<br><br>Bonne chance !");
        </script>

        <br>
        <div class="row center-y">
            <div class="w-50">
                <div class="shop">
                    <div class="content">
                        <div class="bg-yellow">
                            <h2>C'est à vous !</h2><br>
                            <p>Vous avez choisi l'activité 'Demander le livre du mois'. Rendez-vous chez Marwan pour effectuer le défi. Une fois terminé, revenez sur cette page pour valider la réalisation !</p>
                        </div><br><br>

                        <h1>Activité</h1><br>
                        <h3>Demander le livre du mois <span class="difficulty easy">Facile</span></h3>
                        <p>Rendez-vous dans une librairie proche de chez vous, et allez parler au libraire. Demandez lui le livre le plus populaire du moment, engagez une discussion et soyez curieux !</p>

                        <br><br>

                        <h2>Localisation</h2><br>
                        <h3>Chez Marwan <span class="distance">- 550m</span></h3>
                        <p>Vous pouvez vous aider de la carte sur la droite pour vous y rendre.</p>

                        <br><br>

                        <div class="timeline">
                            <div class="step active">Choix<br><small>(terminé)</small></div>
                            <div class="step half">Réalisation<br><small>(en cours)</small></div>
                            <div class="step">Compte rendu / avis<br><small>(quand l'activité sera terminée)</small></div>
                        </div><br><br>

                        <div style="text-align: right; margin-top: 40px;">
                            <a href="/sankliche/debrief.php">J'ai terminé l'activité</a>
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