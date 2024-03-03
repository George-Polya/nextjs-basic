import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions) // 현재 로그인된 유저의 정보
    // console.log(session.user.email)
    
    
    if(session){
      req.body.author = session.user.email;  
    }

    if(req.method === "POST"){
        // console.log("req.body: ", req.body);    

        const db = (await connectDB).db('forum');
        const result = await db.collection("comment").insertOne(req.body);
        // console.log("result: ", result);
        return res.status(200).json({ message: '댓글이 등록되었습니다.' });
    }
}