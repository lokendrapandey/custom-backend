// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})


// PORT=8000
// MONGODB_URI=mongodb+srv://lokendra:lokendra123@cluster0.57czmnb.mongodb.net/?appName=Cluster0
// #lokendra
// #lokendra123