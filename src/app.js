import express, { urlencoded } from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()



app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// ye form bhara to jo data aya use handle karne ke liye
app.use(express.json({limit:"16KB"}));
// jab url se data aye to
app.use(express.urlencoded({extended:true, limit:"16KB"}));
// PDF and images public asset ko store karne ke liye public folder me
app.use(express.static("public"));
//to access and set and update cookies of of user who try to req backend
app.use(cookieParser());


// routes import 

import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/v1/users", userRouter);

//http://localhost:8000/api/v1/users/register
export {app}