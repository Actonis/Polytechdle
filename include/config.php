<?php
$dsn = "mysql:host=localhost;dbname=test";
$username = "root";
$password = "";

try {
    // Attempt to create a new PDO instance
    $conn = new PDO($dsn, $username, $password);
    
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
} catch(PDOException $e) {
    // If connection fails, display an error message
    die("Connection failed: " . $e->getMessage());
}

/*
$conn = new mysqli($servername, $username, $password, $dbname);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}*/

?>