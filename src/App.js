import React, {useState} from 'react';
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
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Generate an excerpt (e.g., first 200 characters)
  const excerpt = content.substring(0, 200) + '...';

  return (
    <article className="blog-post">
      <h2 onClick={toggleExpand} style={{ cursor: 'pointer' }}>
        {title}
      </h2>
      <p className="post-date">{formatDate(date)}</p>
      <div className="post-content">
        {isExpanded ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p>
            {excerpt}
            <span onClick={toggleExpand} className="read-more">
              Read more
            </span>
          </p>
        )}
      </div>
    </article>
  );
}


// Export the App component
export default App;
