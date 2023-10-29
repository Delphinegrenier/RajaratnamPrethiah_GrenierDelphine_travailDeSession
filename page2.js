// Définition de la classe Informations
class Informations {
  constructor() {
    // Initialisation des propriétés de la classe avec des éléments du DOM
    this.commencerBouton = document.getElementById("commencerBouton");
    this.precedentBouton = document.getElementById("precedentBouton");
    this.messageBienvenueElement = document.getElementById("messageBienvenue");
    this.h2Element = document.querySelector("h2");
  }

  // Méthode pour initialiser les actions et le contenu de la page
  initialiser() {
    // Ajout d'un écouteur d'événement sur le bouton "Commencer"
    this.commencerBouton.addEventListener("click", () => {
      // Rediriger vers "page3.html" après 2 secondes
      setTimeout(function () {
        window.location.href = "page3.html";
      }, 2000);
    });

    // Ajout d'un écouteur d'événement sur le bouton "Précédent"
    this.precedentBouton.addEventListener("click", () => {
      // Rediriger vers "index.html" après 2 secondes
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    });

    // Modifier le contenu de l'élément messageBienvenueElement
    this.messageBienvenueElement.textContent = "Bienvenue !";

    // Ajouter un texte à l'élément h2Element
    this.h2Element.appendChild(
      document.createTextNode("Commencer le sondage PearlTea")
    );
  }
}

// Instanciation d'un objet de la classe Informations
const AproposPearlTea = new Informations();

// Appel de la méthode initialiser pour configurer la page
AproposPearlTea.initialiser();
