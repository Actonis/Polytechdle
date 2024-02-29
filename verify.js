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
            res.json({ response: 'Bien joué' });
        } else {
            res.json({ response: 'Mauvais' });
        }
    });
});

module.exports = router;