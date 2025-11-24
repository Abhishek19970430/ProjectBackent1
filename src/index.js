// database is Allways in Other continent thats why it take time to communicate due to to this allways
// use async await and kept yout code in try and catch block

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import {app} from './app.js'


dotenv.config({
    path: './.env'
});

connectDB().then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is Running at port : ${process.env.PORT}`);
  });
})
.catch((err)=>{
   console.log("MONGODB Connection Failed")
})

/*
import mongoose from "mongoose"
import {DB_NAME} from "./constants"
;(async()=>{

    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ", error);
            throw error
        })

        app.listen (process.env.PORT, () =>{
            console.log(`App is Listening on PORT, ${process.env.PORT}`);
            throw error
        })

    }catch (error){
     console.error("Error: ",error)
     throw err

    }
   })()
    */