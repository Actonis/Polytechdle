const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Importez votre connexion à la base de données

// Route pour récupérer les dates
router.get('/', (req, res) => {
    db.query('SELECT dateduchoix FROM choixdujour ORDER BY dateduchoix DESC', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des dates :', err);
            return res.status(500).json({ error: 'Erreur lors de la récupération des dates' });
        }

        // Afficher les résultats à l'aide de console.log
        console.log('Liste des dates :');
        results.forEach((row, index) => {
            const date = new Date(row.dateduchoix);
            console.log(`Date ${index + 1}:`, date.toLocaleDateString()); // Formatage de la date en format local
        });

        // Mapping des résultats pour récupérer uniquement les dates formatées en local
        const dates = results.map(row => {
            const date = new Date(row.dateduchoix);
            return date.toLocaleDateString();
        });

        // Envoi des dates au client sous forme de réponse JSON
        res.json({ dates });
    });
});

module.exports = router;
