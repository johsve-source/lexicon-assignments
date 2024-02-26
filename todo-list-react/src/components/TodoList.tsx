import { useState } from 'react';
import { TodoListProps } from '../interfaces';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const TodoList = ({ todos, title }: TodoListProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClick = () => {
    setIsEditing((preVal) => !preVal);
  };

  return (
    <>
      <h2 className="todo-title center">{title}</h2>
      {todos.map((todo) => {
        return (
          <div className="todo-preview center" key={todo.id}>
            <h2>{todo.title}</h2>
            <p className="author">{capitalizeFirstLetter(todo.author)}</p>
            <button onClick={handleOnClick}>
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>
        );
      })}
    </>
  );
};
