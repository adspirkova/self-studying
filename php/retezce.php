<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            $a = 10;
            $b = 20;
            $veta = "Ahoj, je mi";
            
            $soucet = $a + $b;
            $spojeni = $a . $b;
            echo("Zde je součet čísel A a B: $soucet");
            echo('<br />');
            echo("Zde je spojení řetězců A a B: $spojeni");
            echo('<br />');
            echo('A ještě jeden příklad: ');
            echo($veta . " " . $b . " let.");
        ?>
    </body>
</html>
