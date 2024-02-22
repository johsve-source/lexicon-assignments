interface ITodo {
  id: number;
  title: string;
  body: string;
  author: string;
}

interface TodoListProps {
  todos: ITodo[];
  title: string;
  body?: string;
  author?: string;
}

export const TodoList = (props: TodoListProps) => {
  return (
    <div className="Todo-list">
      <h2>{props.title}</h2>
      {props.todos.map((todo) => {
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
