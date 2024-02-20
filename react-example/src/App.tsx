import './styles/App.css';
import { Post } from './components/Post';

export function App() {
  return (
    <main>
      <Post author="Johan" body="React JS is awesome!" />
      <Post author="Jonas" body="React JS is awesome!" />
    </main>
  );
}
