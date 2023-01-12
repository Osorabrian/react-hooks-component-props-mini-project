import React from "react"
import Article from "./Article"



function ArticleList({articles}){

    const c = articles && articles.map((item) => { 
                    return (
                    <Article key={item.id} title={item.title} preview={item.preview} date={item.date}></Article>
                )
                })

    return (
            <main>
                <Article>{c}</Article> 
                <Article>{c}</Article>   
                <Article>{c}</Article>         
            </main>
    )
}

export default ArticleList