const mongoose = require("mongoose")

const todosSchema = new Schema({
    todo: String,
    status: Boolean
})

const Todos = mongoose.model("Todos", todosSchema)

module.exports = Todos;