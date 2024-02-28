const fs = require('fs');

const lastLaunchFilePath = 'lastLaunch.json';
const limitDifference = 24 * 60 * 60 * 1000; // 24 heures en millisecondes

function getLastLaunchDate() {
  try {
    if (fs.existsSync(lastLaunchFilePath)) {
      const data = fs.readFileSync(lastLaunchFilePath, 'utf8');
      return new Date(JSON.parse(data).lastLaunch);
    } else {
      console.log('Le fichier lastLaunch.json n\'existe pas. Création du fichier...');
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
    console.log('La dernière date de lancement dépasse la limite. Exécution du script...');
    // Exécutez votre script ici
  } else {
    console.log('La dernière date de lancement est dans la limite.');
  }
}

checkLastLaunch();
saveLastLaunchDate();