const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

// Route for fetching Images directories
router.get('/', (req, res) => {
    db.query('SELECT ecole FROM polyguessr WHERE num_guess = 1', (err, results) => {
        if (err) {
            console.error('Error fetching ecole:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        const names = results.map(row => row.ecole);
        res.json({ ecole });
    });
});

module.exports = router;
