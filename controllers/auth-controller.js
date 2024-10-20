require('dotenv').config()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


const User = require("../models/User")

module.exports = {
    regis: async(req,res) => {
        try {
            const data = req.body;

            //cek jika user sudah ada
            const existingUser = await User.findOne({ username: data.username }).exec();
            if (existingUser) {
                return res.status(400).json({
                    message: "Username already taken"
                });
            }

            //hash pass
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(data.password, salt);
            data.password = hash;

            //upload ke db
            const newUser = new User(data);
            await newUser.save();

            res.status(201).json({
                message: "Registration successful",
            });
        } catch (error) {
            // Log the error for debugging
            console.error("Error during registration:", error);

            // Send server error response
            res.status(500).json({
                message: "Server error during registration",
                error: error.message
            });
        }
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
        const token = jwt.sign({username: user.username}, process.env.JWT_KEY,{ expiresIn: "1h" })

        res.status(200).json({
            message: "berhasil login",
            token,
        })
    }
   

}