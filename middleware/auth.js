require("dotenv").config()
const jwt = require("jsonwebtoken")

module.exports = {
    validateToken: (req,res,next) => {
        const header = req.headers.authorization
        // console.log(header)
        

        if (!header) {
            return res.json("Invalid header")
        }

        const token = header.split(" ")[1]
        
        if (!token) {
            return res.json("Invalid token")
        }

        try{
            const payload = jwt.verify(token, process.env.JWT_KEY)
            req.payload = payload;
            next();
        }catch {
            return res.json("Invalid token")
        }
    }
}