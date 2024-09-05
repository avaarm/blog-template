import React from 'react';
import './App.css';
import Logo from './Logo';
import blogPosts from './blogPosts';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <h1> </h1>
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
        {content.split('\n\n').map((paragraph, index) => {
          const lines = paragraph.split('\n').filter(line => line.trim() !== '');
          if (lines.length > 1 && lines[0].trim().match(/^\d+\.\s/)) {
            return (
              <div key={index}>
                {lines.map((line, lineIndex) => (
                  line.trim().startsWith('- ') ? 
                  <ul key={`${index}-${lineIndex}`}><li>{line.trim().replace('- ', '')}</li></ul> :
                  <p key={`${index}-${lineIndex}`}>{line}</p>
                ))}
              </div>
            );
          } else {
            return <p key={index}>{paragraph}</p>;
          }
        })}
      </div>
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
