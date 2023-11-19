// Vérification de la connexion de l'utilisateur avant d'accéder aux données
const idSessionStorage = sessionStorage.getItem("ID");
if (idSessionStorage === null) {
  // Redirige l'utilisateur vers la page de connexion s'il n'est pas connecté
  window.location.href = "index.html";
}

// Récupération des données existantes depuis le stockage local et ajout de nouvelles valeurs à un objet 'donnees'
let donnees = JSON.parse(localStorage.getItem("donnees"));
const monSondage = JSON.parse(localStorage.getItem("monSondage"));
donnees.sondage.push({
  base: monSondage.base.reponse,
  garniture: monSondage.garniture.reponse,
  taille: monSondage.taille.reponse,
  sucre: monSondage.sucre.reponse,
  frequence: monSondage.frequence.reponse,
});
localStorage.setItem("donnees", JSON.stringify(donnees));

// Récupération et affichage des objets stockés dans la console et sur la page
let monSondageStrStocker = localStorage.getItem("monSondage");
let monSondageStocker = JSON.parse(monSondageStrStocker);
console.log("Sondage:", monSondageStocker);

// Affichage des éléments récupérés sur la page
// Affichage du nom de l'utilisateur dans le titre et récupération des données de sondage
const salutationH2 = document.querySelector("#salutation");
const choixUl = document.querySelector("#vosChoix");
const nomNode = document.createTextNode(sessionStorage.getItem("ID"));
salutationH2.appendChild(nomNode);
const ajoutDonnees = JSON.parse(localStorage.getItem("donnees"));

// Boucle pour afficher les choix de l'utilisateur et les statistiques associées
for (let item in monSondageStocker) {
  const nouvLi = document.createElement("li");
  const choixNode = document.createTextNode("Votre choix de " + item + ": ");
  const reponseEnGras = document.createElement("strong");
  let nbrItemsPareil = 0;
  let nbrItemsDifferent = 0;

  for (let i = 0; i < ajoutDonnees.sondage.length; i++) {
    if (ajoutDonnees.sondage[i][item] === monSondageStocker[item].reponse) {
      nbrItemsPareil++;
    } else {
      nbrItemsDifferent++;
    }
  }

  // Calcul des statistiques basées sur les choix des utilisateurs
  const stat = parseInt(
    (nbrItemsPareil / (nbrItemsDifferent + nbrItemsPareil)) * 100
  );
  reponseEnGras.textContent =
    monSondageStocker[item].reponse +
    " et " +
    stat +
    "% de nos clients ont fait le même choix que vous!";
  nouvLi.appendChild(choixNode);
  nouvLi.appendChild(reponseEnGras);
  choixUl.appendChild(nouvLi);
}

// Affichage des réponses spécifiques à chaque question dans la console
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

// Enregistre la page actuelle visitée par l'utilisateur dans sessionStorage
sessionStorage.setItem("Page", "Page Quatre");

// Fonctionnalité de déconnexion qui efface les données de session et redirige vers la page de connexion
const boutonDeconnexion = document.querySelector(".deconnexion");
boutonDeconnexion.addEventListener("click", function () {
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = "index.html";
});

// Affiche le nom de l'utilisateur dans le menu s'il est connecté
const menuAfficher = document.querySelector(".menuAfficher");
const sessionPrenom = sessionStorage.getItem("prenom");
const sessionNom = sessionStorage.getItem("nom");
if (sessionPrenom) {
  menuAfficher.textContent = `Bonjour : ${sessionPrenom} ${sessionNom}`;
} else {
  menuAfficher.textContent = `Bonjour : Nouvel Utilisateur`;
}

// Une alerte pour indiquer à l'utilisateur que le sondage est terminé
(function () {
  const alerteSondage =
    "Merci d'avoir participé à notre sondage" +
    " " +
    sessionPrenom +
    " " +
    sessionNom +
    " !";
  alert(alerteSondage);
})();
