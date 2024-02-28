const express = require('express');
const launchChecker = require('./launchChecker'); // Importer le fichier launchChecker.js
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000; // Use the port specified in the environment variable PORT, or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});