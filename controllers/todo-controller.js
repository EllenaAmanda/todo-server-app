const Todo = require("../models/Todo");

module.exports = {
    getAllTodos: async(req,res) => {
        const data = await Todo.find({})

        res.status(200).json({
            message: "Berhasil mengambil semua Todos",
            data
        })
    },
    getTodoById: async(req,res) => {
        const {id} = req.params

        const data = await Todo.findById(id).exec()

        res.status(200).json({
            message: "Berhasil mengambil todo by id",
            data
        })
    },
    addTodo: (req,res) => {

        const data = req.body; // inputan baru

        const newTodo = new Todo(data) // panggil model dan masukkan data baru

        newTodo.save()

        res.status(201).json({
            message:"data berhasil dibuat",
        })
    },

    updateTodoById: async (req,res) => {
        const {id} = req.params
        const data = req.body;
        // console.log(id)
        // console.log(data)

        await Todo.findByIdAndUpdate(id,data)

        res.status(200).json({
            message:"todo berhasil di update"
        })
    },
    deleteAllTodos: async (req,res) => {
        await Todo.deleteMany({})

        res.status(200).json({
            message: "todo berhasil di hapus semua"
        })
    },
    deleteTodoById: async (req,res) => {
        const {id} = req.params

        await Todo.findByIdAndDelete(id)

        res.status(200).json({
            message:"todo berhasil di delete berdasarkan id"
        })
    },

}