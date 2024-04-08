const express = require('express');
const router = express.Router();

// Gestionnaire de route pour traiter la requête POST envoyée depuis le client avec la date sélectionnée
router.post('/', (req, res) => {
    // Extraire la date du corps de la requête
    const selectedDate = req.body.date;
    
    // Faire quelque chose avec la date (par exemple, l'afficher dans la console)
    console.log('Date sélectionnée côté serveur :', selectedDate);

    // Répondre au client avec un message de confirmation ou toute autre donnée nécessaire
    res.json({ message: 'Date sélectionnée reçue avec succès côté serveur' });
});

module.exports = router;