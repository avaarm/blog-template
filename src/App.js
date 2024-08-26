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
    { 
      id: 1, 
      title: 'First Blog Post', 
      content: 'This is my first blog post.', 
      date: new Date('2024-08-26T10:00:00'),
      link: '/post/1'
    },
    { 
      id: 2, 
      title: 'Second Blog Post', 
      content: 'This is my second blog post.', 
      date: new Date('2024-08-27T14:30:00'),
      link: '/post/2'
    },
  ];

  return (
    <div className="blog-list">
      {posts.map(post => (
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
      <p>{content}</p>
      <a href={link} className="read-more">Read more</a>
    </article>
  );
}

function formatDate(date) {
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export default App;