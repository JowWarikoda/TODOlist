module.exports = {
  development: {
    client: "pg",

    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "123",
      database: "todolist_db",
      port: 5432,
    },

    migrations: {
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
};
