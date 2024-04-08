const express = require('express');
const router = express.Router();
const db = require('./db.js');

router.get('/', (req, res) => {
    db.query('SELECT dateduchoix FROM choixdujour ORDER BY dateduchoix DESC', (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des dates :', err);
            return res.status(500).json({ error: 'Erreur lors de la récupération des dates' });
        }


        const dates = results.map(row => {
            const date = new Date(row.dateduchoix);
            return date.toLocaleDateString();
        });

        res.json({ dates });
    });
});

module.exports = router;
