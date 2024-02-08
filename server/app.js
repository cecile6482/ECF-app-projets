const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectsRoutes');
const taskRoutes = require('./routes/tasksRoutes');

app.use(express.json());
app.use(cors());
app.use('/api', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.use((err, req, res, next) => {
    console.error(err); // Log l'erreur pour le débogage
    res.status(err.status || 500).send({
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    });
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est démarré sur le port ${PORT}`);
});

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data:; script-src 'self' 'unsafe-inline'");
    next();
  });