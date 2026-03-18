const express = require("express")
const cors = require("cors")
 require("dotenv").config()
 require("./config/db")
const cookieParser = require("cookie-parser")
const auth = require("./api/auth/auth.routes")
const task = require("./api/tasks/tasks.routes")
const app = express()


app.use(cors({
  origin: "https://technical-asigment.vercel.app", 
  credentials: true
}));
app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", auth);
app.use("/api/tasks", task);
app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`)
})
