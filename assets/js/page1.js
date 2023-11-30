// Cette fonction immédiatement invoquée (IIFE) utilise fetch pour récupérer les données du fichier "sondage.json" et les stocke dans le stockage local du navigateur.
(() => {
  fetch("sondage.json")
    .then((reponse) => reponse.json())
    .then((data) => {
      localStorage.setItem("donnees", JSON.stringify(data));
    });
})();

// Gestion de la soumission du formulaire
const connexionForm = document.querySelector("#connexionForm");

//  Bloc 1: Récupération des éléments input et création de l'attribut placeholder
const identifiantInput = document.querySelector("#identifiant");
const motdepasseInput = document.querySelector("#motdepasse");
identifiantInput.setAttribute("placeholder", "Identifiant");
motdepasseInput.setAttribute("placeholder", "Mot de passe");

// Bloc 2: Création d'une classe Utilisateur
class Utilisateur {
  constructor(ID, mdp) {
    this.ID = ID;
    this.mdp = mdp;
  }
}

connexionForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  // Création d'une classe Utilisateur
  let valeurID = identifiantInput.value;
  let valeurMDP = motdepasseInput.value;
  // Instancier un objet de la classe Utilisateur
  let nouvUtilisateur = new Utilisateur(valeurID, valeurMDP);

  let sessionID = nouvUtilisateur.ID;
  let sessionMDP = nouvUtilisateur.mdp;

  //Bloc 3: Prendre les données du fichier "utilsateur.json"
  fetch("utilisateurs.json")
    .then((reponse) => reponse.json())
    .then((data) => {
      estReconnu = false;
      data.utilisateur.forEach((utilisateur) => {
        if (
          sessionID === utilisateur.login &&
          sessionMDP === utilisateur.password
        ) {
          sessionStorage.setItem("ID", valeurID);
          sessionStorage.setItem("password", valeurMDP);
          sessionStorage.setItem("prenom", utilisateur.prenom);
          sessionStorage.setItem("nom", utilisateur.nom);
          estReconnu = true;
        }
      });
      if (estReconnu) {
        // Rediriger vers "page2.html" après 2 secondes (fonction de fermeture)
        setTimeout(() => {
          window.location.href = "page2.html";
        }, 2000);
      } else {
        identifiantInput.value = "";
        motdepasseInput.value = "";
        alert("Veuillez vous abonnez !");
      }
    });
});

// Bloc 4: Gestion des événements pour le message de mot de passe invalide
const motDePasseInvalideElement = document.getElementById("motdepasseInvalide");

// Fonction fléchée qui affiche un message pour avoir le minimum requis
const afficherMessage = () => {
  motDePasseInvalideElement.textContent =
    "Veuillez vérifier si vous avez le minimum requis!";
};

// Fonction fléchée qui affiche un message pour avoir le minimum requis
const masquerMessage = () => {
  motDePasseInvalideElement.textContent =
    "Vous devez avoir 8 caractères et au moins un chiffre";
};

// Bloc 5: Ajout d'événements pour afficher et masquer le message en survolant l'élément
motDePasseInvalideElement.addEventListener("mouseover", afficherMessage);
motDePasseInvalideElement.addEventListener("mouseout", masquerMessage);

// Bloc 6: Fonction fléchée qui supprime l'élément du DOM (Document Object Model)
const supprimerElement = () => {
  motDePasseInvalideElement.parentNode.removeChild(motDePasseInvalideElement);
};

// Planifier la suppression de l'élément après 10 secondes
setTimeout(supprimerElement, 10000);

// Acffiche dans le sessionStorage la page affiché
sessionStorage.setItem("Page", "Page Un");
