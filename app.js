const express = require('express');
const bodyParser = require('body-parser'); // Importez le middleware body-parser
const app = express();
const verifyRoute = require('./verify.js');
const verifyRouteSagi = require('./verifySagi.js');
const verifyRouteMirror = require('./verifyMirror.js');
const getNamesRoute = require('./getNames.js');
const getNamesRouteSagi = require('./getNamesSagi.js');
const launchChecker = require('./choixdujour.js');
const getDatesRoute = require('./getDates.js');
const getImgroute = require('./getImages.js');
const setImgroute = require('./setImg.js');
const setImgroute2 = require('./setImg2.js');
const setImgroute3 = require('./setImg3.js');
const verifyImgroute = require('./verifyImg.js');
const handleDateRoute = require('./handleDate.js'); // Importez le nouveau gestionnaire de route pour la date sélectionnée

app.use(express.static('public'));

// Middleware pour parser les corps de requête en JSON
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/getNames', getNamesRoute);
app.use('/getNamesSagi', getNamesRouteSagi);
app.use('/verify', verifyRoute);
app.use('/verifySagi', verifyRouteSagi);
app.use('/verifyMirror', verifyRouteMirror);
app.get('/checkLastLaunch', (req, res) => {
    launchChecker.checkLastLaunch();
    res.sendStatus(200);
});

app.use('/getDates', getDatesRoute);
app.use('/handleDate', handleDateRoute); // Utilisez le nouveau gestionnaire de route pour la date sélectionnée

app.use('/getImages', getImgroute);
app.use('/setImg', setImgroute);
app.use('/setImg2', setImgroute2);
app.use('/setImg3', setImgroute3);
app.use('/verifyImg', verifyImgroute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
