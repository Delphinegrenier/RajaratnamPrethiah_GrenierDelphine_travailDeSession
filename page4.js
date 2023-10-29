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

//Affichage des éléments stocker dans la page
const salutationH2 = document.querySelector("#salutation");
const choixUl = document.querySelector("#vosChoix");
const nomNode = document.createTextNode(monUtiliStocker.ID);

console.log(monSondageStocker.base.reponse);
salutationH2.appendChild(nomNode);

for (let item in monSondageStocker) {
  const nouvLi = document.createElement("li");
  const choixNode = document.createTextNode(item);
  nouvLi.appendChild(choixNode);
  choixUl.appendChild(nouvLi);
}
