const connection = require('../database/connection');
const idGenerator = require('../utils/idGenerator');

module.exports = 
{
	/**Lists all ONGS.*/
	async index(request, response)
	{
		const ongs = await connection('ongs').select('*');
		return response.json(ongs);
	},

	/**Creates a new ONG.*/
	async create(request, response)
	{
		//Getting the body of the request.
		const {name, email, whatsapp, city, uf} = request.body;

		//Creating a random 4 byte string for the id.
		const id = idGenerator();

		//Inserting the data into the database.
		await connection('ongs').insert
		({
			id,
			name,
			whatsapp,
			email,
			city,
			uf
		});

		return response.json({id});
	}
}