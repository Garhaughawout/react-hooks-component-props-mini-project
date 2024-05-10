import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import { useState } from "react";
console.log(blogData);

function App() {
    const [posts, setPosts] = useState(blogData.posts);
  
    return (
    <div className="App">
        <Header name={blogData.name} />
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={posts} />
    </div>
  );
}

export default App;
