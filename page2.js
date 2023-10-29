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
