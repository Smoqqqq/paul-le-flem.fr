<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Mon compte</title>
</head>

<body>
    <div class="container">
        <?php include("sankliche-php/modules/navbar.php"); ?>

        <br>
        <div>
            <div class="shadow">
                <h1 style="text-align: center; margin-top: 25px;">Modifier mon compte</h1>
                <p style="text-align: center; margin: 35px 0px;">Modifier vos horaires ou coordonnées</p>

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
                            <td><input class="input" type="text" value="10h30-11h30"></td>
                            <td><input class="input" type="text" value="10h30-11h30"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text" value="9h-11h"></td>
                            <td><input class="input" type="text" value="9h-11h"></td>
                            <td><input class="input" type="text"></td>
                        </tr>
                        <tr>
                            <td>après-midi</td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text" value="15h-18h"></td>
                            <td><input class="input" type="text" value="15h-18h"></td>
                            <td><input class="input" type="text"></td>
                            <td><input class="input" type="text"></td>
                        </tr>
                    </tbody>
                </table>
                <small>Renseignez vos disponibilités sous le format '9h-11h', uniquement dans les créneaux ou vous souhaitez accueillir</small>

                <br><br>

                <label for="">Un message pour les apprenants ?</label>
                <textarea>A la libre'airie, nous souhaitons avoir un impact positif. Participer a l'action san'kliché est pour nous un engagement fort qui nous permet d'aide à l'intégration des étrangers, migrants et personnes avec des difficultés de Francais. Nous serons heureux de vous accueillir pendant nos horaires de basse afluence.</textarea>

                <div style="text-align: center; margin-top: 35px;">
                    <a href="">Enregistrer</a>
                </div>
            </div>
        </div>

    </div>


    <?php include("sankliche-php/modules/footer.php"); ?>
</body>

</html>