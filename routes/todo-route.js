const express = require("express")
const { getAllTodos, getTodoById, addTodo, updateTodoById, deleteAllTodos, deleteTodoById } = require("../controllers/todo-controller")
const route = express.Router()

route.get("/", getAllTodos)
route.get("/:id", getTodoById)
route.post("/", addTodo)
route.put("/:id", updateTodoById)
route.delete("/", deleteAllTodos)
route.delete("/:id", deleteTodoById)

module.exports = route