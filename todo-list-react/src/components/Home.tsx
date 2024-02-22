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
    console.log('useEffect ran on todo');
  }, []);
  /* This second dependency is used to specify which state you want the useEffect to run on, so if I put "todos", the useEffect will only run when the todos state change, for example when I delete a todo item. */

  return (
    <div className="home">
      <TodoList todos={todos} title={'All Todos'} handleDelete={handleDelete} />
    </div>
  );
};
