import React from "react";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList";
import blogData from "../data/blog";


console.log(blogData.posts);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About about="About this blog" image={blogData.image}/>
      <ArticleList/>
    </div>
  );
}

export default App;
