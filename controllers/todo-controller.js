const Todo = require("../models/Todo");

module.exports = {
    getAllTodos: async(req,res) => {
        try {
            const data = await Todo.find({});

            res.status(200).json({
                message: "Berhasil mengambil semua Todos",
                data
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mengambil todos",
                error: error.message
            });
        }
    },
    getTodoById: async(req,res) => {
        try {
            const { id } = req.params;
            const data = await Todo.findById(id).exec();

            if (!data) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }

            res.status(200).json({
                message: "Berhasil mengambil todo by id",
                data
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mengambil todo",
                error: error.message
            });
        }
    },
    addTodo: async(req,res) => {
        try {
            const data = req.body; // input data

            const newTodo = new Todo(data); // create new Todo instance
            await newTodo.save(); // save to database

            res.status(201).json({
                message: "Todo berhasil dibuat",
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal membuat todo",
                error: error.message
            });
        }
    },

    updateTodoById: async (req,res) => {
        try {
            const { id } = req.params;
            const data = req.body;

            const updatedTodo = await Todo.findByIdAndUpdate(id, data, { new: true });

            if (!updatedTodo) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }

            res.status(200).json({
                message: "Todo berhasil di update",
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal mengupdate todo",
                error: error.message
            });
        }
    },
    deleteAllTodos: async (req,res) => {
        try {
            await Todo.deleteMany({});

            res.status(200).json({
                message: "Semua todos berhasil dihapus"
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menghapus semua todos",
                error: error.message
            });
        }
    },
    deleteTodoById: async (req,res) => {
        try {
            const { id } = req.params;

            const deletedTodo = await Todo.findByIdAndDelete(id);

            if (!deletedTodo) {
                return res.status(404).json({
                    message: "Todo tidak ditemukan"
                });
            }

            res.status(200).json({
                message: "Todo berhasil dihapus"
            });
        } catch (error) {
            res.status(500).json({
                message: "Gagal menghapus todo",
                error: error.message
            });
        }
    },

}