'use client'

import { useState } from "react"

export default function Write(){

    const [src, setSrc] = useState('')

    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const filename = encodeURIComponent(file.name)
        
        let response = await fetch(`/api/post/image?file=${filename}`)
        response = await response.json()
        // console.log("response", response)

        const formData = new FormData()
        Object.entries({...response.fields, file}).forEach(([key,value])=>{
            formData.append(key,value)
        })

        const upload = await fetch(response.url, {
            method: 'POST',
            body: formData
        })

        console.log("upload", upload)   
        if(upload.status === 204){
            console.log("upload success")
            setSrc(response.url+"/"+filename)
        }
    }

    return(
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