import express from "express";
import { todos } from "./todo.js";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/todos/", (req, res) => {
  if (req?.query?.completed) {
    const isCompleted = req.query.completed === "true";
    const filteredTodos = todos.filter(
      (todo) => todo.completed === isCompleted
    );
    console.log("filteredTodos：过滤后的数据", filteredTodos);
    res.send(filteredTodos);
    return;
  }
  res.send(todos);
});
// 返回具有给定ID的待办事项
app.get("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todoId = parseInt(id);
  if (isNaN(todoId)) {
    res.status(400).send("无效的ID");
    return;
  }
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo) res.status(200).send(todo);
  res.status(404).send("未找到待办事项");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
