'use client'

export default function ListItem({posts}){
    
    console.log("posts", posts  )

    const cheerUp = async (userSeq, challengeArticleSeq) =>{
        console.log("userSeq", userSeq, "challengeSeq", challengeArticleSeq    )
        try{
            const response = await axios.put(`http://localhost:8080/api/challenge/article/cheer-up`, {
                challengeSeq,
                userSeq
            });

            console.log("response", response.data)
        }catch(error){

        }
    }

    return(
        <div>
            {posts.map((post, index)=>{
                return(
                    <div key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p> 
                        <img src={post.imgUrl} width="320" height="320" alt="img"/>
                        <button type="button" onClick={cheerUp(1,2)}>응원하기</button>
                    </div>
                )
            })}
        </div>
    )
}