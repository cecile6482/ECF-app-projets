# ECF : Application Web de Gestion de Projets

## Objectif
Développer une application web de gestion de projets permettant aux utilisateurs de créer, gérer et suivre l'avancement de différents projets, ainsi que de gérer les tâches associées à ces projets.  

## Fonctionnalités
- **Authentification des Utilisateurs** : Inscription, connexion et déconnexion.
- **Gestion des Projets** : Création, visualisation, modification, et suppression de projets.
- **Gestion des Tâches** : Ajout de tâches avec détails, visualisation, modification, et suppression.
- **Suivi de l'Avancement** : Marquage des tâches comme "En cours" ou "Complétées".

## Technologies Utilisées
- **Frontend** : Vue.js 3 (Vite, Pinia, Vue Router, Bootstrap 5)
- **Backend** : Node.js et Express.js
- **Base de Données** : MySQL (Workbench)
- **Authentification** : JSON Web Tokens (JWT) et Bcrypt
- **Versionnage** : Git et GitHub
- **Tests** : Thunder Client (VSCode)

## Installation
1. Cloner le projet : `git clone https://github.com/cecile6482/ECF-app-projets`
2. Installer les dépendances : `npm install`
3. Créer une base de données MySQL nommée `ecf_projets` et importer le fichier `ecf_projets.sql` pour créer les tables.
4. Créer un fichier `.env` à la racine du projet et ajouter les variables d'environnement suivantes :
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_DATABASE=ecf_projets
   JWT_SECRET=your_secret
   ```
5. Lancer le serveur : `npm run dev`
6. Accéder à l'application sur `http://localhost:3000`  
<br>
<br>
<br>

# Documentation API REST

## Authentification

### Inscription

- **Endpoint**: `/api/signup`
- **Méthode**: POST
- **Description**: Crée un nouvel utilisateur.
- **Corps de la requête**:
  
  ```json
  {
    "username": "nomutilisateur",
    "email": "email@exemple.com",
    "password": "MotDePasse123"
  }
    ```

- **Réponse (201)**:
    - **Corps de la réponse**:
     ```json
    {
      "message": "User successfully created!",
      "userId": 1,
      "username": "nomutilisateur",
      "email": "email@exemple.com"
    }
    ```
- **Erreur (400)**:
    - **Corps de la réponse**:
     ```json
    {
      "message": "Erreur lors de la création de l'utilisateur.",
      "error": "Erreur spécifique"
    }
    ```

### Connexion

- **Endpoint**: `/api/login`
- **Méthode**: POST
- **Description**: Connecte un utilisateur existant et retourne un JWT.
- **Corps de la requête**:
  
  ```json
  {
    "username": "nomutilisateur",
    "password": "MotDePasse123"
  } 
  ```

- **Réponse (200)**:
    - **Corps de la réponse**:
     ```json
    {
      "userId": 1,
      "token": "votre_token",
    }
     ```

- **Erreur (401)**:
    - **Corps de la réponse**:
     ```json
    {
      "message": "Authentification échouée."
    }
    ```

## Projets

### Créer un Projet

- **Endpoint**: `/api/projects`
- **Méthode**: POST
- **Headers**: `Authorizatio: Bearer<token>`
- **Corps de la requête**:
  
  ```json
    {
     "projectName": "Nom du Projet",
     "projectDescription": "Description du Projet",
     "startDate": "2023-01-01",
     "endDate": "2023-12-31",
     "user_id": 1
    }
    ```

- **Réponse (201)**:
    - **Corps de la réponse**:
     ```json
    {
      "message": "Projet créé avec succès!",
      "projectId": 1,
      "projectName": "Nom du Projet",
      "projectDescription": "Description du Projet",
      "startDate": "2023-01-01",
      "endDate": "2023-12-31",
      "user_id": 1
    }
    ```

### Récupérer tous les Projets

- **Endpoint**: `/api/projects`
- **Méthode**: GET
- **Headers**: `Authorizaion: Bearer<token>`
- **Réponse (200)**:
    - **Corps de la réponse**:
     ```json
    {
      "projects": [
        {
          "projectId": 1,
          "projectName": "Nom du Projet",
          "projectDescription": "Description du Projet",
          "startDate": "2023-01-01",
          "endDate": "2023-12-31",
          "user_id": 1
        },
        {
          "projectId": 2,
          "projectName": "Nom du Projet",
          "projectDescription": "Description du Projet",
          "startDate": "2023-01-01",
          "endDate": "2023-12-31",
          "user_id": 1
        }
      ]
    }
    ```


