const connection = require('../database/connection');

module.exports = 
{
	/**Lists all Incidents.*/
	async index(request, response)
	{
		//Searching a query param for pagination, 1 if it doesn't exist.
		const { page = 1 } = request.query;

		//Getting the total number of incidents.
		const [count] = await connection('incidents').count();

		const incidents = await connection('incidents')
			.join('ongs', 'ongs.id', '=', 'incidents.ong_id')
			.limit(5)
			.offset((page - 1) * 5)
			.select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

		response.header('X-Total-Count', count['count(*)']);

		return response.json(incidents);
	},
	
	/**Creates a new Incident.*/
	async create(request, response)
	{
		//Getting the body of the request.
		const {title, description, value} = request.body;

		//Getting the ong id through the request header.
		const ong_id = request.headers.authorization;

		//Inserting the data into the database ans storing the id in the variable.
		const [id] = await connection('incidents').insert
		({
			title,
			description,
			value,
			ong_id
		})

		return response.json({id});
	},

	/**Deletes an incident.*/
	async delete(request, response)
	{
		//Getting the incident id from the route params.
		const { id } = request.params;

		//Getting the ong id through the request header.
		const ong_id = request.headers.authorization;

		//Getting the ong id from the database.
		const incident = await connection('incidents')
			.where('id', id)
			.select('ong_id')
			.first();

		//If the incident that an ong is trying to delete wasn't created by the same ong.
		if(incident.ong_id != ong_id) return response.status(401).json({error: 'Operation not allowed!'});

		await connection('incidents')
			.where('id', id)
			.delete();

		return response.status(204).send();
	}
}