'use client'

import { useEffect, useState } from "react"
import axios from 'axios';
export default function Comment({postId}){
    const [comment, setComment] = useState('')
    const write = async()=>{
        // console.log("comment: ", comment)
        // console.log("postId: ", postId )
        try{
            const response = await axios.post('http://localhost:3000/api/comment/new', {
                content:comment,
                parent: postId
            })
            // console.log("response: ", response) 
            
            getComments()
        }catch(err){
            console.log(err)
        }   
    }

    const [comments, setComments] = useState([])
    const getComments = async()=>{
        try{
            const comments = await axios.get('http://localhost:3000/api/comment/list', {
                params: {
                    parent: postId
                }
            })

            // console.log("comments:", comments.data)
            setComments(comments.data)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getComments()
    },[])

    return(
        <div>
            <hr></hr>
            <h4>댓글</h4>
            

            {
                comments.length > 0 ? 
                comments.map((comment,index)=>{
                    return(
                        <div key={index}>
                            <p>{comment.content}</p>
                        </div>
                    )
                })
                : <p>댓글이 없습니다.</p>
            }
            <input onChange={(e)=>setComment(e.target.value)}/>
            <button onClick={()=>write()}>등록</button>
        </div>
    )

}