import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();
const Connection = async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology:true});
        console.log("Database connected sucessfully");
    }catch(error){
        console.log("Error while connecting with the database", error.message);
    }
}

export default Connection;