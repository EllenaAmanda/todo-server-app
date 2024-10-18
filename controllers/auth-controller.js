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
       //jika username tidak sama
        if (!user) {
            return  res.status(401).json({message: "gagal login"})
        }

       const checkPassword = bcrypt.compareSync(data.password, user.password)
       //jika password false
       if (!checkPassword) {
            return  res.status(401).json({message:"gagal login"});
       }
        
        //buat token
        const token = jwt.sign({username: user.username}, process.env.JWT_KEY)

        res.status(200).json({
            message: "berhasil login",
            token,
        })
    }
   

}