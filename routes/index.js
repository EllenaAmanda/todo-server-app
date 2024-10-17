const express = require("express")
const route = express.Router()

const todoRoute = require("./todo-route")

route.get("/", (req,res) => {
    res.json({
        message:"selamat datang di Todo App"
    })
    
})

route.use("/todos", todoRoute)

module.exports = route