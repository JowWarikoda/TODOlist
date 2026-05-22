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
    const newTaskToDo = {
      id,
      title,
      isDone,
    };
    tasksToDo.push(newTaskToDo);
    res.json(newTaskToDo);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

// UPDATE / PUT
app.put("/TODOs/:id", (req, res) => {
  try {
    const newTaskToDo = tasksToDo.find((task) => req.params.id == task.id);
    newTaskToDo.title = req.body.title;
    res.json(newTaskToDo);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
