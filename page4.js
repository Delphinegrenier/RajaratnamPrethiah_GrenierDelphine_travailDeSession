// Importer les objets stockés depuis le stockage local (localStorage)
// Récupération de l'objet utilisateur préalablement stocké
let monUtiliStrStocker = localStorage.getItem("monUtilisateur");
let monUtiliStocker = JSON.parse(monUtiliStrStocker);

// Récupération de l'objet sondage préalablement stocké
let monSondageStrStocker = localStorage.getItem("monSondage");
let monSondageStocker = JSON.parse(monSondageStrStocker);

// Affichage des objets récupérés dans la console
console.log(monUtiliStocker);
console.log(monSondageStocker);
