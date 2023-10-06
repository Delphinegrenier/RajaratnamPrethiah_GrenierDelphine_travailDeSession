// Fonction qui s'exécute une seule fois dans la vie du programme
(function () {
  const alerteSondage =
    "Rejoignez notre sondage en partageant vos saveurs préférées, vos combinaisons de perles incontournables et bien plus encore. Votre opinion est précieuse pour nous. Bon sondage!";
  alert(alerteSondage);
})();

// Tableau contenant des questions et des options
let sondage = {
  base: {
    question: "Quelle base préférez-vous pour votre thé?",
    type: "choixsimple",
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
    bouton: [
      {
        destination: "garniture",
        titre: "Continuer",
      },
    ],
  },
  garniture: {
    question: "Quelles garnitures ajoutez-vous à votre boisson?",
    type: "choixmultiple",
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
    bouton: [
      {
        destination: "taille",
        titre: "Continuer",
      },
    ],
  },
  taille: {
    question: "Généralement, quelle taille de boisson commandez-vous?",
    type: "choixsimple",
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
    bouton: [
      {
        destination: "sucre",
        titre: "Continuer",
      },
    ],
  },

  sucre: {
    question: "Quel niveau de sucre choisissez-vous?",
    type: "choixsimple",
    options: [
      {
        choix: "100%",
      },
      {
        choix: "75%",
      },
      {
        choix: "50%",
      },
      {
        choix: "25%",
      },
      {
        choix: "0%",
      },
    ],
    bouton: [
      {
        destination: "frequence",
        titre: "Continuer",
      },
    ],
  },
  frequence: {
    question:
      "À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement?",
    type: "inputtexte",
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
    bouton: [
      {
        destination: "null",
        titre: "Envoyer",
      },
    ],
  },
};

function afficherQuestions(cle) {
  let questions = document.querySelector("h2");
  questions.innerText = sondage[cle].question;
  const inputs = document.querySelector(".barreoptions");
  let containerBoutons = document.querySelector(".containerBoutons");

  // enleve les inputs pour ne pas qu'ils se dupliques
  while (inputs.firstChild) {
    inputs.removeChild(inputs.firstChild);
  }

  // enleve les boutons pour ne pas qu'ils se dupliques
  while (containerBoutons.firstChild) {
    containerBoutons.removeChild(containerBoutons.firstChild);
  }
  // boucle qui crée des inputs pour chaque options à chaque nouvelle clé
  for (let i in sondage[cle].options) {
    const nouveauLabel = document.createElement("label");
    nouveauLabel.innerText = sondage[cle].options[i].choix;
    const nouveauInput = document.createElement("input");
    nouveauInput.setAttribute("type", "radio");
    nouveauInput.setAttribute("name", "reponse");

    inputs.appendChild(nouveauInput);
    inputs.appendChild(nouveauLabel);
  }

  // boucle qui crée un bouton pour chaque clé avec une destination
  for (let i = 0; i < sondage[cle].bouton.length; i++) {
    const nouveauBtn = document.createElement("button");

    nouveauBtn.textContent = sondage[cle].bouton[i].titre;
    containerBoutons.appendChild(nouveauBtn);
    if (cle === "frequence") {
      nouveauBtn.addEventListener("click", function (event) {
        event.preventDefault();
        setTimeout(function () {
          window.location.href = "page4.html";
        }, 2000);
      });
    } else {
      nouveauBtn.addEventListener("click", () => {
        afficherQuestions(sondage[cle].bouton[i].destination);
      });
    }
  }
}
afficherQuestions("base");
