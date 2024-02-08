import axios from 'axios';

// Création d'une instance d'Axios avec des configurations pré-définies
const instance = axios.create({
  baseURL: 'http://localhost:3000/', 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default instance;
