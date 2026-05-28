import express from "express";
import knex from "./db/knex.js";

const app = express();
const port = 3000;

app.use(express.json());

// Listar TODOs, tarefas para o usuario
app.get("/todos", async (req, res) => {
  try {
    await knex
      .select()
      .from("taskstodo")
      .then(function (taskstodo) {
        res.status(200).json(taskstodo);
      }); // Pesquisar a diff entre .json .send

    /* Raw Version, kinda longer
    await knex.raw("SELECT * from taskstodo").then(function (tasksToDo) {
      res.status(200).send(tasksToDo.rows);
    }); */
  } catch (e) {
    res.status(400).json({
      e: e.message,
    });
  }
});

// CREATE / POST
app.post("/todos", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({
        message: "Title empty, title is required.",
      });
    }

    await knex("taskstodo")
      .insert({
        title: req.body.title,
      })
      .then(function () {
        knex
          .select()
          .from("taskstodo")
          .then(function (taskstodo) {
            res
              .status(201)
              .json({ message: "New Task created with Success", taskstodo });
          });
      });
    /* Raw Version
    await knex.raw("INSERT into taskstodo (title) values (?)", ["NEW TASK CREATED 1"]).then(function () {
        knex.select().from("taskstodo").then(function (newtasktodo) {res.status(201).send(newtasktodo);
          }); 
      }); */
  } catch (e) {
    if (e.code === "22001") {
      // String Data Right Truncation -> Code (22001)
      return res.status(400).json({
        message:
          "Title exceeds character limit. Title can only have up to maximum 200 characters",
      });
    }

    // Validação para impedir a criação de uma task vazia sem caractere
    res.status(400).json({
      e: e.message,
    });
  }
});

// UPDATE / PUT
app.put("/todos/:id", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({
        message: "Title required.",
      });
    }

    const updatedRows = await knex("taskstodo")
      .where("id", req.params.id)
      .update({
        title: req.body.title,
        isDone: req.body.isDone,
      });
    if (updatedRows === 0) {
      res.status(404).json({
        message: "Task not found",
      });
    }

    res.status(200).json({
      message: `The task ${req.params.id} was updated with Success`,
    });
    /*Raw Version
    knex.raw('UPDATE taskstodo SET ' + req.body.field + " = ? where id = ?", [req.body.value, reqparams.id])
      res
        .status(200)
        .json({ message: "Task updated with Success!", newTaskToDo }); */
  } catch (e) {
    if (e.code === "22001") {
      return res.status(400).json({
        message:
          "Title exceeds character limit. Title can only have up to maximum 200 characters",
      });
    }
    res.status(500).json({
      error: e.message,
    });
  }
});

// DELETE
app.delete("/todos/:id", async (req, res) => {
  try {
    const deletedRows = await knex("taskstodo")
      .where("id", req.params.id)
      .del();

    if (deletedRows === 0) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json({
      //Certo usar 204
      message: `Task ${req.params.id} deleted with Success!`,
    });

    /* Raw Version
    app.delete('DELETE FROM taskstodo wher id = ?', req.params.id) */

    // RF05.03 Adicionar confirmacao de exclusao, entrada de dado pedindo um Y/N if Y entra pra delete se nao, nao deleta
  } catch (e) {
    res.status(500).json({
      e: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
