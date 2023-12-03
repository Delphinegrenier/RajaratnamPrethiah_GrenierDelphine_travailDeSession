// Bouton de déconnexion qui clear le session storage et local storage et renvoie à la page de connexion
function deconnexionFct() {
  const boutonDeconnexion = document.querySelector(".deconnexion");
  boutonDeconnexion.addEventListener("click", () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = "index.html";
  });
};
//Exportation de deconnectionFct dans les autres pages js
export { deconnexionFct };