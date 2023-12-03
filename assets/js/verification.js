// Vérification de la connexion de l'utilisateur avant d'accéder aux données
function verificationFct() {
const idSessionStorage = sessionStorage.getItem("ID");
if (idSessionStorage === null) {
  // Redirige l'utilisateur vers la page de connexion s'il n'est pas connecté
  window.location.href = "index.html";
}}

export { verificationFct };