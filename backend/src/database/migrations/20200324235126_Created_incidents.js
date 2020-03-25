
exports.up = function(knex)
{
	return knex.schema.createTable('incidents', function (table)
	{
		//Primary key with auto increment.
		table.increments();

		table.string('title').notNullable();
		table.string('description').notNullable();
		table.decimal('value').notNullable();

		//One to One Relationship.
		table.string('ong_id').notNullable();

		//Foreign key.
		table.foreign('ong_id').references('id').inTable('ongs');
	})
};

exports.down = function(knex)
{
	return knex.schema.dropTable('incidents');
};
