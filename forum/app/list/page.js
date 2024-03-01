import { connectDB } from "@/util/database";
import Link from "next/link"
import DetailLink from "./DetailLink";
export default async function List(){
    const client = await connectDB;
    const db = client.db("forum")
    const posts = await db.collection("post").find().toArray()
    
    return(
      <div className="list-bg">
        {posts.map((post, index)=>{
            
          return(
            <div key={index} className='list-item'>
              <Link href={`/detail/${post._id.toString()}`}>
                <h4>{post.title}</h4>
              </Link>
              <DetailLink id={post._id.toString()} />
              <p>{post.content}</p>
            </div>
          )
        })}
  
      </div>
    )
}