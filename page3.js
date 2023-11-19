const idSessionStorage = sessionStorage.getItem("ID");
if(idSessionStorage === null){
    window.location.href = "index.html";
}

// Bloc 1: Fonction qui s'exécute une seule fois dans la vie du programme
(function () {
  const alerteSondage =
    "Rejoignez notre sondage en partageant vos saveurs préférées, vos combinaisons de perles incontournables et bien plus encore. Votre opinion est précieuse pour nous. Bon sondage!";
  alert(alerteSondage);
})();

// Bloc 2: Création de classes pour définir les questions du sondage
class DerniereQuestion {
  constructor(question, options) {
    this.question = question;
    this.options = options;
    this.reponse = "null";
  }

  repondre(reponse) {
    this.reponse = reponse;
  }
}

class Question extends DerniereQuestion {
  constructor(question, options, destination) {
    super(question, options);
    this.destination = destination;
  }
}

// Bloc 3: Instances des classes pour définir les questions, réponses et destinations
const base = new Question(
  "Quelle base préférez-vous pour votre thé?",
  ["Thé", "Lait", "Jus"],
  "garniture"
);

const garniture = new Question(
  "Quelles garnitures ajoutez-vous à votre boisson?",
  [
    "Perles de tapioca",
    "Perles éclatantes",
    "Morceaux de fruits",
    "Haricots",
    "Aucune garniture",
  ],
  "taille"
);

const taille = new Question(
  "Généralement, quelle taille de boisson commandez-vous?",
  ["Petit", "Moyen", "Grand"],
  "sucre"
);

const sucre = new Question(
  "Quel niveau de sucre choisissez-vous?",
  ["0%", "25%", "50%", "75%", "100%"],
  "frequence"
);

const frequence = new DerniereQuestion(
  "À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement?",
  ["0", "1-2", "3-4", "5-6", "7+"]
);

// Bloc 4: Création de l'objet monSondage qui stocke les instances
let monSondage = {
  base,
  garniture,
  taille,
  sucre,
  frequence,
};

// Bloc 5: Stockage des données de l'objet monSondage dans le localStorage
let sondageStr = JSON.stringify(monSondage);
localStorage.setItem("monSondage", sondageStr);

// Bloc 6: Définition d'une variable globale pour suivre l'étape actuelle du sondage
let etapeActuelle = "base";

// Bloc 7: Fonction principale pour afficher les questions en fonction de la clé donnée
function afficherQuestions(cle) {
  let questions = document.querySelector("h2");
  questions.innerText = monSondage[cle].question;
  const inputs = document.querySelector(".barreoptions");
  let containerBoutons = document.querySelector(".containerBoutons");

  // Le while enlève les inputs pour éviter leur duplication
  while (inputs.firstChild) {
    inputs.removeChild(inputs.firstChild);
  }

  // Le while enlève les boutons pour éviter leur duplication
  while (containerBoutons.firstChild) {
    containerBoutons.removeChild(containerBoutons.firstChild);
  }

  // Variable pour suivre si une option a été sélectionnée
  let optionSelectionnee = false;
  let reponseChoisie = null;

  // Une boucle qui crée des inputs pour chaque option à chaque nouvelle clé
  for (let i in monSondage[cle].options) {
    const nouveauLabel = document.createElement("label");
    nouveauLabel.innerText = monSondage[cle].options[i];
    const nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("type", "radio");
    nouveauInput.setAttribute("name", "reponse");
    nouveauInput.setAttribute("value", monSondage[cle].options[i]);
    const nouveauDiv = document.createElement("div");
    nouveauDiv.setAttribute("class", "containeroptions");

    // Marquer l'option comme sélectionnée lors du changement
    nouveauInput.addEventListener("change", function () {
      optionSelectionnee = true;
      reponseChoisie = nouveauInput.value;
    });

    nouveauDiv.appendChild(nouveauLabel);
    nouveauDiv.appendChild(nouveauInput);
    inputs.appendChild(nouveauDiv);
  }

  // Créer un bouton "Continuer" pour permettre à l'utilisateur de passer à la question suivante
  const continuerBtn = document.createElement("button");
  continuerBtn.textContent = "Continuer";

  // Ajouter un gestionnaire d'événements au bouton "Continuer"
  continuerBtn.addEventListener("click", function () {
    if (!optionSelectionnee) {
      // Fonction d'ordre supérieur pour afficher une alerte et un message
      function afficherAlerte(message, fonctionAlerte) {
        let monMessage = `Veuillez sélectionner ${message} avant de continuer`;
        fonctionAlerte(monMessage);
      }

      function alerte(message) {
        alert(message);
      }

      afficherAlerte("une option", alerte);
    } else if (cle === "frequence") {
      // Si c'est la dernière question, redirige vers la dernière page (page4.html) après un délai de 2 secondes
      setTimeout(function () {
        window.location.href = "page4.html";
      }, 2000);
      questionRemplies.textContent = `Sondage terminé !`;
      monSondage[cle].repondre(reponseChoisie);
    } else {
      etapeActuelle = cle;
      monSondage[cle].repondre(reponseChoisie);
      afficherQuestions(monSondage[cle].destination);
      incrementerCompteur();
    }

    localStorage.setItem("monSondage", JSON.stringify(monSondage));
 

  });
  containerBoutons.appendChild(continuerBtn);
}

// Bloc 8: Appel de la fonction afficherQuestions pour afficher la première question
afficherQuestions(etapeActuelle);

// Bloc 9: Création d'un compteur pour suivre le nombre de questions répondues
let questionRemplies = document.querySelector(".questionRemplies");
questionRemplies.textContent = `Questions: 0/5`;

// Bloc 10: Création d'un compteur qui permet à l'utilisateur de savoir à quelle question il se situe
let compteur = function () {
  let nombreQuestions = 0;
  return function () {
    nombreQuestions++;
    questionRemplies.textContent = `Questions: ${nombreQuestions}/5`;
  };
};

let incrementerCompteur = compteur();

//Suit et affiche les pages que visitent les utilisateurs pendant leur session
sessionStorage.setItem("Page", "Page Trois");

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
