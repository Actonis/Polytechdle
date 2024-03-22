const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

// Middleware to parse JSON bodies
router.use(express.json());

// Route for verifying guesses
router.post('/', (req, res) => {
    const guess = req.body.nom; // Assuming 'nom' is the key sent in the request body
    console.log('Received guess:', req.body.nom);
    

    db.query('SELECT * FROM Professeur WHERE nom = ?', [guess], (err, results) => {
        if (err) {
            console.error('Error verifying guess:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length > 0) {
            //results renvoie un Array avec chaque element contenant toutes les informations de chaque ligne que renvoie la requête SQL
            //verificationResponse(results); 


            //Deviendra inutile quand la fonction de vérification sera implémentée
            //voici la forme de ce que j'envoie au client
            // name = nom du critère (pour le moment je m'en sers pas)
            // value = texte à afficher sur la page = ce que renvoie la requête sql
            // correct = si le critère est vrai ou non
            const criterias = [
                { name: 'criteria1', value: "nom", correct: true },
                { name: 'criteria2', value: "prenom", correct: true },
                { name: 'criteria3', value: "age", correct: true },
                { name: 'criteria4', value: "test", correct: true },
                { name: 'criteria5', value: "test1", correct: false },
                { name: 'criteria6', value: "departement", correct: true }
            ]; 
            

            res.json({ criterias : criterias });
        } else {
            // J'ai mis ca au cas ou mais normalement ca devrait jamais arriver
            res.json({ response: 'Mauvais' });
        }
    });
});

function verificationResponse(results) {
    //Fonction pour comparer le résultat de la requête avec la solution du jour
    //Il faudra comparer chaque critère avec celui de la solution du jour


    //Retourne le tableau contenant la valeur du critère et sa véracité
    return criterias;
}

module.exports = router;