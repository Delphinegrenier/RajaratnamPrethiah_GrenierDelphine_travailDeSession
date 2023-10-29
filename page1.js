// Bloc 1: Gestion de la soumission du formulaire
const connexionForm = document.querySelector("#connexionForm");

// Récupération des éléments input et création de l'attribut placeholder
const identifiantInput = document.querySelector("#identifiant");
const motdepasseInput = document.querySelector("#motdepasse");

console.log(identifiantInput);
console.log(motdepasseInput);
identifiantInput.setAttribute("placeholder", "Identifiant");
motdepasseInput.setAttribute("placeholder", "Mot de passe");

class Utilisateur {
  constructor(ID, mdp) {
    this.ID = ID;
    this.mdp = mdp;
  }
}

connexionForm.addEventListener("submit", function (event) {
  const valeurID = identifiantInput.value;
  const valeurMDP = motdepasseInput.value;
  //Instancier un objet de la classe Utilisateur
  let nouvUtilisateur = new Utilisateur(valeurID, valeurMDP);

  //Stockage des données de l'objet utilisateur
  let utilisateurStr = JSON.stringify(nouvUtilisateur);
  localStorage.setItem("monUtilisateur", utilisateurStr);

  event.preventDefault(); // Empêche le formulaire de se soumettre normalement
  // Envoyer le formulaire après 2 secondes
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

motDePasseInvalideElement.addEventListener("mouseover", afficherMessage);
motDePasseInvalideElement.addEventListener("mouseout", masquerMessage);

// Bloc 3: Suppression de l'élément p (mot de passe invalide) après 10 secondes
function supprimerElement() {
  motDePasseInvalideElement.parentNode.removeChild(motDePasseInvalideElement);
}

setTimeout(supprimerElement, 10000);
