export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a id="create" href="/create">
          New Blog
        </a>
      </div>
    </nav>
  );
};
