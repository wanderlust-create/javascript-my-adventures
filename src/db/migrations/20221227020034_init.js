exports.up = function (knex) {
  return knex.schema
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.string("email", 100).unique().notNullable();
      table.string("firstName", 100).notNullable();
      table.string("lastName", 100).notNullable();
      table.timestamps(true, true);
    })
    .createTable("city", (table) => {
      table.increments("id").primary();
      table.string("name", 100).notNullable();
      table.string("country", 100).notNullable();
      table.string("travelType", 100).notNullable();
      table.date("startDate").notNullable();
      table.date("endDate").notNullable();
      table.timestamps(true, true);
    })
    .createTable("event", (table) => {
      table.increments("id").primary();
      table
        .integer("cityId")
        .notNullable()
        .references("id")
        .inTable("city")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("title").notNullable();
      table.date("date").notNullable();
      table.string("description");
      table.timestamps(true, true);
    })
    .createTable("userCity", (table) => {
      table.increments("id").primary();
      table
        .integer("userId")
        .notNullable()
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("cityId")
        .notNullable()
        .references("id")
        .inTable("city")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("userCity")
    .dropTableIfExists("event")
    .dropTableIfExists("city")
    .dropTableIfExists("user");
};
