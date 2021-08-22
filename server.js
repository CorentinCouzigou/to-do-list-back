// librairies
const express = require('express');
// const bodyParser = require('body-parser');


// list des tasks de la to do list
const tasksList = require('./list.json');

//utilisation de express pour l'application et description du port dans notre cas localhost 3001
const app = express();
const port = 3001;


// Body parser pour récupérer les envoies de l'utilisateur, mais pas utile pour cette application sans BDD.
// app.use(bodyParser.json());

// Gestion des cors pour permettre au front de faire des requetes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

/* Routes */
// Page d'accueil du serveur : GET /

app.get('/', (req, res) => {
  console.log('>> GET /');
  res.json(tasksList);
});
// pas de BDD donc pas de route post malheureusement pour ajouter des nouvelles tasks au serveur!

/*
 * Server
 */
app.listen(port, () => {
  console.log(`Serveur connecté sur le port http://localhost:${port}/`);
});
