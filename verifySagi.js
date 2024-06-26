const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

var reponse = [];

// Middleware to parse JSON bodies
router.use(express.json());


// Route for verifying guesses
router.post('/', (req, res) => {
    const guess = req.body.nom;
    console.log('Received guess:', req.body.nom);
    
    db.query('SELECT * FROM reponseSagi', (err, results) => {
        if (err) {
            console.error('Error verifying guess:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
    
        const modifiedResults = results.map(result => {
            const { id, ...rest } = result;
            return rest;
        });
    
        reponse = modifiedResults;
    });

    db.query('SELECT * FROM etudiants WHERE eleve = ?', [guess], (err, results) => {
        if (err) {
            console.error('Error verifying guess:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        if (results.length > 0) {

            const modifiedResults = results.map(result => {
                const { id, ...rest } = result;
                return rest;
            });


            const criterias = verificationResponse(modifiedResults);

            res.json({ criterias : criterias });
        } else {
            // J'ai mis ca au cas ou mais normalement ca devrait jamais arriver
            res.json({ response: 'Mauvais' });
        }
    });
});

function verificationResponse(results) {

    var correction = [];
    const reponseObject = reponse[0];

    results.forEach(row => {
        Object.keys(row).forEach(key => {
            if (row[key] === reponseObject[key]) {
                correction.push("true");
            } 
            else if(key === "age" && Math.abs(reponseObject[key]-row[key])<=1) {
                correction.push("nearly");
            }
            else if(key === "peip" && row[key].includes("Oui") && reponseObject[key].includes("Oui")) {
                correction.push("nearly");
            }
            else {
                correction.push("false");
            }
        });
    });

    var SemestreStage = results.map(row => row.etudes_etranger)
    var pays_etranger = results.map(row => row.pays_etranger)
    if(SemestreStage== "")
    {
        SemestreStage = "Pas encore fait"
        pays_etranger = " / "
    }


    // name = nom du critère (pour le moment je m'en sers pas)
    // value = texte à afficher sur la page = ce que renvoie la requête sql
    // correct = si le critère est vrai ou non
    const criterias = [
        { name: 'Nom', value: results.map(row => row.eleve), correct: correction[0] },
        { name: 'Age', value: results.map(row => row.age), correct: correction[1] },
        { name: 'Genre', value: results.map(row => row.genre), correct: correction[2] },
        { name: 'PeipOuNon', value: results.map(row => row.peip), correct: correction[4] },
        { name: 'CouleurCheveux', value: results.map(row => row.couleur_cheveux), correct: correction[5] },
        { name: 'SemestreStage', value: SemestreStage, correct: correction[6] },
        { name: 'Pays', value: pays_etranger, correct: correction[7] },
    ]; 

    //Retourne le tableau contenant la valeur du critère et sa véracité
    return criterias;
}

module.exports = router;