import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { ITodo } from '../interfaces';

export const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
        setIsPending(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsPending(false);
        setError('Failed to fetch data. Please try again localStorage.');
      });
  }, []);

  return (
    <div className="home">
      <TodoList todos={todos} title={'All Todos'} />
      {isPending && !error && <div>Loading...</div>}
      {error && (
        <div className="error-box">
          <p className="error-text">{`Error fetching data: ${error}`}</p>
        </div>
      )}
    </div>
  );
};
