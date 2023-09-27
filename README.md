# Rapport
## Travail de session


**Choix du produit :** 
Thé aux perles


**Questions (Sondage sur les préférences de Thé aux perles):** 
-	Quelle base préférez-vous pour votre thé? (Choix simple : Thé, Lait, Jus)
-	Quelles garnitures ajoutez-vous à votre boisson? (Choix multiple : Perles de tapioca, Perles éclatantes, Morceaux de fruits, Haricots, Aucune garniture)
-	Généralement, quelle taille de boisson commandez-vous? (Choix simple : Petit, Moyen, Grand)
-	Quel niveau de sucre choisissez-vous? (Choix simple ou input texte : 100%, 75%, 50%, 25%, 0%)
-	À quelle fréquence consommez-vous des boissons de type thé aux perles hebdomadairement? (Input texte ou menu défilant : de 0 à 10+)

  
**Explications du javascript:** 
En commentaire des scripts se trouve de courtes explications du script.
Première page :
Html:
Nous avons créé un div et à l'intérieur de celui-ci se trouve un formulaire. Dans le formulaire se trouve deux inputs ainsi qu'un bouton. Les inputs ont les attributs : required. Ceci permet de s'assurer que le formulaire ne s'envoie pas si ces champs sont vides. Ensuite, nous avons ajouté l'attribut oninvalid. Ceci permet de créer une petite alerte qui apparait si le champ est invalide. Le mot de passe a comme type : motdepasse, car cela cache les caractères du mot de passe. Aussi, il a un attribut : pattern, ce qui permet de rendre ce champ valide seulement s'il suit ce pattern. Dans notre cas, nous voulons que le mot de passe soit d’au moins huit caractères et qu’il ait un chiffre. Nous avons ajouté un paragraphe ainsi qu'une balise <a>, si l'individu veut créer un compte pour s'abonner, sauf que celui-ci le renvoie à la page d'accueil. Finalement, nous retrouvons le logo.
 

Script: 
Nous sommes allés chercher des ID des éléments nécessaires dans le HTML. Nous avons créé les attributs placeholder pour les inputs dans le formulaire. Nous avons créé une fonction addEventListener pour le bouton de connexion, lorsqu'on le clique et que les champs inputs sont bien remplis, après deux secondes le formulaire s'envoie et on passe à la page suivante. Ensuite, nous modifions le texte d'un paragraphe. Ce paragraphe se supprime après 10 secondes. 
 
Deuxième page :
Html:
Nous retrouvons une page avec des informations du produit et l'introduction du sondage. Il y a deux boutons. Un bouton permet à l'utilisateur de retourner à la page de connexion. Le deuxième bouton permet d'aller à la prochaine page. Nous retrouvons aussi une image de thé.

Script: 
Il y a deux boutons sur cette page et nous avons créé des variables pour aller les récupérer. Il y a deux fonctions qui permettent de retourner en arrière ou de continuer à la prochaine page lorsque l'on clique sur un bouton. On crée et ajoute un textnode au h2. On modifie aussi le texte content du h1.





