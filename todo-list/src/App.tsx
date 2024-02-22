import { Header } from './pages/Header';
import { TodoList } from './pages/TodoList';

export function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <TodoList />
      </div>
    </div>
  );
}
