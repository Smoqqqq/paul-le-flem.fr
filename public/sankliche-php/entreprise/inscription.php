<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Identifiants</title>
</head>

<body>
    <div class="container">
        <?php include("sankliche-php/modules/navbar.php"); ?>

        <br>
        <div>
            <div class="shadow" style="width: 50%; min-width: 300px; margin: 50px auto">
                <h1 style="text-align: center; margin-top: 25px;">Renseignez vos information</h1>
                <p style="text-align: center; margin: 25px 0px;"> C'est presque finit ! renseigner maintenant vos identifiants de connexion.</p>

                <label>Email</label>
                <input class="input" type="text">

                <label>Mot de passe</label>
                <input class="input" type="password">
                <label>Répétez le mot de passe</label>
                <input class="input" type="password">

                <div style="text-align: center; margin-top: 25px">
                    <a href="horaires.php">Valider</a>
                </div>
            </div>
        </div>

    </div>

    <?php include("sankliche-php/modules/footer.php"); ?>
</body>

</html>