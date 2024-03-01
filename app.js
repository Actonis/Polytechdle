const express = require('express');
const app = express();
const verifyRoute = require('./verify.js');
const getNamesRoute = require('./getNames.js');

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/getNames', getNamesRoute); // Using the getNames route

app.use('/verify', verifyRoute); // Using the verification route

const PORT = process.env.PORT || 3000; // Use the port specified in the environment variable PORT, or default to 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});