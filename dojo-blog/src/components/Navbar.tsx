export const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Todo List</h1>
      <div className="links">
        <a href="/">Home</a>
        <a id="create" href="/create">
          New Item
        </a>
      </div>
    </nav>
  );
};
