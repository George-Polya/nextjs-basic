import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if(req.method === "GET"){
        const client = await connectDB;
        const db = client.db("forum")
        const posts = await db.collection("post").find().toArray()
        res.status(200).json(posts)
    }
    
    
}
