import React, { useState } from 'react';
import { TodoFormProps } from '../interfaces';

export const TodoForm: React.FC<TodoFormProps> = ({ handleAddItem }) => {
  const [itemTitle, setItemTitle] = useState('');
  const [itemAuthor, setItemAuthor] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()} className="todo-form center">
      <label>To-Do:</label>
      <input
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
        type="text"
        className="todo-input-title"
      />
      <label>Author:</label>
      <input
        value={itemAuthor}
        onChange={(e) => setItemAuthor(e.target.value)}
        type="text"
        className="todo-input-author"
      />
      <button
        onClick={() => handleAddItem(itemTitle, itemAuthor)}
        className="todo-add-button"
      >
        Add Item
      </button>
    </form>
  );
};
