<?php
require_once('../include/config.php');

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the POST request
    $nom = $_POST['nom'];

    $stmtCheck = $conn->prepare('SELECT * FROM Professeur WHERE nom = :nom');
    $stmtCheck->bindParam(':nom', $nom);
    $stmtCheck->execute();

    if( $stmtCheck->rowCount() > 0) {
        echo json_encode(['reponse' => 'Bien joué']);
        return;
    }
    else {
        echo json_encode(['reponse' => 'Mauvais']);
        return;
    }
    
} else {
    // Respond with an error message if it's not a POST request
    echo json_encode(['error' => 'Invalid request method']);
}
?>
