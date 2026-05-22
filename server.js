import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const tasksToDo = [];

// Listar TODOs, tarefas para o usuario
app.get("/TODOs", (req, res) => {
  res.json(tasksToDo);
});

let id = 0;

// CREATE / POST
app.post("/TODOs", (req, res) => {
  try {
    id = ++id;
    const title = req.body.title;
    const isDone = false;
    const TaskToDo = {
      id,
      title,
      isDone,
    };
    tasksToDo.push(TaskToDo);
    res.json(TaskToDo);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
