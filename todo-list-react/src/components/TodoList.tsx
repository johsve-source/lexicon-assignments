import { TodoListProps } from '../interfaces';

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const TodoList = ({
  todos,
  title,
  body,
  handleAddItem,
}: TodoListProps) => {
  return (
    <div className="todo-list">
      <h2 className="todo-title">{title}</h2>
      {todos.map((todo) => {
        return (
          <div className="todo-preview" key={todo.id}>
            <h2>{todo.title}</h2>
            <p className="author">{capitalizeFirstLetter(todo.author)}</p>
            <p>{todo.body}</p>
            <button onClick={handleAddItem}>Add Item</button>
          </div>
        );
      })}
    </div>
  );
};
