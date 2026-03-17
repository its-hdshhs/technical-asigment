const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database is conncted")
}).catch((err)=>{
   console.log(`db error ${err}`)
})