const express = require("express")
const route = express.Router()

const authRoute = require("./auth-route")
const todoRoute = require("./todo-route")

route.get("/", (req,res) => {
    res.json({
        message:"selamat datang di Todo App"
    })
    
})

route.use("/auth", authRoute)
route.use("/todos", todoRoute)

module.exports = route