import React from 'react';
import './App.css';
import Logo from './Logo';
import ReactMarkdown from 'react-markdown';  // Ensure react-markdown is imported
import blogPosts from './blogPosts';  // Adjust based on your file extension (.json or .js)

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <h1>Your Blog</h1>
      </header>
      <main>
        <BlogList />
      </main>
    </div>
  );
}

function BlogList() {
  return (
    <div className="blog-list">
      {blogPosts.map(post => (
        <BlogPost 
          key={post.id} 
          title={post.title} 
          content={post.content} 
          date={post.date} 
          link={post.link}
        />
      ))}
    </div>
  );
}

function BlogPost({ title, content, date, link }) {
  return (
    <article className="blog-post">
      <h2><a href={link}>{title}</a></h2>
      <p className="post-date">{formatDate(date)}</p>
      <div className="post-content">
        <ReactMarkdown>{content}</ReactMarkdown>  {/* Rendering markdown content */}
      </div>
      <a href={link} className="read-more">Read more</a>
    </article>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export default App;
