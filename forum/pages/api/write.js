import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if(req.method === "POST"){
      const body = {
        title: req.body.title,
        content : req.body.content
      }
      
      const client = await connectDB;
      const db = client.db("forum")
      
      

      const result = await db.collection("post").insertOne(body);
      

  }else if(req.method === "GET"){
    res.status(200).json({ name: 'John Doe' })
  }
}