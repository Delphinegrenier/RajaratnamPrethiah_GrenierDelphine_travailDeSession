// Importer les objets stockés depuis le stockage local (localStorage)
// Récupération de l'objet utilisateur préalablement stocké

let monUtiliStrStocker = localStorage.getItem("monUtilisateur");
let monUtiliStocker = JSON.parse(monUtiliStrStocker);

let monSondageStrStocker = localStorage.getItem("monSondage");
let monSondageStocker = JSON.parse(monSondageStrStocker);

// Affichage des objets récupérés dans la console
console.log("Utilisateur:", monUtiliStocker);
console.log("Sondage:", monSondageStocker);

// Affichage des éléments stockés dans la page
const salutationH2 = document.querySelector("#salutation");
const choixUl = document.querySelector("#vosChoix");
const nomNode = document.createTextNode(monUtiliStocker.ID);
salutationH2.appendChild(nomNode);

for (let item in monSondageStocker) {
  const nouvLi = document.createElement("li");
  const choixNode = document.createTextNode(
    item + ": " + monSondageStocker[item].reponse
  );
  nouvLi.appendChild(choixNode);
  choixUl.appendChild(nouvLi);
}

//Affichage dans la console les réponses
console.log(monSondageStocker.base.reponse);
console.log(monSondageStocker.garniture.reponse);
console.log(monSondageStocker.taille.reponse);
console.log(monSondageStocker.sucre.reponse);
console.log(monSondageStocker.frequence.reponse);
