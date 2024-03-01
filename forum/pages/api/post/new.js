import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if(req.method === "POST"){
      console.log(req.body)
      if(req.body.title === "" || req.body.content ===""){
        return res.status(400).json({ message: '제목 쓰셈' })
      }

      const body = {
        title: req.body.title,
        content : req.body.content
      }
      

      try{
        const client = await connectDB;
        const db = client.db("forum")
      
      

        const result = await db.collection("post").insertOne(body);
      
        return res.status(200).redirect('/list')
      }catch(error){
        return res.status(500).json({ message: '에러 발생' })
      }
      

      
  }else if(req.method === "GET"){
    return res.status(200).json({ name: 'John Doe' })
  }
}