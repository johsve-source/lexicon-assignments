interface IBlogs {
  id: number;
  author: string;
  title: string;
  body: string;
}

interface BlogListProps {
  blogs: IBlogs[];
}

export const BlogList = (props: BlogListProps) => {
  const blogs = props.blogs;

  return (
    <div className="blog-list">
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
