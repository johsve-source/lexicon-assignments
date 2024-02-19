import '../styles/Body.css';
import '../styles/Hot.css';
import '../styles/Juicy.css';
import '../styles/Cosy.css';

import { Hot } from './sections/Hot';
import { Juicy } from './sections/Juicy';
import { Cosy } from './sections/Cosy';

export function Body() {
  return (
    <main>
      <Hot />
      <Juicy />
      <Cosy />
    </main>
  );
}
