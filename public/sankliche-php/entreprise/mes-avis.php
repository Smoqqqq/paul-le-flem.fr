<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/sankliche-php/style.css">
    <title>San Kliché - Mes avis</title>
</head>

<body>
    <div class="container">
        <?php include("sankliche-php/modules/navbar.php"); ?>

        <h1 style="text-align: center; margin: 40px 0 10px 0px">Mes avis</h1>
        <p style="text-align: center; margin-bottom: 40px;">Vous retrouverez dans cette liste tous les avis que les apprenants vous ont laissé. Si vous recevez un avis haineux ou injurieux, vous pouvez le contester avec le bouton sur la droite.</p>

        <div>
            <div class="shop">
                <div class="content">
                    <h3>Mohamed
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg> 5
                    </h3>
                    <p>Marwan à su mettre alaise, il était très gentil et m'as même offert le café !!!</p>
                </div>
                <u onclick="alert('pas implémenté')">Contester</u>
            </div>
            <div class="shop">
                <div class="content">
                    <h3>Isa
                        <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0px 5px;" width="16" height="16" fill="gold" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg> 5
                    </h3>
                    <p>Personnel adorable, je recommande !</p>
                </div>
                <u onclick="alert('pas implémenté')">Contester</u>
            </div>
        </div>
    </div>

    <?php include("sankliche-php/modules/footer.php"); ?>
</body>

</html>