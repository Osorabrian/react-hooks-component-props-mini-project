import React from "react"
import Article from "./Article"
import blogData from "../data/blog";




function ArticleList(){
    const article = blogData.posts.map(item => {
        return <Article key={item.id} title={item.title} preview={item.preview} date={item.date}/>
    })
    return (
            <main>
                {article}       
            </main>
    )
}

export default ArticleList