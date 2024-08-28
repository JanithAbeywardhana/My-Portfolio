import React from "react";



export const Blog = () => {
    const blogPosts = [
      {
        id: 1,
        title: 'First Blog Post',
        date: 'August 25, 2024',
        excerpt: 'This is a brief summary of the first blog post. It gives readers an idea of what the blog is about.',
        imageUrl: './assets/img/blog1.jpg',
        link: '/blog/first-blog-post',
      },
      {
        id: 2,
        title: 'Second Blog Post',
        date: 'August 26, 2024',
        excerpt: 'This is a brief summary of the second blog post. It highlights the key points discussed in the article.',
        imageUrl: './assets/img/blog2.jpg',
        link: '/blog/second-blog-post',
      },
      // Add more blog posts here
    ];
  
    return (
      <section className="blog-section" id="blog">
        <div className="container">
          <h2 className="section-title">Latest Blog Posts</h2>
          <div className="row">
            {blogPosts.map(post => (
              <div className="col-md-4" key={post.id}>
                <div className="blog-card">
                  <img src={post.imageUrl} alt={post.title} className="blog-image" />
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-date">{post.date}</p>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <a href={post.link} className="read-more">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };