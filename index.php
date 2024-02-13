<?php
require_once('include/config.php');
?>

<!DOCTYPE html>
<html>
<head>
    <title>Polytechdle</title>
    <link rel="icon" href="http://example.com/favicon.png">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>Thank you for visiting!</p>
    <div class="center">
        <button class="boutons" onclick="window.location.href = './guess.html';">Classique</button>
        <button class="boutons" onclick="window.location.href = '/services.html';">A faire</button>
        <button class="boutons" onclick="window.location.href = '/portfolio.html';">A faire</button>
        <button class="boutons" onclick="window.location.href = '/contact.html';">A faire</button>
    </div>
</body>
</html>