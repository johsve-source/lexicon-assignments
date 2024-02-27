import { useState } from 'react';
import { TodoListProps } from '../interfaces';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const TodoList = ({ todos, title }: TodoListProps) => {
  const [editedContentID, setEditedContentID] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState<string>('');

  const handleEditClick = (todoId: number, currentContent: string) => {
    setEditedContentID(todoId);
    setEditedContent(currentContent);
  };

  const handleSaveEdit = (todoId: number) => {
    console.log(`Saved changes to ID: ${todoId}: ${editedContent}`);
    setEditedContent(editedContent);
    setEditedContentID(null);
  };

  const handleCancelEdit = () => {
    setEditedContentID(null);
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
              {editedContentID === todo.id ? (
                <form>
                  <input
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(todo.id)}>OK</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </form>
              ) : (
                <p>{todo.title}</p>
              )}
            </div>
            <button onClick={() => handleEditClick(todo.id, todo.title)}>
              {editedContentID === todo.id ? null : 'Edit'}
            </button>
          </div>
        );
      })}
    </>
  );
};
