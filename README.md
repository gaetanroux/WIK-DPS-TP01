# **TP WIK-DPS-TP01**

## Exécution du projet :

**Pour lancer le projet :**

Cloner le dossier dans un repertoire de votre choix : https://github.com/gaetanroux/WIK-DPS-TP01.git

Lancer Vscode.
Installer le paquet "**express**" :

* npm install express
* npm install typescript ts-node @types/node @types/express --save-dev

-----------------------------------------

Pour lancer le code :

* cd src
* npx tsc 
* node index.js

-----------------------------------------------------


Sur votre navigateur entrer dans la barre de recherche :
***localhost:8080***

A. Réponse lors ce qu'on accède à la page ping :
***localhost:8080/ping***

    Une fois sur cette page vous aurez accès au HEADER qui vous donnera toutes les informations , faite F12 puis network, dans la requete vous aurez le header avec aussi le status **200**.

--------------------------------------

   2.Réponse lors ce qu'on accède à une autre page que "ping":
***localhost:8080/toto***

    
````Une fois sur cette page vous aurez une erreur 404 si vous allez regarder dans le réseau vous pourrez constater que le status code est en 404 Not Found et que le Content-Length est à 0.````



# **Image :**
Réponse **200** : :+1:

![](https://i.imgur.com/BHOhVj6.png)

Réponse **404** :  :-1:

![](https://i.imgur.com/Y4aFvot.png)

--------------------------

***All Rights Reserved. You keep all rights to your material @Hzk'*** 

----------------------------