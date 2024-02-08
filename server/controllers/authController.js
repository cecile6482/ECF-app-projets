const { User } = require('../config/db'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Fonction pour créer un utilisateur
exports.signup = async (req, res) => {
    console.log(req.body);
  const { username, email, password } = req.body;
  try {
    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const user = await User.create({
      username,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User successfully created!",
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (error) {
    console.error(error); // Log l'erreur complète pour le débogage
    res.status(400).json({ 
      message: "Erreur lors de la création de l'utilisateur", 
      error: error.message,
      details: error.errors || error 
  });
  }
};

// Fonction pour authentifier un utilisateur et générer un JWT
exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Vérification de l'existence de l'utilisateur
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed. User not found." });
    }

    // Vérification du mot de passe
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Authentication failed. Wrong password." });
    }

    // Génération du JWT
    const token = jwt.sign({ userId: user.id },
                            process.env.JWT_SECRET, 
                            { expiresIn: '24h' }); 

    res.status(200).json({
      userId: user.id,
      token: token
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
