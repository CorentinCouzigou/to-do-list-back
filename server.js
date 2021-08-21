// librairies
const express = require('express');
const bodyParser = require('body-parser');


// recipes data
const tasksList = require('./list.json');

// vars
const app = express();
const port = 3001;


/* Middlewares */
// parse request body
app.use(bodyParser.json());

// cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // response to preflight request
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
  console.log(tasksList);
  res.json(tasksList);
});


/*
 * Server
 */
app.listen(port, () => {
  console.log(`Serveur connecté sur le port http://localhost:${port}/`);
});
