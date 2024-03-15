const fs = require('fs');
const conn = require('./db');

const lastLaunchFilePath = 'lastLaunch.json';
const limitDifference = 24 * 60 * 60 * 1000;

function getLastLaunchDate() {
  try {
    if (fs.existsSync(lastLaunchFilePath)) {
      const data = fs.readFileSync(lastLaunchFilePath, 'utf8');
      return new Date(JSON.parse(data).lastLaunch);
    } else {
      saveLastLaunchDate();
      return new Date();
    }
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier de dernière date de lancement :', error);
    return null;
  }
}

function saveLastLaunchDate() {
  try {
    const currentDate = new Date();
    const data = JSON.stringify({ lastLaunch: currentDate });
    fs.writeFileSync(lastLaunchFilePath, data);
  } catch (error) {
    console.error('Erreur lors de l\'écriture de la dernière date de lancement :', error);
  }
}

function checkLastLaunch() {
  const lastLaunchDate = getLastLaunchDate();
  if (!lastLaunchDate) {
    console.error('Impossible de récupérer la dernière date de lancement.');
    return;
  }

  const currentDate = Date.now();
  const difference = currentDate - lastLaunchDate.getTime();

  if (difference > limitDifference) {
    saveLastLaunchDate();
    conn.query('SELECT * FROM professeur ORDER BY RAND() LIMIT 1;', (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des professeurs :', error);
        return;
      }
      results.forEach((professeur) => {
        // Insérer le résultat dans la table choix_du_jour
        conn.query('INSERT INTO choixdujour (nom, prenom) VALUES (?, ?)', [professeur.nom, professeur.prenom], (insertError, insertResults) => {
          if (insertError) {
            console.error('Erreur lors de l\'insertion dans la table choix_du_jour :', insertError);
            return;
          }
        });
      });
    });
    conn.end();
  }
}

checkLastLaunch();
module.exports = { checkLastLaunch };
