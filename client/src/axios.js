import axios from 'axios';

// Création d'une instance d'Axios avec des configurations pré-définies
const instance = axios.create({
  baseURL: 'http://localhost:3000/', 
  headers: {
    'Content-Type': 'application/json', 
  },
});


// Ajout d'un intercepteur pour ajouter le token JWT à chaque requête sortante
instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default instance;
