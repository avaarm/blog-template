import React from 'react';
import './App.css';
import Logo from './Logo'

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <h1>Dev Bun</h1>
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
      content: `In our increasingly digital world, it's easy for our digital lives to become cluttered with endless emails, files, photos, and apps. Just like a messy room, a chaotic digital space can lead to stress, reduce productivity, and make it difficult to find what you need when you need it. The good news is that tidying up your digital life can be as satisfying as organizing your physical space. Here's a guide to help you reduce the digital burden and create a more streamlined, efficient, and enjoyable online experience.

1. Declutter Your Email Inbox:
Your email inbox is often the primary source of digital clutter. Here's how to clean it up:

Unsubscribe from Unnecessary Newsletters: Take a few minutes each day to unsubscribe from newsletters and promotional emails that no longer interest you. Use tools like Unroll.Me to manage subscriptions easily.
Set Up Folders and Filters: Organize your inbox by creating folders for different categories like work, personal, finances, etc. Use filters to automatically sort incoming emails into these folders.
Delete and Archive: Go through old emails and delete those that are no longer needed. For emails that you might need to reference later, create an archive folder. Many email platforms offer a one-click archive option to simplify this process.`,
      date: new Date('2024-08-26T10:00:00'),
      link: '/post/1'
    }
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
      {Array.isArray(content) ? (
        <div className="post-content">
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="post-content">{content}</p>
      )}
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