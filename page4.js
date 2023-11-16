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
  const choixNode = document.createTextNode("Votre choix de " + item + ": ");
  const reponseEnGras = document.createElement("strong");
  reponseEnGras.textContent = monSondageStocker[item].reponse;
  nouvLi.appendChild(choixNode);
  nouvLi.appendChild(reponseEnGras);
  choixUl.appendChild(nouvLi);
}

//Affichage dans la console les réponses
console.log("Réponse à la question base:", monSondageStocker.base.reponse);
console.log(
  "Réponse à la question garniture:",
  monSondageStocker.garniture.reponse
);
console.log("Réponse à la question taille:", monSondageStocker.taille.reponse);
console.log("Réponse à la question sucre:", monSondageStocker.sucre.reponse);
console.log(
  "Réponse à la question frequence:",
  monSondageStocker.frequence.reponse
);

//Suit et affiche les pages que visitent les utilisateurs pendant leur session
sessionStorage.setItem("Page", "Page Quatre");

// Bouton de déconnexion qui clear le session storage et local storage et renvoie à la page de connexion
const boutonDeconnexion = document.querySelector(".deconnexion");
boutonDeconnexion.addEventListener("click", function () {
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "index.html";
});

//Afficher le nom dans le menu
const menuAfficher = document.querySelector(".menuAfficher");
const sessionPrenom = sessionStorage.getItem("prenom");
const sessionNom = sessionStorage.getItem("nom");
if (sessionPrenom) {
  menuAfficher.textContent = `Bonjour : ${sessionPrenom} ${sessionNom}`;
} else {
  menuAfficher.textContent = `Bonjour : Nouvel Utilisateur`;
}
