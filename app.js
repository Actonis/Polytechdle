const express = require('express');
const app = express();
const launchChecker = require('./choixdujour.js');
const getNamesRoute = require('./getNames.js');
const getDatesRoute = require('./getDates.js')

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/checkLastLaunch', (req, res) => {
    launchChecker.checkLastLaunch();
    res.sendStatus(200);
});

app.use('/getNames', getNamesRoute); // Using the getNames route

app.use('/getDates',getDatesRoute);


const PORT = process.env.PORT || 3000; // Use the port specified in the environment variable PORT, or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});