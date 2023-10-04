// Fonction qui s'exécute une seule fois dans la vie du programme
(function () {
  const alerteSondage =
    "Rejoignez notre sondage en partageant vos saveurs préférées, vos combinaisons de perles incontournables et bien plus encore. Votre opinion est précieuse pour nous. Bon sondage!";
  alert(alerteSondage);
})();

const soumissionBouton = document.getElementById("soumissionBoutonFormulaire");
soumissionBouton.addEventListener("click", function (event) {
  event.preventDefault();
  setTimeout(function () {
    window.location.href = "page4.html";
  }, 2000);
});

// Tableau contenant des questions et des options
const sondageQuestions = [
  {
    question: "Quelle base préférez-vous pour votre thé?",
    type: "choixsimple",
    options: ["Thé", "Lait", "Jus"],
  },
  {
    question: "Quelles garnitures ajoutez-vous à votre boisson?",
    type: "choixmultiple",
    options: [
      "Perles de tapioca",
      "Perles éclatantes",
      "Morceaux de fruits",
      "Haricots",
      "Aucune garniture",
    ],
  },
  {
    question: "Généralement, quelle taille de boisson commandez-vous?",
    type: "choixsimple",
    options: ["Petit", "Moyen", "Grand"],
  },
  {
    question: "Quel niveau de sucre choisissez-vous?",
    type: "choixsimple",
    options: ["100%", "75%", "50%", "25%", "0%"],
  },
  {
    question:
      "À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement?",
    type: "inputtexte",
    options: null,
  },
];
