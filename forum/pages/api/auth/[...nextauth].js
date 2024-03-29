import { connectDB } from "@/util/database";

import NextAuth  from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import bcrypt from "bcrypt";

export const authOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProvider({
            //1. 로그인페이지 폼 자동생성해주는 코드 
            name: "credentials",
              credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
                
            },
      
            //2. 로그인요청시 실행되는코드
            //직접 DB에서 아이디,비번 비교하고 
            //아이디,비번 맞으면 return 결과, 틀리면 return null 해야함
            async authorize(credentials) {
              let db = (await connectDB).db('forum');
              let user = await db.collection('user_cred').findOne({email : credentials.email})
              if (!user) {
                console.log('해당 이메일은 없음');
                return null
              }
              const pwcheck = await bcrypt.compare(credentials.password, user.password);
              if (!pwcheck) {
                console.log('비번틀림');
                return null
              }
              return user
            }
          })
    ],
    session:{
        strategy:"jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    callbacks:{
        jwt: async({token, user})=>{
            if(user){
                token.user = {};
                token.user.name = user.name;
                token.user.email = user.email;
            }
            return token;
        },

        session: async ({session, token})=>{
            session.user = token.user;
            return session;
        }
    },

    secret: "tollea1324!",
    adapter : MongoDBAdapter(connectDB)

}

export default NextAuth(authOptions)