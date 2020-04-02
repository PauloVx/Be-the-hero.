const idGenerator = require('../../src/utils/idGenerator');

describe('Generate id with the given byte size.', () => 
{
	it('Should generate an unique id with 4 bytes.', () => 
	{
		const id = idGenerator();
		expect(id).toHaveLength(8);
	});
});