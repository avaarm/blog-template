import React from 'react';
import './App.css';
import Logo from './Logo';
import blogPosts from './blogPosts';
import ReactMarkdown from 'react-markdown';

// Utility function
function formatDate(date) {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Components
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
      {blogPosts.map((post) => (
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
      <h2>
        <a href={link}>{title}</a>
      </h2>
      <p className="post-date">{formatDate(date)}</p>
      <div className="post-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
      <a href={link} className="read-more">
        Read more
      </a>
    </article>
  );
}

// Export the App component
export default App;
