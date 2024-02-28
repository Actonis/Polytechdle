const mysql = require('mysql');

// Configuration de la connexion à la base de données
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

// Établir la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ', err);
    return;
  }
  
  console.log('Connecté à la base de données MySQL.');
});

// Gérer les erreurs de connexion
connection.on('error', (err) => {
  console.error('Erreur de connexion MySQL : ', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.error('La connexion à la base de données a été perdue.');
  } else {
    throw err;
  }
});

// Exporter la connexion pour l'utiliser ailleurs dans votre application si nécessaire
module.exports = connection;