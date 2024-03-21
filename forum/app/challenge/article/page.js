// 모든 아티클 조회
// 
import axios from 'axios';
import Link from "next/link"

import ListItem from "./ListItem"

export default async function List(){
    
    const response = await axios.get("http://localhost:8080/api/challenge/article", {
        params:{
            userSeq: 1
        }
    });
    
    console.log("response", response.data.length )



    return(
        <div>
            <h1>Article</h1>
            <ListItem posts={response.data}/>
            <Link href = "/challenge/article/write">글 쓰기</Link>
        </div>
    )
}