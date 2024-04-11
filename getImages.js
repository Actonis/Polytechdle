const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

// Route for fetching Images directories
router.get('/', (req, res) => {
    db.query('SELECT chemin FROM images ORDER BY number ASC', (err, results) => {
        if (err) {
            console.error('Error fetching images:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const names = results.map(row => row.eleve);
        res.json({ names });
    });
});

module.exports = router;

//Attention !! DB à créer pour les images (3 par ville car 3 essais possibles sinon vous êtes des merdes)