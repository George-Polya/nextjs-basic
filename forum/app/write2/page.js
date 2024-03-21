import { connectDB } from "@/util/database";
import { revalidatePath } from "next/cache";

export default async function Write2(){ 
  

  return (
    <div className="p-20">
      <h4>글 작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" placeholder="글 제목"/>
        <input type="text" name="content" placeholder="글 내용"/>
        <input type="file" accept="image/*" onChange={async (e)=>uploadImage(e)}/>
        <img src={src} />
        <button type="submit">버튼</button>
      </form>
    </div>
  )
} 