const jwt = require("jsonwebtoken")
const User = require("../models/userSchema")

exports.protect =async function(req, res, next){
let token;
if(req.headers.authorization && req.headers.authorization.startWith("Bearer")) {
     try{
token = req.headers.authorization.split(" ")[1]
const decoded = jwt.verify(token, process.env.JWT_SECRET)
req.user = await User.findById(decoded.id)
next()
    } catch(error) {
        res.status(401).json({
            message: "invalid token" 
        })

    }

    if(!token){
        res.status(401).json({
            message: "You are not authourized"
        })
    }
}}
//is admin middleware
exports.admin=async function (req, res, next){
    if (req.user && req.user.isAdmin){
        next()

    } else {
        res.status(401).json({
            message:"You are not authorized admin"
        })
    }
}