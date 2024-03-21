 // 챌린지 게시글 등록

'use client'

import { useState } from "react";
import axios from 'axios'
export default function ArticleWrite(){

    const [challengeArticleCreateDto, setCreateChallengeArticleDto] = useState({challengeSeq : 53});
    console.log("challengeArticleCreateDto", challengeArticleCreateDto)
    const [imgUrl, setImgUrl] = useState('');
    const [file, setFile] = useState(null);



    const handleSubmit = async(e) =>{
        e.preventDefault();

        console.log("content", challengeArticleCreateDto)
        const formData = new FormData();
        formData.append("image", file);


        formData.append("challengeArticleCreateDto", JSON.stringify(challengeArticleCreateDto));
        
        

        try{
            const user1Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2VxIjoxLCJ1c2VySWQiOiJwb2x5YSIsIm5hbWUiOiJraW1oZWVzdSIsIm5pY2tuYW1lIjoiZ2VvcmdlIiwiZ2VuZGVyIjoiTSIsInBsYXRmb3JtIjoiT1JJR0lOIiwiaWF0IjoxNzExMDAwOTY2LCJleHAiOjE3OTc0MDA5NjZ9.w1UMLBCrlAvsjUrAWmof9tAWf0INuCdOvP-jlkK91XI"
            const user2Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2VxIjoyLCJ1c2VySWQiOiJwb2x5YTIiLCJuYW1lIjoicGFyayIsIm5pY2tuYW1lIjoiZ2VvcmdlMiIsImdlbmRlciI6Ik0iLCJwbGF0Zm9ybSI6Ik9SSUdJTiIsImlhdCI6MTcxMTAwMTI4OCwiZXhwIjoxNzk3NDAxMjg4fQ.kjRU481_OyvAyurwSwPLj8JtM6kXoAaYfGeel0uctZE";
            const user3Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2VxIjozLCJ1c2VySWQiOiJwb2x5YTMiLCJuYW1lIjoiTGVlIiwibmlja25hbWUiOiJnZW9yZ2UzIiwiZ2VuZGVyIjoiTSIsInBsYXRmb3JtIjoiT1JJR0lOIiwiaWF0IjoxNzExMDAwNzE1LCJleHAiOjE3OTc0MDA3MTV9.f3Y0uJrA4FOwlTrV6xnmJ5Fat3DQhjEXNE2g1q6zyN4"
            const response = await axios.post("http://localhost:8080/api/challenge/article", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization" : `Bearer ${user3Token}`
                }
            })

            console.log("response", response)

        }catch(error ){
            console.log(error);
        }
        
    
    }


    const uploadImage = async (e) => {
        const file = e.target.files[0]
        const filename = encodeURIComponent(file.name)
        
        // let response = await fetch(`/api/post/image?file=${filename}`)
        try{
            
            setFile(file)
            
            
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
               <input type="text" name="content" onChange={(e)=>setCreateChallengeArticleDto({...challengeArticleCreateDto, content : e.target.value})}/>
                <input type="file" onChange={uploadImage} accept="image/*"/>
                
                <button type="submit">Upload</button>
            </form>
        </div>
    )   
}