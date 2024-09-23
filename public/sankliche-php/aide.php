<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Besoin d'aide</title>
</head>

<body>
    <div class="container">
        <?php include("modules/navbar.php"); ?>

        <br>
        <div class="shadow">
            <h1>Contactez San'Kliché</h1><br>
            <div class="w-50">
                <label for="">Prénom</label>
                <input class="input" type="text" name="" id=""><br>

                <label for="">Nom</label>
                <input class="input" type="text" name="" id=""><br>
            </div>

            <label for="">Message</label>
            <textarea></textarea>

            <br><br><br>

            <div style="text-align: right">
                <button>Envoyer</button>
            </div>
        </div>

    </div>


    <?php include("modules/footer.php"); ?>
</body>

</html>