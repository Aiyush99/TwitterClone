import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
    path:"./.env"
})
const monoUrl = "mongodb+srv://Aiyush:preksha@cluster0.gkrk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const databaseConnection = ()=>{
    mongoose.connect(monoUrl).then(()=>{
        console.log(`connected to monogoDB`)
    }).catch((error)=>{
        console.log(error)
    })
}

export default databaseConnection;
