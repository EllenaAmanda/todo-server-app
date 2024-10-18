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

    updateTodoById: async (req,res) => {
        const {id} = req.params
        const data = req.body;
        // console.log(id)
        // console.log(data)

        await Todo.findByIdAndUpdate(id,data)

        res.json({
            message:"todo berhasil di update"
        })
    },
    deleteAllTodos: async (req,res) => {
        await Todo.deleteMany({})

        res.json({
            message: "todo berhasil di hapus semua"
        })
    },
    deleteTodoById: async (req,res) => {
        const {id} = req.params

        await Todo.findByIdAndDelete(id)

        res.json({
            message:"todo berhasil di delete berdasarkan id"
        })
    },

}