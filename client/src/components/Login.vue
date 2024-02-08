<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();


const login = () => {
  console.log('Login:', username.value, password.value);
  try {
    authStore.login(username.value, password.value);
    // Redirection après connexion réussie
    router.push('/projects');
  } catch (error) {
    // Si les identifiants ne correspondent pas, afficher une erreur et ne pas rediriger
    alert(error.message);
    // Réinitialiser les champs
    username.value = '';
    password.value = '';
  }
};    
</script>

<template>
  <div class="container">
    <h2 class="text">Connexion</h2>
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="username" class="form-label">Nom d'utilisateur:</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Mot de passe:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn">Se connecter</button>
    </form>
  </div>
</template>

<style scoped>

</style>