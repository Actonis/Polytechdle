<?php
require_once('../include/config.php');

// Check if the request is a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the POST request
    $name = $_POST['name'];

    $stmtCheck = $conn->prepare('SELECT * FROM Professeur WHERE nom = :nom');
    $stmtCheck->bindParam(':nom', $nom);
    $stmtCheck->execute();

    

    // Respond with a JSON success message or any necessary data
    echo json_encode(['success' => true]);
    
} else {
    // Respond with an error message if it's not a POST request
    echo json_encode(['error' => 'Invalid request method']);
}
?>
