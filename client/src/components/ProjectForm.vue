<script setup>
  import { ref, watch } from 'vue';
  import axios from '../axios';
  import { useRoute, useRouter } from 'vue-router';
  
  const props = defineProps({
    project: Object
  });
  
  const project = ref(props.project || {
    projectName: '',
    projectDescription: ''
  });
  
  const route = useRoute();
  const router = useRouter();
  
  const handleSubmit = async () => {
  const url = project.value.id ? `/api/projects/${project.value.id}` : '/api/projects';
  const method = project.value.id ? 'put' : 'post';

  try {
    const response = await axios[method](url, project.value);
    router.push('/projects');
  } catch (error) {
    console.error(error);
    alert(`Erreur lors de la sauvegarde du projet : ${error.response?.data?.message || error.message}`);
  }
};


  
  watch(() => props.project, (newProject) => {
    if (newProject) {
      project.value = { ...newProject };
    }
  });
</script>

<template>
    <div class="container">
    <h2>Nouveau projet</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="projectName">Nom du projet:</label>
        <input v-model="project.projectName" id="projectName" required>
      </div>
      <div class="mb-3">
        <label for="projectDescription">Description:</label>
        <textarea v-model="project.projectDescription" id="projectDescription"></textarea>
      </div>
      <button type="submit" class="btn">Enregistrer</button>
    </form>
    </div>
</template>

<style scoped>
  .container {
  width: 40vw;
  height: 50vh;
}
</style>
  