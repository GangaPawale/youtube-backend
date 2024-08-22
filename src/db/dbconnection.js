import mongoose from "mongoose";
import { conf } from "../config/conf.js";
import { DATABASE_NAME } from "./constant.js";


//* Database connection takes time (asynchronous action)
async function dbConnection(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DATABASE_NAME}`);
        console.log("Database connected succesfully");
        return connectionInstance;
    } catch (error) {
        console.log("DATABASE CONNECTION ERROR : ",error.message);
        process.exit(1);
    }
}

export { dbConnection}