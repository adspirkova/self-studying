<?php
echo("vlozeni php do html");

?>

<?php
$str = "A 'quote' is <b>bold</b>";

echo htmlentities($str);

echo htmlentities($str, ENT_QUOTES);
?>


<!--promenne-->


<?php
echo('<br />');
$pozdrav = "Ahoj";
$vek = 15;
$pi = 3.14;

echo($pozdrav);
echo('<br />');
echo($vek);
echo('<br />');
echo($pi);
echo('<br />');

?>


<?php

$r = 10;
$obsah = 3.14 * $r * $r;
//dvojite uvozovky
echo("Obsah kruhu je $obsah cm<sup>2</sup>");
echo('<br />');
?>

<!--PHP samo převádí mezi různými datovými typy. -->

<?php

$a = 10;
$b = "20";
$c = $a + $b;
echo($c);

?>

<?php
echo('<br />');
$a = 10;
$b = "200 let mi je";
$c = $a + $b;
echo($c);

?>

<!--konkatenace -->

<?php
echo('<br />');

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
echo('<br />');
?>


<!--konstanty-->

<?php

define('VERZE', 7.3);

echo('Verze aplikace: ' . VERZE);
echo('<br />');
?>

<?php
//
//// Tento kód vyvolá chybu
//define('VERZE', 7.3);
//
//VERZE = 7.4;
//
//?>

