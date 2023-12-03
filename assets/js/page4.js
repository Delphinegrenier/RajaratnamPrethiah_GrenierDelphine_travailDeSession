// Importe deux fonctions, deconnexionFct depuis le fichier 'deconnexion.js' et verificationFct depuis 'verification.js'. Ensuite, il appelle ces deux fonctions.
import { deconnexionFct } from "./deconnexion.js";
import { verificationFct } from "./verification.js";
deconnexionFct();
verificationFct();

// Bloc 1: Mise à jour des données existantes en local avec de nouvelles valeurs issues du sondage
let donneesAjoutes = JSON.parse(localStorage.getItem("donnees"));
const monSondage = JSON.parse(localStorage.getItem("monSondage"));
donneesAjoutes.sondage.push({
  base: monSondage.base.reponse,
  garniture: monSondage.garniture.reponse,
  taille: monSondage.taille.reponse,
  sucre: monSondage.sucre.reponse,
  frequence: monSondage.frequence.reponse,
});
//Ajoute dans le local storage les nouvelles données ajoutées par l'utilsateur
localStorage.setItem("donnees", JSON.stringify(donneesAjoutes));

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
const ajoutDonneesNouvelles = JSON.parse(localStorage.getItem("donnees"));

// Bloc 2: Boucle pour afficher les choix de l'utilisateur et les statistiques associées
for (let itemChoisi in monSondageStocker) {
  const nouvLi = document.createElement("li");
  const choixNode = document.createTextNode(`Votre choix de ${itemChoisi}: `);
  const reponseEnGras = document.createElement("strong");
  let nbrItemsPareil = 0;
  let nbrItemsDifferent = 0;

  for (let i = 0; i < ajoutDonneesNouvelles.sondage.length; i++) {
    if (
      ajoutDonneesNouvelles.sondage[i][itemChoisi] ===
      monSondageStocker[itemChoisi].reponse
    ) {
      nbrItemsPareil++;
    } else {
      nbrItemsDifferent++;
    }
  }

  // Bloc 3: Calcul des statistiques basées sur les choix des utilisateurs
  const stat = parseInt(
    (nbrItemsPareil / (nbrItemsDifferent + nbrItemsPareil)) * 100
  );
  reponseEnGras.textContent = `${monSondageStocker[itemChoisi].reponse} et ${stat}% de nos clients ont fait le même choix que vous!`;
  nouvLi.appendChild(choixNode);
  nouvLi.appendChild(reponseEnGras);
  choixUl.appendChild(nouvLi);
}

// Bloc 4: Affichage des réponses spécifiques à chaque question dans la console
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

// Affiche le nom de l'utilisateur dans le menu s'il est connecté
const menuAfficher = document.querySelector(".menuAfficher");
const sessionPrenom = sessionStorage.getItem("prenom");
const sessionNom = sessionStorage.getItem("nom");
if (sessionPrenom) {
  menuAfficher.textContent = `Bonjour : ${sessionPrenom} ${sessionNom}`;
}

// Message d'alerte pour informer l'utilisateur que le sondage est terminé
(() => {
  const alerteSondage = `Merci d'avoir participé à notre sondage ${sessionPrenom} ${sessionNom} !`;
  alert(alerteSondage);
})();
