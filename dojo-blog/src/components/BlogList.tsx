interface IBlogs {
  id: number;
  title: string;
  body: string;
  author: string;
}

interface BlogListProps {
  blogs: IBlogs[];
  title: string;
  body?: string;
  author?: string;
}

export const BlogList = (props: BlogListProps) => {
  return (
    <div className="blog-list">
      <h2>{props.title}</h2>
      {props.blogs.map((blog) => {
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
