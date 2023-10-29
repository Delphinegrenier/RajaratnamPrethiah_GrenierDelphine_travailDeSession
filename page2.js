/* Ancien Code
// Bloc 1: Sélection des boutons "Commencer" et "Précédent" par leur ID
const commencerBouton = document.getElementById("commencerBouton");
const precedentBouton = document.getElementById("precedentBouton");

// Écouteur d'événement pour le bouton "Commencer"
commencerBouton.addEventListener("click", function () {
  // Après un délai de 2 secondes, redirige vers "page3.html"
  setTimeout(function () {
    window.location.href = "page3.html";
  }, 2000);
});

// Écouteur d'événement pour le bouton "Précédent"
precedentBouton.addEventListener("click", function () {
  // Après un délai de 2 secondes, redirige vers "page1.html"
  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
});

// Bloc 2: Création d'un text node pour ensuite ajouter au H2
const paragrapheSondage = document.createTextNode(
  "Commencer le sondage PearlTea"
);

// Ajout du textNode dans le h2 du document
const h2 = document.querySelector("h2");
h2.appendChild(paragrapheSondage);

// Message Bienvenue
const messageBienvenueElement = document.getElementById("messageBienvenue");
const messageBienvenue = "Bienvenue !";
messageBienvenueElement.textContent = messageBienvenue;*/

class Informations {
  constructor() {
    this.commencerBouton = document.getElementById("commencerBouton");
    this.precedentBouton = document.getElementById("precedentBouton");
    this.messageBienvenueElement = document.getElementById("messageBienvenue");
    this.h2Element = document.querySelector("h2");
  }

  initialiser() {
    this.commencerBouton.addEventListener("click", () => {
      setTimeout(function () {
        window.location.href = "page3.html";
      }, 2000);
    });

    this.precedentBouton.addEventListener("click", () => {
      setTimeout(function () {
        window.location.href = "index.html";
      }, 2000);
    });

    this.messageBienvenueElement.textContent = "Bienvenue !";
    this.h2Element.appendChild(
      document.createTextNode("Commencer le sondage PearlTea")
    );
  }
}

const AproposPearlTea = new Informations();
AproposPearlTea.initialiser();
