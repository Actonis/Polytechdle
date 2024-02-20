<?php
require_once('include/config.php');
?>

<!DOCTYPE html>
<html>
<head>
    <title>Polydle</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="icon" type="image/x-icon" href="https://files.u-angers.fr/data/f-29938d13d54331e2.png">
</head>
<body>
    <div class="container">
        <img src="https://files.u-angers.fr/data/f-5606dce44e2af1ab.png" alt="Title"  class="img-title">
    </div>
    <p>Le jeu journalier par et pour Polytech !</p>
    <div class="center">
        <button class="boutons" onclick="window.location.href = './guess.html';">Corps enseignant</button>
        <button class="boutons" onclick="window.location.href = '/services.html';">Bureau des Etudiants</button>
        <button class="boutons" onclick="window.location.href = '/portfolio.html';">Les 4A </button>
        <button class="boutons" onclick="window.location.href = '/contact.html';">A venir !</button>
    </div>
</body>
</html>