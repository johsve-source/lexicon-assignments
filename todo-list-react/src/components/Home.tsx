import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';
import { ITodo } from '../interfaces';

const apiURL_default = 'http://localhost:3000/blogs';
const apiURL_secondary = 'http://localhost:3000/blogs';

export const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(apiURL_default || apiURL_secondary)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsPending(false);
        setError(error.message);
      });
  }, []);

  const handleAddItem = (title: string, body: string, author: string) => {
    const newItem = {
      id: todos.length + 1,
      title,
      body,
      author,
    };
    const updatedTodos = [...todos, newItem];
    setTodos(updatedTodos);
  };

  return (
    <div className="home">
      {!error && <TodoForm handleAddItem={handleAddItem} />}
      {todos && !error && <TodoList todos={todos} title={'All Todos'} />}
      <div className="center">
        {isPending && !error && <div className="loader"></div>}
      </div>
      {error && (
        <div className="error-box center">
          <p className="error-text center">{`Error fetching data: ${error}`}</p>
        </div>
      )}
    </div>
  );
};
