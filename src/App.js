import React from 'react';
import './App.css';
import Logo from './Logo';
import blogPosts from './blogPosts';  // Import from your .json or .js file

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
  const renderContent = () => {
    const paragraphs = content.split('\n\n');  // Split content by double newlines for paragraphs

    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split('\n');  // Split each paragraph by newline

      // Check if paragraph starts with a number or a bullet point
      if (lines[0].match(/^\d+\./)) {
        return (
          <ol key={index}>
            {lines.map((line, lineIndex) => (
              <li key={lineIndex}>{line.replace(/^\d+\.\s/, '')}</li>
            ))}
          </ol>
        );
      } else if (lines[0].startsWith('- ')) {
        return (
          <ul key={index}>
            {lines.map((line, lineIndex) => (
              <li key={lineIndex}>{line.replace('- ', '')}</li>
            ))}
          </ul>
        );
      } else {
        return lines.map((line, lineIndex) => <p key={lineIndex}>{line}</p>);
      }
    });
  };

  return (
    <article className="blog-post">
      <h2><a href={link}>{title}</a></h2>
      <p className="post-date">{formatDate(date)}</p>
      <div className="post-content">
        {renderContent()}  {/* Render the content with formatting */}
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
