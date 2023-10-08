// Fonction qui s'exécute une seule fois dans la vie du programme
(function () {
  const alerteSondage =
    "Rejoignez notre sondage en partageant vos saveurs préférées, vos combinaisons de perles incontournables et bien plus encore. Votre opinion est précieuse pour nous. Bon sondage!";
  alert(alerteSondage);
})();

// Tableau contenant des questions et des options (objet et tableau pour l'affichage des questions)
let sondage = {
  //Question 1: Quelle base préférez-vous pour votre thé? (Choix simple : Thé, Lait, Jus)

  base: {
    question: "Quelle base préférez-vous pour votre thé?",
    options: [
      {
        choix: "Thé",
      },
      {
        choix: "Lait",
      },
      {
        choix: "Jus",
      },
    ],
    destination: "garniture",
  },

  //Question 2: Quelles garnitures ajoutez-vous à votre boisson? (Choix multiple : Perles de tapioca, Perles éclatantes, Morceaux de fruits, Haricots, Aucune garniture)

  garniture: {
    question: "Quelles garnitures ajoutez-vous à votre boisson?",
    options: [
      {
        choix: "Perles de tapioca",
      },
      {
        choix: "Perles éclatantes",
      },
      {
        choix: "Morceaux de fruits",
      },
      {
        choix: "Haricots",
      },
      {
        choix: "Aucune garniture",
      },
    ],
    destination: "taille",
  },

  //Question 3: Généralement, quelle taille de boisson commandez-vous? (Choix simple : Petit, Moyen, Grand)

  taille: {
    question: "Généralement, quelle taille de boisson commandez-vous?",
    options: [
      {
        choix: "Petit",
      },
      {
        choix: "Moyen",
      },
      {
        choix: "Grand",
      },
    ],
    destination: "sucre",
  },

  //Question 4: Quel niveau de sucre choisissez-vous? (Choix simple ou input texte : 100%, 75%, 50%, 25%, 0%)

  sucre: {
    question: "Quel niveau de sucre choisissez-vous?",
    options: [
      {
        choix: "0%",
      },
      {
        choix: "25%",
      },
      {
        choix: "50%",
      },
      {
        choix: "75%",
      },
      {
        choix: "100%",
      },
    ],
    destination: "frequence",
  },

  //Question 5: À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement? (Input texte ou menu défilant : de 0 à 10+)

  frequence: {
    question:
      "À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement?",
    options: [
      {
        choix: "Une fois",
      },
      {
        choix: "2-3 fois",
      },
      {
        choix: "4-5 fois",
      },
      {
        choix: "6+",
      },
    ],
    destination: null,
  },
};

// Définition d'une variable globale pour suivre l'étape actuelle du sondage
let etapeActuelle = "base";

// Fonction principale (fonction d'ordre supérieur) pour afficher les questions en fonction de la clé donnée
function afficherQuestions(cle) {
  let questions = document.querySelector("h2");
  questions.innerText = sondage[cle].question;
  const inputs = document.querySelector(".barreoptions");
  let containerBoutons = document.querySelector(".containerBoutons");

  // Le while enleve les inputs pour ne pas qu'ils se dupliques
  while (inputs.firstChild) {
    inputs.removeChild(inputs.firstChild);
  }

  // Le while enleve les boutons pour ne pas qu'ils se dupliques
  while (containerBoutons.firstChild) {
    containerBoutons.removeChild(containerBoutons.firstChild);
  }

  // Variable pour suivre si une option a été sélectionnée
  let optionSelectionnee = false;

  // Une boucle qui crée des inputs pour chaque options à chaque nouvelle clé (Parcourir le tableau avec for ..in )
  for (let i in sondage[cle].options) {
    const nouveauLabel = document.createElement("label");
    nouveauLabel.innerText = sondage[cle].options[i].choix;
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

  // Ajouter un gestionnaire d'événements au bouton "Continuer" (fonction de fermeture)
  continuerBtn.addEventListener("click", function () {
    if (!optionSelectionnee) {
      alert("Veuillez sélectionner une option avant de continuer.");
    } else if (cle === "frequence") {
      // Si c'est la dernière question, redirige vers la dernière page qui est la page html4 après un délai 2 secondes sinon elle passe à la question suivante si l'utilsateur à sélectionné une option
      setTimeout(function () {
        window.location.href = "page4.html";
      }, 2000);
      questionRemplies.textContent = `Sondage terminé !`;
    } else {
      etapeActuelle = cle;
      afficherQuestions(sondage[cle].destination);
      incrementerCompteur();
    }
  });
  containerBoutons.appendChild(continuerBtn);
}
// L'étape qui afiche les questions sur la page web
afficherQuestions(etapeActuelle);

// Remplacer bouton par destination et enlever tableau pour une simple option.
// Enlever la propriété type dans l'objet "sondage", car aucune utilisation pour l'instant.

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
