const express = require('express');

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;


/*
  Aprendizado: Tipos de parâmetros
  Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) | request.query
  Route Params: Parâmetros utilizados para idenfiticar recursos, Ex: rota/:id | request.params
  Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (POST, PUT) | request.body

  isso está nos arquivos dos controllers
*/