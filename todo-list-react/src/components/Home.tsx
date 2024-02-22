import { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import { ITodo } from '../interfaces';

export const Home = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTodos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      <TodoList todos={todos} title={'All Todos'} />
    </div>
  );
};
