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
  // Updated renderContent function to handle newlines and paragraphs better
  const renderContent = () => {
    const paragraphs = content.split('\n\n');  // Split content by double newlines for paragraphs

    return paragraphs.map((paragraph, index) => {
      const lines = paragraph.split('\n');  // Split each paragraph by single newline

      return lines.map((line, lineIndex) => {
        if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.')) {
          return <ol key={lineIndex}><li>{line.replace(/^\d+\.\s/, '')}</li></ol>;
        } else if (line.startsWith('- ')) {
          return <ul key={lineIndex}><li>{line.replace('- ', '')}</li></ul>;
        } else if (line.trim().length === 0) {
          // Handles empty lines (acts like <br />)
          return <br key={lineIndex} />;
        } else {
          return <p key={lineIndex}>{renderTextWithBold(line)}</p>;
        }
      });
    });
  };

  // Function to render bold text by replacing **text** or __text__ with <strong>text</strong>
  const renderTextWithBold = (text) => {
    const boldRegex = /(\*\*(.*?)\*\*|__(.*?)__)/g;
    const parts = text.split(boldRegex);

    return parts.map((part, index) => {
      if (part.startsWith('**') || part.startsWith('__')) {
        return <strong key={index}>{part.replace(/\*\*|__/g, '')}</strong>;
      }
      return part;
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

// Exporting the App component, which should be the entry point of the application
export default App;

