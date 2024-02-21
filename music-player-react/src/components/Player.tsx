import { useEffect, useState } from 'react';
import { PlayerDetails } from './PlayerDetails';
import { PlayerControls } from './PlayerControls';
import { songs } from './Songs';
import '../styles/App.css';

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [audio] = useState(new Audio(songs[currentSongIndex].src));

  const skipSong = (forward = true) => {
    const newIndex = forward
      ? (currentSongIndex + 1) % songs.length
      : (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(newIndex);
  };

  useEffect(() => {
    if (isPlaying) {
      audio
        .play()
        .catch((error) => console.error('Error playing audio: ', error));
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  return (
    <div className="music-player">
      <PlayerDetails song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        skipSong={skipSong}
      />
    </div>
  );
};
