import { useState } from 'react';

export const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'My new blog', body: 'lorem ipsum...', author: 'luigi', id: 2 },
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Author: {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};
