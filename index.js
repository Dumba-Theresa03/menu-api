const express =require("express")
const morgan = require("morgan")
require("dotenv").config()
const connectDB = require("./config/connectDB")
const foodRoute = require("./routes/foodRoute")
const userRoute = require("./routes/userRoute")



connectDB()

const app = express()
//middlewares
app.use(express.json())
app.use(morgan("dev"))
app.use("/api/foods", foodRoute)
app.use("/api/users", userRoute)




const PORT = process.env.PORT||9001

//Home route
app.get("/", (req, res)=>{
    res.json("welcome to my Menu API")
})

app.listen(PORT, ()=>{
    console.log("Server is UP!!!")
})