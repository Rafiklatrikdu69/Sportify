<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="storestyle.css">
    <title>Document</title>
</head>
<body>
    <?php
        require "../header/header.php";
    ?>

    <section id="corps">
        <aside id="categorie">
            <form>
                <fieldset>
                    <legend>Catégories</legend>
                    <input type="checkbox" name="categorie" value="tshirt">T-shirt<br>
                    <input type="checkbox" name="categorie" value="pull">Pull<br>
                    <input type="checkbox" name="categorie" value="casquette">Casquette<br>
                    <input type="checkbox" name="categorie" value="short">Short<br>
                    <input type="checkbox" name="categorie" value="pantalon">Pantalon<br>
                    <input type="checkbox" name="categorie" value="chaussure">Chaussure<br>
                    <input type="submit" value="Filtrer">
                </fieldset>
            </form>
        </aside>

        <section id="articles">
        </section>
        
        <aside id="options">
        </aside>
    </section>
</body>
</html>

<!-- card comme kebab -->