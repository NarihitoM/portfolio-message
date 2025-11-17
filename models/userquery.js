import mongoose from "mongoose";

const userschema = new mongoose.Schema(
    {
        name : {type: String ,required: true},
        email : {type: String,required: true},
        text: {type: String},
    }
    ,
    {
        timestamps: true,
        collection: "user",
    }
)

export default mongoose.model("User" , userschema);