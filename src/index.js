import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
});
import connectDB from "./db/index.js";
import express from 'express';
import mongoose from 'mongoose';

connectDB()






















// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv'; 
// dotenv.config();
// const app= express();
// import { DB_NAME } from "./constants.js";



// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error", (error)=>{
//             console.log("err:", error)
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT} `)
//         })
//     } catch (error) {
//         console.log("ERROR: ", error)
//         throw error
//     }
// })()