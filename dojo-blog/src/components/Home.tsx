import { useState } from 'react';
import { BlogList } from './BlogList';

export const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'My new blog', body: 'lorem ipsum...', author: 'luigi', id: 2 },
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title={'All Blogs'} />
      <BlogList blogs={blogs} title={'All Todos'} />
    </div>
  );
};
