import './styles/App.css';
import { Post } from './components/Post';

export function App() {
  return (
    <main>
      <Post
        image="johan.jpg"
        author="Johan"
        body="React JS is awesome!"
        date={Date.now()}
      />
      <Post
        image="jonas.jpg"
        author="Jonas"
        body="React JS is awesome!"
        date={Date.now()}
      />
    </main>
  );
}
