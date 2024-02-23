import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
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

  const handleAddItem = () => {
    const newItem = {
      id: todos.length + 1,
      title: 'Test',
      body: 'lorem ipsum...',
      author: 'Henke',
    };
    const updatedTodos = [...todos, newItem];
    setTodos(updatedTodos);
  };

  return (
    <div className="home">
      {todos && (
        <TodoList
          todos={todos}
          title={'All Todos'}
          handleAddItem={handleAddItem}
        />
      )}
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
