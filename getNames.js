const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

// Route for fetching names
router.get('/', (req, res) => {
    db.query('SELECT eleve FROM etudiants ORDER BY eleve', (err, results) => {
        if (err) {
            console.error('Error fetching names:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const names = results.map(row => row.eleve);
        res.json({ names });
    });
});

module.exports = router;