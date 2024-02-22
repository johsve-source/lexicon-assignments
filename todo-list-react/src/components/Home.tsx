import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';

export const Home = () => {
  const [todos, setTodos] = useState([
    { title: 'Get dog food', body: 'lorem ipsum...', author: 'johan', id: 1 },
    { title: 'Do dishes', body: 'lorem ipsum...', author: 'johnny', id: 2 },
    {
      title: 'Clean the house',
      body: 'lorem ipsum...',
      author: 'kalle',
      id: 3,
    },
  ]);

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    console.log(`Deleted ${}`);
  }, []); // Empty dependency array for initial render

  return (
    <div className="home">
      <TodoList todos={todos} title={'All Todos'} handleDelete={handleDelete} />
    </div>
  );
};
