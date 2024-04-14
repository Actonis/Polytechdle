const express = require('express');
const router = express.Router();
const db = require('./db.js');

router.post('/', (req, res) => {
    const userDate = req.body.date;

    // Convertir la date de l'utilisateur en objet Date
    const parts = userDate.split('/');
    const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);

    // Formater la date pour qu'elle corresponde au format attendu par la base de données (AAAA-MM-JJ)
    const formattedDateString = formattedDate.toISOString().slice(0, 10);

    // Suppression des données existantes dans la table reponsemirroir
    db.query('DELETE FROM reponsemirroir', (deleteError) => {
        if (deleteError) {
            console.error('Erreur lors de la suppression des données de la table reponsemirroir :', deleteError);
            return res.status(500).json({ error: 'Erreur lors de la suppression des données de la table reponsemirroir' });
        }

        // Sélection des noms des étudiants pour la date spécifiée
        db.query('SELECT nom FROM choixdujour WHERE dateduchoix = ?', [formattedDateString], (selectError, selectResults) => {
            if (selectError) {
                console.error('Erreur lors de la récupération des noms des étudiants :', selectError);
                return res.status(500).json({ error: 'Erreur lors de la récupération des noms des étudiants' });
            }

            const noms = selectResults.map(row => row.nom);

            // Sélection des données des étudiants correspondant aux noms récupérés
            db.query('SELECT * FROM etudiants WHERE eleve IN (?)', [noms], (selectError2, selectResults2) => {
                if (selectError2) {
                    console.error('Erreur lors de la récupération des données des étudiants :', selectError2);
                    return res.status(500).json({ error: 'Erreur lors de la récupération des données des étudiants' });
                }

                const etudiants = selectResults2;

                // Insertion des données des étudiants dans la table reponsemirroir
                const insertValues = etudiants.map(etudiant => [etudiant.eleve, etudiant.age, etudiant.genre, etudiant.specialite, etudiant.peip, etudiant.couleur_cheveux, etudiant.etudes_etranger, etudiant.pays_etranger, etudiant.annee_etude]);
                db.query('INSERT INTO reponsemirroir (eleve, age, genre, specialite, peip, couleur_cheveux, etudes_etranger, pays_etranger, annee_etude) VALUES ?', [insertValues], (insertError, insertResults) => {
                    if (insertError) {
                        console.error('Erreur lors de l\'insertion dans la table reponsemirroir :', insertError);
                        return res.status(500).json({ error: 'Erreur lors de l\'insertion dans la table reponsemirroir' });
                    }

                    console.log('Données insérées avec succès dans la table reponsemirroir');
                    res.json({ success: true });
                });
            });
        });
    });
});

module.exports = router;
