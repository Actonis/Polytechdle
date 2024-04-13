const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

async function pause() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Après la pause");
}
// Route for fetching Images directories
router.get('/', (req, res) => {
    db.query('SELECT ecole FROM polyguessrchoix', (err, results) => {
        if (err) {
            console.error('Error fetching ecole:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        results.forEach(async function(result) {
            db.query('SELECT lien FROM polyguessr WHERE ecole = ? AND num_guess = 2', [result.ecole], async (err, results) => {
                if (err) {
                    console.error('Error fetching ecole:', err);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }
                results.forEach(async function(result) {
                    res.json({ lien: result.lien });
                });
            })
        });
    });
});

module.exports = router;