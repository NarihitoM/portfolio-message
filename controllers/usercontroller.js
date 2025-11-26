
import { mongoconnect } from "../db/dbconnect.js";
import User from "../models/userquery.js";

export async function getuser(req, res) {
    await mongoconnect();
    try {
        const { user, email, text } = req.body;
        await User.create({ name: user, email: email, text: text });
        return res.status(200).json({ success: true, message: "Sent Successfully!" });
    }
    catch(err)
    {
        return res.status(200).json({success: false,message: "Unexpected Error"});
    }
}

export async function fetchuser(req,res){
   await mongoconnect();
   try{
     const fetchuser = await User.find({});
     return res.status(200).json({success: true, fetchuser});
   }
   catch(err)
   {
    return res.status(500).json({success: false, message:"Unexpected Error"});
   }
}

export async function deleteone(req,res) {
    await mongoconnect();
    const {name} = req.params;
    try{
        const findname = await User.findOne({name : name});
        if(!findname)
        {
            return res.status(400).json({success: false,message:"Username not found"});
        }
        await User.deleteOne({name: name});
        return res.status(200).json({success : true, message: "Successfully Deleted Message"});
    }
    catch(err)
    {
        return res.status(500).json({success: false,message:"Unexpected Error"});
    }
}