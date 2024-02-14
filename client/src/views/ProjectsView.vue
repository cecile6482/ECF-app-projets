<script setup>
import { onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from '../axios';
import { useProjectsStore } from '../store/projectsStore';
import Header from '../components/Header.vue';
import ProjectForm from '../components/ProjectForm.vue';
import Projects from '../components/Projects.vue';

const projectsStore = useProjectsStore();

const route = useRoute();
const router = useRouter();
// const project = ref({});

onMounted(async () => {
  try {
    const response = await axios.get(`/api/projects/${route.params.id}`);
    project.value = response.data;
  } catch (error) {
    console.error(error);
  }
});

const deleteProject = async () => {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
    try {
      await axios.delete(`/api/projects/${project.value.id}`);
      router.push('/projects');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la suppression du projet');
    }
  }
};



</script>

<template>
    <div class="page">
     <Header />

     <ProjectForm />

     <Projects />
   </div>
</template>

