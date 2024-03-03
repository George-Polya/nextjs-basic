import { connectDB } from "@/util/database";
import { revalidatePath } from "next/cache";

export default async function Write2(){ 
  //DB에서 데이터 뽑아서 보여주기 
  const db = (await connectDB).db('forum')
  let result = await db.collection('post_test').find().toArray()

  async function handleSubmit(formData) {
    'use server';  
    const db = (await connectDB).db('forum')
    await db.collection('post_test').insertOne({title : formData.get('title')})
    revalidatePath('/write2')
  }

  return (
    <form action={handleSubmit}>
      <input type="text" name="title" />
      <button type="submit">Submit</button>
      {
        result ? result.map((a, key)=>
          <p key={key}>글제목 : {a.title}</p>
        )
        : null
      }
    </form>
  )
} 