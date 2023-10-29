// Importer les objets stocker
let monUtiliStrStocker = localStorage.getItem("monUtilisateur");
let monUtiliStocker = JSON.parse(monUtiliStrStocker);

let monSondageStrStocker = localStorage.getItem("monSondage");
let monSondageStocker = JSON.parse(monSondageStrStocker);
console.log(monUtiliStocker);
console.log(monSondageStocker);
