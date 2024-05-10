import React from "react";
import Article from "./Article";


export default function ArticleList({ posts }) {
    
    function renderPosts() {
        return posts.map((post) => (
            <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
        ));
    }
    return (
        <main>
            {renderPosts()}
        </main>
    );
}