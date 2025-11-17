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
