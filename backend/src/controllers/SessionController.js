const connection = require('../database/connection');

module.exports =
{
	/**Create session.*/
	async create(request, response)
	{
		const { id } = request.body;

		const ong = await connection('ongs')
			.where('id', id)
			.select('name')
			.first();
		
		//Ong doesn't exist.
		if(!ong) return response.status(400).json({ error: 'Could not find any ONG with the id ' + id + '.' });

		return response.json(ong);
	}
}