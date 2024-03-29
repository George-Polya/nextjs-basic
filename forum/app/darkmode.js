
'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function DarkMode(){

    const router = useRouter()

    useEffect(()=>{
        const cookieValue = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
        if(cookieValue === ""){
            document.cookie = 'mode=light; max-age='+(3600*24*400);
        }
    },[])

    const changeMode = ()=>{
        const cookieValue = ('; '+document.cookie).split(`; mode=`).pop().split(';')[0]
        if(cookieValue === "light"){
            document.cookie = 'mode=dark; max-age='+(3600*24*400);
        }else{
            document.cookie = 'mode=light; max-age='+(3600*24*400);
        }
        router.refresh()

    }

    return(
        <span onClick={()=>changeMode}>
            🌙
        </span>
    )
}