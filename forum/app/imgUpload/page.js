'use client'

import { useState } from "react";
import axios from 'axios'

export default function Upload(){

    const [file, setFile] = useState(null);

    const handleSubmit = async(e) =>{
        e.preventDefault();


        const formData = new FormData();
        formData.append("image", file);

        try{

               const user1Token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyU2VxIjoxLCJ1c2VySWQiOiJwb2x5YSIsIm5hbWUiOiJraW1oZWVzdSIsIm5pY2tuYW1lIjoiZ2VvcmdlIiwiZ2VuZGVyIjoiTSIsInBsYXRmb3JtIjoiT1JJR0lOIiwiaWF0IjoxNzExMDAwOTY2LCJleHAiOjE3OTc0MDA5NjZ9.w1UMLBCrlAvsjUrAWmof9tAWf0INuCdOvP-jlkK91XI"
         
            // const response = await axios.post("https://j10b102.p.ssafy.io/api/recognition/upload", formData, {
            //     headers: {
                    
            //         "Content-Type": "multipart/form-data"
            //     }
            // })

            const response = await axios.post("http://localhost:8080/api/recognition/upload", formData, {
                headers: {
                    "Authorization" : `Bearer ${user1Token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            console.log("response", response)
        }catch(error ){
            console.log(error);
        }
    }

    const handleChange = async(e) =>{
        // console.log("hello");
        setFile(e.target.files[0]);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} accept="image/*"/>
                <button type="submit">Upload</button>
            </form>
        </div>
    )   
}