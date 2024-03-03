import { connectDB } from "@/util/database";


export default async function handler(req, res) {
    if(req.method === "GET"){
        // console.log("req.query", req.query)
        const db = (await connectDB).db('forum');
        const result = await db.collection("comment").find({parent: req.query.parent}).toArray();
        // console.log("result: ", result);
        return res.status(200).json(result);
    }
}
