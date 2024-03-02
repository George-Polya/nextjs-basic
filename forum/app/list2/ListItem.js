'use client'
import Link from 'next/link'
import DetailLink from './DetailLink'
import axios from 'axios'

export default function ListItem({posts}){

    const deletePost = async (e, id)=>{
        try{
            
            const response = await axios.delete("http://localhost:3000/api/post/delete", {
                data:{id}
            })
            
            console.log("response: ", response)
            e.target.parentElement.style.opacity = 0
            setTimeout(()=>{
                e.target.parentElement.style.display = "none"
            }, 1000)
        }catch(err){
            console.log(err)
        }
    }
    
    return(
        <div>
        {
          posts.map((post, index)=>{
              
            return(
              <div key={index} className='list-item'>
                <Link href={`/detail/${post._id.toString()}`}>
                  <h4>{post.title}</h4>
                </Link>
                <Link href={`/edit/${post._id.toString()}`}>✏️ </Link>
                {/* <DetailLink id={post._id.toString()} /> */}
                <button onClick={(e)=>{
                    deletePost(e, post._id.toString())
                }}>🗑️</button>
                <p>{post.content}</p>
              </div>
            )
          })
        }
        </div>
    )
}