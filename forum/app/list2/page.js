
import { connectDB } from "@/util/database";
import Link from "next/link"
import DetailLink from "./DetailLink";

import ListItem from "./ListItem";

export const revalidate = 20;

export default async function List(){
    const client = await connectDB;
    const db = client.db("forum")
    let posts = await db.collection("post").find().toArray();
    posts = posts.map(post=>({
      ...post,
      _id: post._id.toString()
    }))
    return(
      <div className="list-bg">
        <ListItem posts={posts}/>
  
      </div>
    )
}