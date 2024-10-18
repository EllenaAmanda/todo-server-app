const bcrypt = require("bcrypt")

const User = require("../models/User")

module.exports = {
    regis: async(req,res) => {
        const data = req.body

        //hash pass
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(data.password, salt)
        data.password = hash

        //upload ke db
        const newUser = new User(data)
        newUser.save()

        res.json({
            message: "berhasil regis",
        })
    },
    login: async(req,res) => {
       
    }
   

}