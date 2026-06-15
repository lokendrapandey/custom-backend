// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
// import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB()




// PORT=8000
// MONGODB_URI=mongodb+srv://lokendra:lokendra123@cluster0.57czmnb.mongodb.net/?appName=Cluster0
// #lokendra
// #lokendra123


// import mongoose from 'mongoose';
// import express from 'express';

// const app = express();
// const PORT = 8000;
// const MONGODB_URI = "mongodb://localhost:27017/test";

// mongoose.connect(MONGODB_URI)
//   .then(() => {
//     console.log("MongoDB connected!");
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log("MONGODB connection FAILED", error);
//     process.exit(1);
//   });