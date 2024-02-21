import { useState } from 'react';
import { PlayerDetails } from './components/PlayerDetails';
import { PlayerControls } from './components/PlayerControls';
import { songs } from './components/Songs';
import './styles/App.css';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const skipSong = (forward = true) => {
    const newIndex = forward
      ? (currentSongIndex + 1) % songs.length
      : (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  return (
    <div className="App">
      <PlayerDetails song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
    </div>
  );
};

export default App;
