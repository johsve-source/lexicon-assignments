import { useState } from 'react';
import { TodoList } from './TodoList';

export const Home = () => {
  const [todos, setTodo] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'My new blog', body: 'lorem ipsum...', author: 'luigi', id: 2 },
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  return (
    <div className="home">
      <TodoList todos={todos} title={'All Todos'} />
    </div>
  );
};
