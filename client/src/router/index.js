import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';


const routes = [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;