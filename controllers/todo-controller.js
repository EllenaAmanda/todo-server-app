const Todo = require("../models/Todo");

module.exports = {
    getAllTodos: async(req,res) => {
        const data = await Todo.find({})

        res.json({
            message: "Berhasil mengambil semua Todos",
            data
        })
    },
    getTodoById: async(req,res) => {
        const {id} = req.params

        const data = await Todo.findById(id).exec()

        res.json({
            message: "Berhasil mengambil todo by id",
            data
        })
    },
    addTodo: (req,res) => {

        const data = req.body; // inputan baru

        const newTodo = new Todo(data) // panggil model dan masukkan data baru

        newTodo.save()

        res.json({
            message:"data berhasil dibuat",
        })
    },

    updateTodoById: (req,res) => {

    },
    deleteAllTodos: (req,res) => {},
    deleteTodoById: (req,res) => {},

}