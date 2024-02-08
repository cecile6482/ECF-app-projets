<script setup>
import { ref } from 'vue';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';

const showLogin = ref(true);
const showSignup = ref(false);
</script>

<template>
  <div class="page">
  <div class="text-center">
    <h1 class="text m-2">ECF-Vue-Express</h1>
    <button class="btn m-2" @click="showLogin = true; showSignup = false">Connexion</button>
    <button class="btn m-2" @click="showLogin = false; showSignup = true">Inscription</button>
    <div v-if="showLogin">
      <Login />
    </div>
    <div v-if="showSignup">
      <Signup />
    </div>
  </div>
  </div>  
</template>

<style scoped>

</style>