'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function DetailLink({id}){
    const router = useRouter();
    
    return(
        <button onClick={()=>{router.push(`/detail/${id}`)}}>버튼</button>
    )
}
