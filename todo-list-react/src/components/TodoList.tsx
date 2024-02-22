import { TodoListProps } from '../interfaces';

export const TodoList = ({ todos, title }: TodoListProps) => {
  return (
    <div className="Todo-list">
      <h2>{title}</h2>
      {todos.map((todo) => {
        return (
          <div className="todo-preview" key={todo.id}>
            <h2>{todo.title}</h2>
            <p>Author: {todo.author}</p>
          </div>
        );
      })}
    </div>
  );
};
