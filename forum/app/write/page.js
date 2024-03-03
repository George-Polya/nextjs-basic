export default function Write(){
    return(
        <div className="p-20">
            <h4>글 작성</h4>
            <form action="/api/post/new" method="POST">
                
                
                <input type="text" name="title" placeholder="글 제목"/>
                
                <input type="text" name="content" placeholder="글 내용"/>
                <input type="file" accept="image/*" />
                <button type="submit">버튼</button>
                
                

            </form>
        </div>
    )
}