<?php
require_once('../include/config.php');

// Check if the request is a GET request
if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $stmtCheck = $conn->prepare('SELECT nom FROM Professeur');
    $stmtCheck->execute();

    $names = $stmtCheck->fetchAll(PDO::FETCH_COLUMN);
    
    if (!empty($names)) {
        echo json_encode(['names' => $names]);
    } else {
        echo json_encode(['error' => 'No names found']);
    }
    
} 
// Check if the request is a POST request
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the POST request
    $nom = $_POST['nom'];

    $stmtCheck = $conn->prepare('SELECT * FROM Professeur WHERE nom = :nom');
    $stmtCheck->bindParam(':nom', $nom);
    $stmtCheck->execute();

    if( $stmtCheck->rowCount() > 0) {
        echo json_encode(['reponse' => 'Bien joué']);
    }
    else {
        echo json_encode(['reponse' => 'Mauvais']);
    }
} 
else {
    // Respond with an error message if it's not a GET or POST request
    echo json_encode(['error' => 'Invalid request method']);
}
?>
