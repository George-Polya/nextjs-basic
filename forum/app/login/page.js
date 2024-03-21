'use client'

import {useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';
import api from '@/utils/api';

export default function Login(){

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = async(e) =>{

        e.preventDefault();

        try{
            const response = await api.post("/user/login/origin", {userId, password});
            // console.log("response", response.data)
            const token = response.data;
            console.log("token", token) 

            localStorage.setItem("token", token);


            router.push("/")
        }catch (error){
            console.log(error)
        }
    }


    return(
        <div>
            
        <h1>Login</h1>
            <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            </form>
        </div>
    )
}