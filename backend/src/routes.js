const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');

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

routes.post('/sessions', celebrate({
	//Validation
	[Segments.BODY]: Joi.object().keys({
		id: Joi.string().required().length(8),
	})
}), SessionController.create);

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
	//Validation
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required().min(2).max(60),
		email: Joi.string().required().email().max(50),
		whatsapp: Joi.string().required().min(10).max(11),
		city: Joi.string().required(),
		uf: Joi.string().required().length(2),
	})
}), OngController.create);

routes.get('/profile', celebrate({
	//Validation
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required().length(8),
	}).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
	//Validation
	[Segments.QUERY]: Joi.object().keys({
		page: Joi.number(),
	})
}), IncidentController.index);

routes.post('/incidents', celebrate({
	//Validation
	[Segments.HEADERS]: Joi.object({
		authorization: Joi.string().required().length(8),
	}).unknown(),
	[Segments.BODY]: Joi.object().keys({
		title: Joi.string().required().min(1).max(60),
		description: Joi.string().required().max(300),
		value: Joi.number().required().min(1),
	})
}), IncidentController.create);


routes.delete('/incidents/:id', celebrate({
	//Validation
	[Segments.PARAMS]: Joi.object().keys({
		id: Joi.number().required(),
	})
}), IncidentController.delete);

//Exporting the routes constant.
module.exports = routes;