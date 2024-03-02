
import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)
    // console.log("session: ", session)

    if(req.method === "DELETE"){
        console.log("req.body: ", req.body)
        // const body = JSON.parse(req.body)
        if(session.user.email !== req.body.author){
            return res.status(400).json("작성자만 삭제할 수 있습니다.")
        }


        const client = await connectDB;
        const db = client.db("forum")
        
        const result = await db.collection("post").deleteOne({
            _id: new ObjectId(`${req.body.id}`)
        })
        console.log(result)
        return res.status(200).json("삭제완료")
    }
}