<script setup>
  import { onMounted, ref } from 'vue';
  import axios from '../axios';
  
  const projects = ref([]);
  
  onMounted(async () => {
    try {
      const response = await axios.get('/api/projects');
      projects.value = response.data;
    } catch (error) {
      console.error(error);
    }
  });
</script>

<template>
    <div class="display">
      <h1>Projets</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <router-link :to="{ name: 'project-view', params: { id: project.id } }">
            {{ project.projectName }}
          </router-link>
        </li>
      </ul>
    </div>
</template>
  
  