import React from 'react';

interface ChannelProps {
  id: number;
  name: string;
  liveaudio: {
    url: string;
    bitrate: number;
  };
  isFavorite: boolean;
  onAddFavorite: (id: number) => void;
  onRemoveFavorite: (id: number) => void;
}

export const RadioChannel: React.FC<ChannelProps> = ({
  id,
  name,
  liveaudio,
  isFavorite,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFavorite(id);
    } else {
      onAddFavorite(id);
    }
  };

  return (
    <div className="radio-channel">
      <h2>{name}</h2>
      if(liveaudio)
      {
        <audio controls src={liveaudio.url}>
          Your browser does not support the audio element.
        </audio>
      }
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};
