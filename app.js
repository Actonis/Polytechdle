const express = require('express');
const bodyParser = require('body-parser'); // Importez le middleware body-parser
const app = express();
const verifyRoute = require('./verify.js');
const getNamesRoute = require('./getNames.js');
const launchChecker = require('./choixdujour.js');
const getDatesRoute = require('./getDates.js');
const handleDateRoute = require('./handleDate.js'); // Importez le nouveau gestionnaire de route pour la date sélectionnée

app.use(express.static('public'));

// Middleware pour parser les corps de requête en JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/getNames', getNamesRoute);
app.use('/verify', verifyRoute);
app.get('/checkLastLaunch', (req, res) => {
    launchChecker.checkLastLaunch();
    res.sendStatus(200);
});

app.use('/getDates', getDatesRoute);
app.use('/handleDate', handleDateRoute); // Utilisez le nouveau gestionnaire de route pour la date sélectionnée

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
