(function () {
  fetch("sondage.json")
    .then((reponse) => reponse.json())
    .then((data) => {
      localStorage.setItem("donnees", JSON.stringify(data));
    });
})();

// Bloc 1: Gestion de la soumission du formulaire
const connexionForm = document.querySelector("#connexionForm");

// Récupération des éléments input et création de l'attribut placeholder
const identifiantInput = document.querySelector("#identifiant");
const motdepasseInput = document.querySelector("#motdepasse");
identifiantInput.setAttribute("placeholder", "Identifiant");
motdepasseInput.setAttribute("placeholder", "Mot de passe");

class Utilisateur {
  constructor(ID, mdp) {
    this.ID = ID;
    this.mdp = mdp;
  }
}

connexionForm.addEventListener("submit", function (event) {
  // Création d'une classe Utilisateur

  const valeurID = identifiantInput.value;
  const valeurMDP = motdepasseInput.value;
  // Instancier un objet de la classe Utilisateur
  let nouvUtilisateur = new Utilisateur(valeurID, valeurMDP);

  let sessionID = nouvUtilisateur.ID;
  let sessionMDP = nouvUtilisateur.mdp;

  fetch("utilisateurs.json")
    .then((reponse) => reponse.json())
    .then((data) => {
      data.utilisateur.forEach((utilisateur) => {
        if (
          sessionID === utilisateur.login &&
          sessionMDP === utilisateur.password
        ) {
          sessionStorage.setItem("ID", valeurID);
          sessionStorage.setItem("password", valeurMDP);
          sessionStorage.setItem("prenom", utilisateur.prenom);
          sessionStorage.setItem("nom", utilisateur.nom);
        }
      });
    });

  event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  // Rediriger vers "page2.html" après 2 secondes
  setTimeout(function () {
    window.location.href = "page2.html";
  }, 2000);
});

// Bloc 2: Gestion des événements pour le message de mot de passe invalide
const motDePasseInvalideElement = document.getElementById("motdepasseInvalide");

function afficherMessage() {
  motDePasseInvalideElement.textContent =
    "Veuillez vérifier si vous avez le minimum requis!";
}

function masquerMessage() {
  motDePasseInvalideElement.textContent =
    "Vous devez avoir 8 caractères et au moins un chiffre";
}

// Ajout d'événements pour afficher et masquer le message en survolant l'élément
motDePasseInvalideElement.addEventListener("mouseover", afficherMessage);
motDePasseInvalideElement.addEventListener("mouseout", masquerMessage);

// Bloc 3: Suppression de l'élément p (mot de passe invalide) après 10 secondes
function supprimerElement() {
  // Supprimer l'élément du DOM (Document Object Model)
  motDePasseInvalideElement.parentNode.removeChild(motDePasseInvalideElement);
}

// Planifier la suppression de l'élément après 10 secondes
setTimeout(supprimerElement, 10000);

sessionStorage.setItem("Page", "Page Un");
