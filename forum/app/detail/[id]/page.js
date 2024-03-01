import { connectDB } from "@/util/database"
import {ObjectId} from 'mongodb'
import { usePathname } from "next/navigation";

export default async function Detail(props){
    const client = await connectDB;
    const db = client.db("forum")
    
    
    const id = `${props.params.id}`
        const result = await db.collection("post").findOne({_id: new ObjectId(id)})
    // console.log(result)

    return(
      <div>
        <h4>상세 페이지</h4>
        <h4>{result.title}</h4>
        <h4>{result.content}</h4>
      </div>
    )
}