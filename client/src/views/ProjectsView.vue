<script setup>
import { onMounted, computed } from 'vue';
import { useProjectsStore } from '../store/projectsStore';
import Header from '../components/Header.vue';
import ProjectForm from '../components/ProjectForm.vue';
import Projects from '../components/Projects.vue';

const store = useProjectsStore();



</script>

<template>
    <div class="page">
     <Header />

     <ProjectForm />

     <Projects />
   </div>
</template>

