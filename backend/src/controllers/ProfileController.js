const connection = require('../database/connection');

module.exports =
{
	/**Returns all the incidents from a given ong.*/
	async index(request, response)
	{
		//Getting the ong id through the request header.
		const ong_id = request.headers.authorization;

		const incidents = await connection('incidents')
			.where('ong_id', ong_id)
			.select('*');

		return response.json(incidents);
	}
}