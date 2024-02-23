export interface ITodo {
  id: number;
  title: string;
  author: string;
}

export interface TodoListProps {
  todos: ITodo[];
  title: string;
  author?: string;
}

export interface TodoFormProps {
  handleAddItem: (title: string, author: string) => void;
}
