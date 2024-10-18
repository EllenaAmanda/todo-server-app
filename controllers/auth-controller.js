require('dotenv').config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


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
       const data = req.body

       const user = await User.findOne({username: data.username}).exec() //cari data dlm databaase
       if (!user) //jika username tidak sama
        res.json({message: "gagal login"})

       const checkPassword = bcrypt.compareSync(data.password, user.password)
       if (!checkPassword) //jika password false
        res.json({message:"gagal login"});

        //buat token
        const token = jwt.sign({username: user.username}, process.env.JWT_KEY)

        res.json({
            message: "berhasil login",
            token,
        })
    }
   

}