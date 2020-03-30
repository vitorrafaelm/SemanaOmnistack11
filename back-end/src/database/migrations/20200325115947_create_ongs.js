//O método up é sempre responsável pela ciração de uma tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary(); 
      table.string('name').notNullable(); 
      table.string('email').notNullable(); 
      table.string('whatsapp').notNullable(); 
      table.string('city').notNullable(); 
      table.string('uf', 2).notNullable(); 
  });
};

//O método down serve para se algo der errado executar uma ação
exports.down = function(knex) {
 return knex.schema.dropTable('ongs');
};
