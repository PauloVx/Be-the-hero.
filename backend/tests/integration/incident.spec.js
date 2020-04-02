const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () =>
{
	beforeEach(async () => {
		await connection.migrate.rollback();
		await connection.migrate.latest();
	});

	afterAll(async () => {
		await connection.destroy();
	});

	it('Should be able to create a new incident', async () =>
	{
		//Creating a test ong to be able to create an incident.
		const ongResponse = await request(app).post('/ongs').send({
			name: "TESTONG",
			email: "Contactong1@gmail.com",
			whatsapp: "2140028922",
			city: "Rio de Janeiro",
			uf: "RJ"
		});

		const response = await request(app).post('/incidents').set('Authorization', `${ongResponse.body.id}`).send({			
			title: "Incident Test",
			description: "Descrição do caso",
			value: 20000.00
		});

		expect(response.body).toHaveProperty('id');
	});
});