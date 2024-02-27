import { useState } from 'react';
import { TodoListProps } from '../interfaces';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const TodoList = ({ todos, title }: TodoListProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContentID, setEditedContentID] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState(false);

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
            <div>
              {isEditing ? (
                /* This needs to change to your NEW todo
                And also a form element around it so you can click ENTER */
                <form>
                  <input
                    type="text"
                    onChange={(e) => setTodo(e.target.value)}
                  />
                </form>
              ) : (
                /* This needs to change to your CURRENT todo */ <p>Test</p>
              )}
            </div>
            <button onClick={handleOnClick}>{isEditing ? 'OK' : 'Edit'}</button>
          </div>
        );
      })}
    </>
  );
};
