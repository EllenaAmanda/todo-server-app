const mongoose = require("mongoose")

const usersSchema = new Schema({
    username: String,
    name: String,
    password: String
})

const User = mongoose.model("User", usersSchema)

module.exports = User