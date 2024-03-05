import { useState } from 'react';
import { useFavorites } from '../../hooks/useFavorites';

export default function Home() {
  const [channels, setChannels] = useState([]);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  return (
    <div className="home">
      <header className="home-header">
        <h1>Channels</h1>
      </header>
      <main>
        <p>Channels</p>
      </main>
    </div>
  );
}
