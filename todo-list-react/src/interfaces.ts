export interface ITodo {
  id: number;
  title: string;
  body: string;
  author: string;
}

export interface TodoListProps {
  todos: ITodo[];
  title: string;
  body?: string;
  author?: string;
}

export interface TodoFormProps {
  handleAddItem: (title: string, body: string, author: string) => void;
}
