const express = require('express');
const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


/**
 * HTTP Methods:
 * 
 * GET:    Get information from backend.
 * POST:   Create a information on the backend.
 * PUT:    Change some information on the backend.
 * DELETE: Delete some information from the backend.
 */

/**
 * Param Types:
 * 
 * Query: Named params that are sent with the route after "?" (Filters, Pages).
 * Route: Params that are utilized to identify resources.
 * Request Body: Used to create or change resources.
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Exporting the routes constant.
module.exports = routes;