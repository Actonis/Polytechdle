const express = require('express');
const router = express.Router();
const db = require('./db.js'); // Import your database connection

async function pause() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Après la pause");
}
// Route for fetching Images directories
router.get('/', (req, res) => {
    db.query('SELECT * FROM polyguessr WHERE num_guess = 1 ORDER BY RAND() LIMIT 1', (err, results) => {
        if (err) {
            console.error('Error fetching ecole:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        results.forEach(async function(result) {
            db.query('SELECT * FROM polyguessrchoix', async (err, results) => {
                if (err) {
                    console.error('Error fetching ecole:', err);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }
                if (results.length > 0) {
                    await results.forEach((result) => {
                        db.query('DELETE FROM polyguessrchoix WHERE id = ?', [result.id], (err, results) => {
                            if (err) {
                                console.error('Error inserting ecole:', err);
                                res.status(500).json({ error: 'Internal server error' });
                                return;
                            }
                        });
                    });
                }
            })
            await pause(20);
            db.query('INSERT INTO polyguessrchoix (id, ecole, num_guess) VALUES (?, ?, ?)', [result.id, result.ecole, result.num_guess], (err, results) => {
                if (err) {
                    console.error('Error inserting ecole:', err);
                    res.status(500).json({ error: 'Internal server error' });
                    return;
                }
            });
            res.json({ lien: result.lien });
        });
    });
});

module.exports = router;