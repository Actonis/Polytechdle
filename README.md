# Projet de jeu en ligne avec Polytech !

## Polydle
Etudiants : Mathis NAGMAR, Soren COMBALOT, Katia JAGUENEAU, Mathys CHIEN CHOW CHINE

Explication du cours :
Dans la cadre de la matière enseignée par Mehdi Lhommeau en 4 ème année, nous devons réaliser un
projet en HTML5 et par la suite convaincre l’auditoire de l’intérêt de notre projet et ses qualités.

Présentation du projet :
Pour notre projet, nous avons souhaité nous inspirer de certains jeux en ligne auxquels nous jouons.
Prenons l’exemple de « Valodle » ( https://valodle.eu/ ) :

Le but du jeu est assez simple : trouver le « Personnage du jour ». Pour cela, vous proposez
initialement un nom de personnage. En réponse, l’application indique si différents critères (tels que
le genre, l'espèce, le rôle, l'origine et l'année de sortie) correspondent ou non. Cela permet de
réduire progressivement la liste des personnages jusqu'à identifier le bon.

Nous envisageons d'adapter ce jeu avec les étudiants de Polytech. Nous avons fait un sondage et les personnes ayant répondues se voient implémentées dans le jeu.
Ainsi, les étudiants pourraient tenter de découvrir la « Personne du jour », favorisant une meilleure
connaissance des étudiants de l'école.

Pour distinguer chaque personne, nous avons envisagé les critères suivants :
- Nom et prénom (élément à deviner)
- Âge
- Genre
- Spécialité
- Si l'étudiant était en PEIP ou non
- Sa couleur de cheveux
- Pour les 3A et plus, si il va ou a fait un stage ou semestre à l'étranger
- Le pays de ce stage ou semestre
- Son année d'étude


## Mode d'emploi
La base de donnée avec les enregistrements et les tables nécéssaires est dans le script test.sql.
Une fois la BDD ajoutée via XAMPP, il faut s'assurer que le module Apache et MySql lancés avant de lancer l'application.

Pour lancer le site, il suffit d'utiliser node et le fichier app.js.
