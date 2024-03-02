import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'

export default async function handler(req, res) {
    // console.log(req.body)   
    if(req.method === "POST"){
        const client = await connectDB;
        const db = client.db("forum")

        await db.collection("post").updateOne({
            _id : new ObjectId(`${req.body.id}`)
        },{
            $set:{
                title: req.body.title,
                content: req.body.content
            }
        })
    
        return res.status(200).redirect("/list")
    }

}
