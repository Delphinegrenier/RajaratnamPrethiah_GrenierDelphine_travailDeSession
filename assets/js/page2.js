// Importe deux fonctions, deconnexionFct depuis le fichier 'deconnexion.js' et verificationFct depuis 'verification.js'. Ensuite, il appelle ces deux fonctions.
import { deconnexionFct } from "./deconnexion.js";
import { verificationFct } from "./verification.js";
deconnexionFct();
verificationFct();

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
      setTimeout(() => {
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

//Afficher le nom dans le menu
const menuAfficher = document.querySelector(".menuAfficher");
const sessionPrenom = sessionStorage.getItem("prenom");
const sessionNom = sessionStorage.getItem("nom");

if (sessionPrenom) {
  menuAfficher.textContent = `Bonjour : ${sessionPrenom} ${sessionNom}`;
}
