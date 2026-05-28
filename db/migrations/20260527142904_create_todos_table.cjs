exports.up = function (knex) {
  return knex.schema.createTable("taskstodo", function (table) {
    table.increments("id"); // Cria um campo "id" e define como PK (Primary Key)
    table.string("title", 200).notNullable();
    table.boolean("isDone").notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("taskstodo");
};
