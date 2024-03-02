import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {

  const session = await getServerSession(req, res, authOptions) // 현재 로그인된 유저의 정보
  console.log(session.user.email)
  if(session){
    req.body.author = session.user.email;  
  }

  if(req.method === "POST"){
      console.log(req.body)
      if(req.body.title === "" || req.body.content ===""){
        return res.status(400).json({ message: '제목 쓰셈' })
      }

      const body = {
        title: req.body.title,
        content : req.body.content,
        author: req.body.author
      }
      

      try{
        const client = await connectDB;
        const db = client.db("forum")
      
      

        const result = await db.collection("post").insertOne(body);
      
        return res.status(200).redirect('/list')
      }catch(error){
        return res.status(500).json({ message: '에러 발생' })
      }
      

      
  }
}