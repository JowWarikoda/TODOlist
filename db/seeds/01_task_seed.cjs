exports.seed = async function (knex) {

  // Insere novos registros
  await knex("taskstodo").insert([
    {
      title: "Task 01 TEST",
      isDone: false,
    },

    {
      title: "Task 02 TEST",
      isDone: true,
    },

    {
      title: "Task 03 TEST",
      isDone: false,
    },
  ]);
};