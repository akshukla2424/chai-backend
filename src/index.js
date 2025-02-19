//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // ✅ Check this line

dotenv.config({
    path: './.env'  // ✅ Ensure .env file is loaded correctly
});

connectDB() // ✅ Ensure function is being called properly
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((err) => {
        console.log("MONGO DB connection failed!!!", err);
    });





/*

import express from "express"
const app = express()
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`)
        app.on("error", (error) => {
          console.error("ERROR: ", error)
          throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listining on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/