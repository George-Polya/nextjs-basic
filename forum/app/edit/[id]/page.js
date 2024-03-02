import { connectDB } from "@/util/database";
import {ObjectId} from 'mongodb'
export default async function Edit(props){
    
    const client = await connectDB;

    const db = client.db("forum")
    
    const post = await db.collection("post").findOne({
        _id: new ObjectId(`${props.params.id}`)
    })

    // console.log(post)


    return(
        <div className="p-20">
        <h4>수정 페이지</h4>
        <form action="/api/post/edit" method="POST">
            <input type="text" name="title" placeholder="글 제목" defaultValue={post.title}/>
            
            <input type="text" name="content" placeholder="글 내용" defaultValue={post.content}/>
            <input style={{display:'none'}} name="id" value={props.params.id}/>
            <button type="submit">전송</button>
        </form>
    </div>
    )
}