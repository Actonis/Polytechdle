document.addEventListener("DOMContentLoaded", function() {
    function estValide(button) {
        return button.innerHTML.length == 0;
      }
      
      function setSymbol(btn, symbole, joueur) {
        if (symbole == "BDE") {
          btn.innerHTML = '<img src="https://files.u-angers.fr/data/f-8132122776eb7e33ff1bf0b1.PNG" alt="X" style="max-width: 100%; max-height: 100%;">';
          btn.setAttribute('data-player', 'BDE');
        } else {
          btn.innerHTML = '<img src="https://files.u-angers.fr/data/f-1e7877e4b7d209ae9275f73d.png" alt="O" style="max-width: 100%; max-height: 100%;">';
          btn.setAttribute('data-player', 'BDS');
        }
      }
      
      function rechercherVainqueur(pions, joueurs, tour) {
        if (
          pions[0].getAttribute('data-player') == joueurs[tour] &&
          pions[1].getAttribute('data-player') == joueurs[tour] &&
          pions[2].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[0].style.backgroundColor = "#9ACD32";
          pions[1].style.backgroundColor = "#9ACD32";
          pions[2].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[3].getAttribute('data-player') == joueurs[tour] &&
          pions[4].getAttribute('data-player') == joueurs[tour] &&
          pions[5].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[3].style.backgroundColor = "#9ACD32";
          pions[4].style.backgroundColor = "#9ACD32";
          pions[5].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[6].getAttribute('data-player') == joueurs[tour] &&
          pions[7].getAttribute('data-player') == joueurs[tour] &&
          pions[8].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[6].style.backgroundColor = "#9ACD32";
          pions[7].style.backgroundColor = "#9ACD32";
          pions[8].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[0].innerHTML == joueurs[tour] &&
          pions[3].innerHTML == joueurs[tour] &&
          pions[6].innerHTML == joueurs[tour]
        ) {
          pions[0].style.backgroundColor = "#9ACD32";
          pions[3].style.backgroundColor = "#9ACD32";
          pions[6].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[1].getAttribute('data-player') == joueurs[tour] &&
          pions[4].getAttribute('data-player') == joueurs[tour] &&
          pions[7].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[1].style.backgroundColor = "#9ACD32";
          pions[4].style.backgroundColor = "#9ACD32";
          pions[7].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[2].getAttribute('data-player') == joueurs[tour] &&
          pions[5].getAttribute('data-player') == joueurs[tour] &&
          pions[8].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[2].style.backgroundColor = "#9ACD32";
          pions[5].style.backgroundColor = "#9ACD32";
          pions[8].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[0].getAttribute('data-player') == joueurs[tour] &&
          pions[4].getAttribute('data-player') == joueurs[tour] &&
          pions[8].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[0].style.backgroundColor = "#9ACD32";
          pions[4].style.backgroundColor = "#9ACD32";
          pions[8].style.backgroundColor = "#9ACD32";
          return true;
        }
      
        if (
          pions[2].getAttribute('data-player') == joueurs[tour] &&
          pions[4].getAttribute('data-player') == joueurs[tour] &&
          pions[6].getAttribute('data-player') == joueurs[tour]
        ) {
          pions[2].style.backgroundColor = "#9ACD32";
          pions[4].style.backgroundColor = "#9ACD32";
          pions[6].style.backgroundColor = "#9ACD32";
          return true;
        }
      }
      
      function matchNul(pions) {
        for (var i = 0, len = pions.length; i < len; i++) {
          if (pions[i].innerHTML.length == 0) return false;
        }
      
        return true;
      }
      
      var Afficheur = function(element) {
        var affichage = element;
      
        function setText(message) {
          affichage.innerHTML = message;
        }
      
        return { sendMessage: setText };
      };
      
      function main() {
        var pions = document.querySelectorAll("#Jeu button");
        var joueurs = ["BDE", "BDS"];
        var tour = 0;
        var jeuEstFini = false;
        var afficheur = new Afficheur(document.querySelector("#StatutJeu"));
        afficheur.sendMessage(
          "Le jeu peut commencer ! <br /> " +
            joueurs[tour] +
            " c'est votre tour."
        );
        for (var i = 0, len = pions.length; i < len; i++) {
          pions[i].addEventListener("click", function() {
            if (jeuEstFini) return;
      
            if (!estValide(this)) {
              afficheur.sendMessage(
                "Case occupée ! <br /> " +
                  joueurs[tour] +
                  " c'est toujours à vous !"
              );
            } else {
              setSymbol(this, joueurs[tour], joueurs[tour]);
              jeuEstFini = rechercherVainqueur(pions, joueurs, tour);
      
              if (jeuEstFini) {
                afficheur.sendMessage(
                  "Le " +
                    joueurs[tour] +
                    ' a gagné ! <br /> <a href="tictactoe.html">Rejouer</a>'
                );
                return;
              }
      
              if (matchNul(pions)) {
                afficheur.sendMessage(
                  'Match Nul ! <br/> <a href="tictactoe.html">Rejouer</a>'
                );
                return;
              }
      
              tour++;
              tour = tour % 2;
              afficheur.sendMessage(joueurs[tour] + " c'est à vous !");
            }
          });
        }
      }
      
      main();
});