import { TodoListProps } from '../interfaces';

export const TodoList = ({ todos, title }: TodoListProps) => {
  return (
    <div className="todo-list">
      <h2 className="todo-title">{title}</h2>
      {todos.map((todo) => {
        return (
          <div className="todo-preview" key={todo.id}>
            <h2>{todo.title}</h2>
            <p className="author">{todo.author}</p>
          </div>
        );
      })}
    </div>
  );
};
