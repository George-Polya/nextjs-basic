'use client'
import {signIn, signOut} from 'next-auth/react'
import { useEffect } from 'react'
export function LoginBtn(){

    useEffect(()=>{
        if(typeof window !== "undefined"){
            localStorage.setItem('mode', 'dark');
        }
    },[])

    return(
        <button onClick={()=>{signIn()}}>로그인</button>
    )
}

export function LogoutBtn(){
    return (
        <div>
            <button onClick={()=>signOut()}>로그아웃</button>
        </div>
    )
}