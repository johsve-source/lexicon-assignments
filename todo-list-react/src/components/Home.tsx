import { useState } from 'react';
import { TodoList } from './TodoList';

export const Home = () => {
  const [todos, setTodos] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'My new blog', body: 'lorem ipsum...', author: 'luigi', id: 2 },
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 3 },
  ]);

  const handleDelete = (id: number) => {
    {
      /* This filter method will filter every ID that is not defined in the function "handleDelete(id)" and change the state. */
    }
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="home">
      <TodoList
        todos={todos}
        /* todos={todos.filter((todo) => todo.author === 'mario')}
         Filter depending on "author" but you can also filter for "finished" regarding the todo list. */
        title={'All Todos'}
      />
    </div>
  );
};
