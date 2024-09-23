<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Horaires</title>
</head>

<body>
    <div class="container">
        <?php include("sankliche-php/modules/navbar.php"); ?>

        <br>
        <div>
            <div class="shadow">
                <h1 style="text-align: center; margin-top: 25px;">Renseignez vos horaires</h1>
                <p style="text-align: center; margin: 35px 0px;">Dernière étape : renseignez les horaires aux quelles vous souhaitez recevoir des apprenants</p>

                <table style="width: 100%;">
                    <thead>
                        <tr>
                            <th>Créneau</th>
                            <th>Lundi</th>
                            <th>Mardi</th>
                            <th>Mercredi</th>
                            <th>Jeudi</th>
                            <th>Vendredi</th>
                            <th>Samedi</th>
                            <th>Dimanche</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Matin</td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                        </tr>
                        <tr>
                            <td>après-midi</td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                        </tr>
                    </tbody>
                </table>
                <small>Renseignez vos disponibilités sous le format '9h-11h', uniquement dans les créneaux ou vous souhaitez accueillir</small>

                <br><br>

                <label for="">Un message pour les apprenants ?</label>
                <textarea placeholder="N'hésitez pas à nous rendre visite..."></textarea>

                <div style="text-align: center; margin-top: 35px;">
                    <a href="/sankliche/entreprise/mon-compte.php">Terminer l'inscription</a>
                </div>
            </div>
        </div>

    </div>


    <?php include("sankliche-php/modules/footer.php"); ?>
</body>

</html>