import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
    
    const session = await getToken({req:request})
    
    

    
    if(request.nextUrl.pathname.startsWith("/register")){
        const response = NextResponse.next();
        if(!request.cookies.has("visited")){
            
            response.cookies.set({
                name:"visited",
                value:"true",
                maxAge:3600,
                httpOnly:true
            })
        }
        return response
    }

    if(request.nextUrl.pathname.startsWith("/write")){
        if(session == null){
            return NextResponse.redirect(new URL("http://localhost:3000/api/auth/signin"), request.url)
        }
    }

    if(request.nextUrl.pathname.startsWith("/list")){
        console.log(new Date());
        console.log(request.headers.get("sec-ch-ua-platform"))

        return NextResponse.next();
    }
    
}