const fs = require('fs');
const conn = require('./db');

const lastLaunchFilePath = 'lastLaunch.json';
var FileAlreadyExist = false;

function getLastLaunchDate() {
  try {
    if (fs.existsSync(lastLaunchFilePath)) {
      const data = fs.readFileSync(lastLaunchFilePath, 'utf8');
      FileAlreadyExist = true;
      return new Date(JSON.parse(data).lastLaunch);
    } else {
      saveLastLaunchDate();
      FileAlreadyExist = false;
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

  const currentDate = new Date();
  
  // Comparaison des parties de la date (année, mois et jour)
  if (
    lastLaunchDate.getFullYear() !== currentDate.getFullYear() ||
    lastLaunchDate.getMonth() !== currentDate.getMonth() ||
    lastLaunchDate.getDate() !== currentDate.getDate() ||
    FileAlreadyExist == false
  ) {
    saveLastLaunchDate();
    conn.query('SELECT * FROM etudiants ORDER BY RAND() LIMIT 1;', (error, results) => {
      if (error) {
        console.error('Erreur lors de la récupération des professeurs :', error);
        return;
      }
      results.forEach((etudiants) => {
        // Insérer le résultat dans la table choix_du_jour
        conn.query('INSERT INTO choixdujour (nom) VALUES (?)', [etudiants.eleve], (insertError, insertResults) => {
          if (insertError) {
            console.error('Erreur lors de l\'insertion dans la table choix_du_jour :', insertError);
            return;
          }
        });
        conn.query('DELETE FROM reponse', (insertError2, insertResults2) => {
          if (insertError2) {
            console.error('Erreur lors de l\'insertion dans la table choix_du_jour :', insertError2);
            return;
          }
        });
        conn.query('INSERT INTO reponse (eleve, age, genre, specialite, peip, couleur_cheveux, etudes_etranger, pays_etranger, annee_etude) VALUES (?,?,?,?,?,?,?,?,?)', [etudiants.eleve, etudiants.age, etudiants.genre, etudiants.specialite, etudiants.peip, etudiants.couleur_cheveux, etudiants.etudes_etranger, etudiants.pays_etranger, etudiants.annee_etude], (insertError3, insertResults3) => {
          if (insertError3) {
            console.error('Erreur lors de l\'insertion dans la table choix_du_jour :', insertError3);
            return;
          }
        });
      });
    });
  }
}


checkLastLaunch();
module.exports = { checkLastLaunch };
