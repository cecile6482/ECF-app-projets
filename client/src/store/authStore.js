import { defineStore } from 'pinia';
import axios from '../axios'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null, // Charger l'utilisateur depuis le localStorage au démarrage
  }),
  actions: {
    async signup(username, email, password) {
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
        if (!emailRegex.test(email)) {
          throw new Error('Email non valide');
        }
        if (!passwordRegex.test(password)) {
          throw new Error('Le mot de passe doit contenir au moins 8 caractères, dont une majuscule, une minuscule et un chiffre');
        }
        try {

        const response = await axios.post('/api/signup', {username : username, email: email, password: password});

         
         localStorage.setItem('user', JSON.stringify(response.data));
         this.user = response.data; // Mettre à jour l'état de l'utilisateur avec la réponse de l'API
         return response.data;
       } catch (error) {
         throw new Error(error.response.data.message || "Erreur lors de l'inscription");
       }
  },   
    async login(username, password) {
      try {
        // Envoi des identifiants au serveur pour vérification
        const response = await axios.post('/api/login', { username, password });

        // Stockage du token JWT renvoyé dans localStorage pour maintenir la session utilisateur
        localStorage.setItem('token', response.data.token);
        this.user = { username, token: response.data.token }; // Mettre à jour l'état de l'utilisateur avec le token

        // Redirection ou autres actions post-connexion
      } catch (error) {
        console.error(error);
        throw new Error('Identifiants incorrects');
    }
    },
    logout() {
      localStorage.removeItem('user'); // Supprimer l'utilisateur du localStorage
      this.user = null; // Réinitialiser l'état de l'utilisateur
    },
  },
});
