const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

var reponse = '';

// Middleware to parse JSON bodies
router.use(express.json());

db.query('SELECT * FROM polyguessrchoix LIMIT 1', (err, results) => {
    if (err) {
        console.error('Error verifying guess:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
    }
    results.forEach((result) => {
        reponse = result.ecole;
    });
});

// Route for verifying guesses
router.post('/', (req, res) => {
    const guess = req.body.nom;
    console.log('Received guess:', req.body.nom);
    if (guess === reponse) {
        res.json({ correct: 'true' });
    } else {
        res.json({ correct: 'false' });
    }
});

module.exports = router;