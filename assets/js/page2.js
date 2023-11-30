// Vérification de la connexion de l'utilisateur avant d'accéder aux données
const idSessionStorage = sessionStorage.getItem("ID");
if (idSessionStorage === null) {
  (() => {
    const alerteConnection = "Vous n'avez pas de compte! Abonnez-vous!";
    alert(alerteConnection);
    // Redirige l'utilisateur vers la page de connexion s'il n'est pas connecté
    window.location.href = "index.html";
  })();
}

// Définition de la classe Informations
class Informations {
  constructor() {
    // Bloc 1: Initialisation des propriétés de la classe avec des éléments du DOM
    this.commencerBouton = document.getElementById("commencerBouton");
    this.precedentBouton = document.getElementById("precedentBouton");
    this.messageBienvenueElement = document.getElementById("messageBienvenue");
    this.h2Element = document.querySelector("h2");
  }

  // Bloc 2: Méthode pour initialiser les actions et le contenu de la page
  initialiser() {
    // Ajout d'un écouteur d'événement sur le bouton "Commencer"
    this.commencerBouton.addEventListener("click", () => {
      // Rediriger vers "page3.html" après 2 secondes
      setTimeout(function () {
        window.location.href = "page3.html";
      }, 2000);
    });

    // Bloc: 3: Modifier le contenu de l'élément messageBienvenueElement
    this.messageBienvenueElement.textContent = "Bienvenue !";

    // Bloc 4: Ajouter un texte à l'élément h2Element
    this.h2Element.appendChild(
      document.createTextNode("Commencer le sondage PearlTea")
    );
  }
}

// Bloc 5: Instanciation d'un objet de la classe Informations
const AproposPearlTea = new Informations();

// Bloc 6: Appel de la méthode initialiser pour configurer la page
AproposPearlTea.initialiser();

// Bouton de déconnexion qui clear le session storage et local storage et renvoie à la page de connexion
const boutonDeconnexion = document.querySelector(".deconnexion");
boutonDeconnexion.addEventListener("click", () => {
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
}

//Suit et affiche les pages que visitent les utilisateurs pendant leur session
sessionStorage.setItem("Page", "Page Deux");
