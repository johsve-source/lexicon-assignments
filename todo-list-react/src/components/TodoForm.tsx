import React, { useState } from 'react';
import { TodoFormProps } from '../interfaces';

export const TodoForm: React.FC<TodoFormProps> = ({ handleAddItem }) => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemBody, setItemBody] = useState('');
  const [itemAuthor, setItemAuthor] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()} className="todo-form center">
      <label>Title:</label>
      <input
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
        type="text"
        className="todo-input-title"
      />
      <label>To-Do:</label>
      <input
        value={itemBody}
        onChange={(e) => setItemBody(e.target.value)}
        type="text"
        className="todo-input-body"
      />
      <label>Author:</label>
      <input
        value={itemAuthor}
        onChange={(e) => setItemAuthor(e.target.value)}
        type="text"
        className="todo-input-author"
      />
      <button
        onClick={() => handleAddItem(itemTitle, itemBody, itemAuthor)}
        className="todo-add-button"
      >
        Add Item
      </button>
    </form>
  );
};
