import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import doten from "dotenv";

import todoRoutes from "./routes/todoRoutes.js";


dotenv.config();

//middlewres
const app=express();
app.use(cors());
app.use(express.json());


const PORT=process.env.PORT||5000;
const MONGOOSE_URI=process.env.MONGOOSE_URI||"mongodb://localhost:27017/todos";


mongoose.connect(MONGOOSE_URI,{
      useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.error(err));


app.use("/api/todos",todoRoutes);


app.listen(PORT,()=>{
    console.log(`Backend Running on Port: ${PORT}`);
})
