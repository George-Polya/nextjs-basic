// 챌린지 등록

'use client'

import { useState } from "react";
import axios from 'axios'
export default function Post(){

    const [src, setSrc] = useState('');



    const [createChallengeDto, setCreateChallengeDto] = useState();

    const handleSubmit = async(e)=>{
        // e.preventDefault;
        console.log("content", createChallengeDto)
        try{
            const response = axios.post("http://localhost:8080/api/challenge", createChallengeDto);
            console.log("response", response.data)
        }catch(error){
            console.log(error)
        }
    }


    return(
        <div className="p-20">
            <h4>글 작성</h4>
            <form action={handleSubmit} >
                
                
                <input type="text" name="title" placeholder="챌린지 이름" onChange={(e)=>{setCreateChallengeDto({...createChallengeDto, title:e.target.value})}}/>
                
                <input type="date" name="start-date" placeholder="시작일" onChange={(e)=>{setCreateChallengeDto({...createChallengeDto, startDate: e.target.value})}}/>
                <input type="date" name="end-date" placeholder="종료일" onChange={(e)=>{setCreateChallengeDto({...createChallengeDto, endDate: e.target.value})}}/>
                <img src={src} />
                <button type="submit">버튼</button>
            

            </form>
        </div>
    )
    
}