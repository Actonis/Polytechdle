const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

var reponse = '';

// Middleware to parse JSON bodies
router.use(express.json());

// Route for verifying guesses
router.post('/', (req, res) => {
    db.query('SELECT * FROM polyguessrchoix LIMIT 1', (err, results) => {
        if (err) {
            console.error('Error verifying guess:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        results.forEach((result) => {
            reponse = result.ecole;
            console.log(reponse);
        });
    });
    const guess = req.body.ecole;
    console.log('Received guess:', req.body.ecole);
    if (guess.toLowerCase() == reponse.toLowerCase()) {
        console.log('Correct');
        res.json({ correct: 'true', response: reponse});
    } else {
        res.json({ correct: 'false', response: reponse });
    }
});

module.exports = router;