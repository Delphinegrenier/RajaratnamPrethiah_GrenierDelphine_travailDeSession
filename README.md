# Rapport
## Travail de session

PearlTea par Delphine Grenier et Prethiah Rajaratnam

##Critères
Mettre en place un système d'authentification et d'interaction avec des
données JSON pour un sondage sur votre site web.
Vous devez compléter les tâches suivantes. Le travail doit être rendu avec du code
propre, organisé et bien commenté.

-=+=-=+=-

Partie 1 : Authentification avec fichier JSON
• (FAIT)Fichier JSON des utilisateurs (10%) : Créez un fichier utilisateurs.json avec les
détails de l'utilisateur : login, password, nom, prenom.
• (FAIT)Processus de connexion (20%) : Modifiez la page de connexion pour qu'elle lise
le fichier JSON et valide les identifiants saisis. Si l'utilisateur est reconnu, chargez
son nom et login en session.(utiliser le stockage session)
• (FAIT) Affichage des informations de l'utilisateur (10%) : Une fois l'authentification
réussie, affichez les informations de l'utilisateur dans un menu sur le site.


Partie 2 : Gestion des accès
• Redirection et accès aux pages (15%) : Assurez-vous que si un utilisateur non
connecté tente d'accéder au site, il soit redirigé vers l'écran de connexion. Pour les
utilisateurs connectés, suivez et affichez les pages qu'ils visitent pendant leur
session.
•(FAIT) Bouton de déconnexion (5%) : Implémentez un bouton de déconnexion qui, une
fois activé, mettra fin à la session de l'utilisateur et le redirigera vers la page de
connexion.( pour remplacer le bouton retour à la page de connexion)


Partie 3 : Intégration du sondage et manipulation des données JSON
• (FAIT)Fichier JSON des réponses au sondage (10%) : Créez un fichier
reponses_sondage.json avec des données existantes de réponses de sondage. (des
données inventées)
• Ajout de nouvelles réponses (15%) : Ajoutez de manière sécurisée les nouvelles
réponses des utilisateurs au fichier JSON après qu'ils aient complété le sondage, sans
effacer les données existantes. ( utiliser le stockage local)
• Affichage des statistiques (15%) : Affichez les statistiques des réponses du sondage
en lisant le fichier JSON.
