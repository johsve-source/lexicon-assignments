import React from 'react';
import { TodoListProps } from '../interfaces';

/* Destructuring using this way, instead of "props.title" for example */
export const TodoList = ({ todos, title, handleDelete }: TodoListProps) => {
  return (
    <div className="Todo-list">
      <h2>{title}</h2>
      {todos.map((todo) => {
        return (
          <div className="todo-preview" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>Author: {todo.author}</p>
            <button onClick={() => handleDelete(todo.id)}></button>
          </div>
        );
      })}
    </div>
  );
};
