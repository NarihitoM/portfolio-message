import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


let connect = false;

export async function mongoconnect() {
   await mongoose.connect((process.env.MONGO_URI),
{
    dbName: "narihitopf"
})
    connect = true;
    console.log("Done");
}