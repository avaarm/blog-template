import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Blog</h1>
      </header>
      <main>
        <BlogList />
      </main>
    </div>
  );
}

function BlogList() {
  const posts = [
    { id: 1, title: 'First Blog Post', content: 'This is my first blog post.' },
    { id: 2, title: 'Second Blog Post', content: 'This is my second blog post.' },
  ];

  return (
    <div className="blog-list">
      {posts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

function BlogPost({ title, content }) {
  return (
    <article className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
}

export default App;