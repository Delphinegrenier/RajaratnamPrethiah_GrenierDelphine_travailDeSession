// Fonction qui s'exécute une seule fois dans la vie du programme
(function () {
  const alerteSondage =
    "Rejoignez notre sondage en partageant vos saveurs préférées, vos combinaisons de perles incontournables et bien plus encore. Votre opinion est précieuse pour nous. Bon sondage!";
  alert(alerteSondage);
})();

//Création de classes créer un gabarit des informations des questions
class QuestionSansReponse {
  constructor(question, options) {
    this.question = question;
    this.options = options;
  }
}
class Question extends QuestionSansReponse {
  constructor(question, options, destination) {
    super(question, options);
    this.destination = destination;
  }
}

//Instances des classes Sondage et SondageSansDestination avec les questions, réponses et destinations
const base = new Question("Quelle base préférez-vous pour votre thé?", ["Thé", "Lait", "Jus"], "garniture");
const garniture = new Question("Quelles garnitures ajoutez-vous à votre boisson?", ["Perles de tapioca", "Perles éclatantes", "Morceaux de fruits", "Haricots", "Aucune garniture"], "taille");
const taille = new Question("Généralement, quelle taille de boisson commandez-vous?", ["Petit", "Moyen", "Grand"], "sucre");
const sucre = new Question("Quel niveau de sucre choisissez-vous?", ["0%", "25%", "50%", "75%", "100%"], "frequence");
const frequence = new QuestionSansReponse("À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement?", ["0", "1-2", "3-4", "5-6", "7+"]);

//Création de l'objet monSondage qui stock les instances
let monSondage = {
  base,
  garniture,
  taille,
  sucre,
  frequence
};


//Stockage des données de l'objet utilisateur
let sondageStr = JSON.stringify(monSondage);
localStorage.setItem('monSondage', sondageStr)

// Définition d'une variable globale pour suivre l'étape actuelle du sondage
let etapeActuelle = "base";

// Fonction principale pour afficher les questions en fonction de la clé donnée
function afficherQuestions(cle) {
  let questions = document.querySelector("h2");
  questions.innerText = monSondage[cle].question;
  const inputs = document.querySelector(".barreoptions");
  let containerBoutons = document.querySelector(".containerBoutons");

  // Le while enleve les inputs pour ne pas qu'ils se dupliquent
  while (inputs.firstChild) {
    inputs.removeChild(inputs.firstChild);
  }

  // Le while enleve les boutons pour ne pas qu'ils se dupliquent
  while (containerBoutons.firstChild) {
    containerBoutons.removeChild(containerBoutons.firstChild);
  }

  // Variable pour suivre si une option a été sélectionnée
  let optionSelectionnee = false;

  // Une boucle qui crée des inputs pour chaque options à chaque nouvelle clé (Parcourir le tableau avec for ..in )
  for (let i in monSondage[cle].options) {
    const nouveauLabel = document.createElement("label");
    nouveauLabel.innerText = monSondage[cle].options[i];
    const nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("type", "radio");
    nouveauInput.setAttribute("name", "reponse");
    const nouveauDiv = document.createElement("div");
    nouveauDiv.setAttribute("class", "containeroptions");

    // Marquer l'option comme sélectionnée lors du changement
    nouveauInput.addEventListener("change", function () {
      optionSelectionnee = true;
    });

    nouveauDiv.appendChild(nouveauLabel);
    nouveauDiv.appendChild(nouveauInput);
    inputs.appendChild(nouveauDiv);
  }

  // Crée un bouton Continuer pour permettre l'utilisateur de passer à la question suivante
  const continuerBtn = document.createElement("button");
  continuerBtn.textContent = "Continuer";

  // Ajouter un gestionnaire d'événements au bouton "Continuer"
  continuerBtn.addEventListener("click", function () {
    if (!optionSelectionnee) {
      //(fonction d'ordre supérieur pour afficher une alerte et un message)
      function afficherAlerte(message, fonctionAlerte) {
        let monMessage = `Veuillez sélectionner ${message} avant de continuer`;
        fonctionAlerte(monMessage);
      }

      function alerte(message) {
        alert(message);
      }

      afficherAlerte("une option", alerte);
    } else if (cle === "frequence") {
      // Si c'est la dernière question, redirige vers la dernière page qui est la page html4 après un délai 2 secondes sinon elle passe à la question suivante si l'utilsateur à sélectionné une option
      setTimeout(function () {
        window.location.href = "page4.html";
      }, 2000);
      questionRemplies.textContent = `Sondage terminé !`;
    } else {
      etapeActuelle = cle;
      afficherQuestions(monSondage[cle].destination);
      incrementerCompteur();
    }
  });
  containerBoutons.appendChild(continuerBtn);
}
// L'étape qui affiche les questions sur la page web
afficherQuestions(etapeActuelle);

//Création d'un compteur (une fonction de fermeture)
let questionRemplies = document.querySelector("p");
questionRemplies.textContent = `Questions: 0/5`;
//Création d'un compteur qui permet à l'utilsateur de savoir à quel question il se situe
let compteur = function () {
  let nombreQuestion = 0;
  return function () {
    nombreQuestion++;
    questionRemplies.textContent = `Questions: ${nombreQuestion}/5`;
  };
};
let incrementerCompteur = compteur();