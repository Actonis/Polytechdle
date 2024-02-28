const connection = require('./db');

// Exécuter une requête SQL pour sélectionner toutes les données de la table professeur
connection.query('SELECT * FROM professeur', (error, results, fields) => {
  if (error) {
    console.error('Erreur lors de la récupération des professeurs :', error);
    return;
  }

  // Afficher les résultats à l'aide de console.log
  console.log('Liste des professeurs :');
  results.forEach((professeur, index) => {
    console.log(`Professeur ${index + 1}:`, professeur);
  });


connection.end();
});