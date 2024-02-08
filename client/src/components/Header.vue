<script setup>
import { ref, computed, onMounted, reactive } from 'vue';
import { useAuthStore } from '../store/authStore';
import { useProjectsStore } from '../store/projectsStore';
import { useRouter } from 'vue-router';

const store = useProjectsStore();

const authStore = useAuthStore();
const router = useRouter();

// Définir des références réactives pour les filtres
const filterValues = reactive({
  SearchQuery: '',  
});


const username = computed(() => authStore.user?.username);

function logout() {
  authStore.logout();
  router.push('/');
}

</script>

<template>
  <div class="top-header">

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="profil">{{ username }}</span>
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#" @click="projects">Projets</a></li>
          <li><a class="dropdown-item" href="#" @click="logout">Se déconnecter</a></li>
        </ul>
      </li>
    </ul>
  </nav>

  <h1>ECF-Vue-Express</h1>
  </div>

    <!-- Barre de recherche -->
    <div class="search-bar">
    <input type="text" placeholder="Nom du projet ..." v-model="filterValues.SearchQuery" @input="updateSearch" />
    <button type="submit" class="btn">OK</button>
    </div>
    
    
</template>

<style scoped>
ul.dropdown-menu {
  background-color: #FBF976;
  color: #76d626;
  width: 50%;
  margin-left: 30vw;
  cursor: pointer;
}

.dropdown-item {
  background-color: #FBF976;
  color: #0b140e;;
  width: 70%;
  cursor: pointer;
}


</style>