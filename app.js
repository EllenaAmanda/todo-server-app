const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const allRoutes = require("./routes")
const db = require("./db")

app.use(allRoutes)

db.then(() => {
    console.log("berhasil connect ke db")
})
.catch(() => {
    console.log("gagal connect ke db")
})

app.listen(PORT, ()=> {
    console.log("Server is running in PORT " + PORT)
})