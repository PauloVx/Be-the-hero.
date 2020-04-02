const crypto = require('crypto');

/**
 * Returns an unique 4 bytes hex id.
 */
module.exports = function idGenerator()
{
	return crypto.randomBytes(4).toString('HEX');
}