import React from 'react';
import { RadioChannel } from './RadioChannel';

interface Channel {
  id: number;
  name: string;
  liveaudio: {
    url: string;
    bitrate: number;
  };
}

interface ChannelProps {
  channels: Channel[];
  favorites: number[];
  onAddFavorite: (id: number) => void;
  onRemoveFavorite: (id: number) => void;
}

export const RadioChannelList: React.FC<ChannelProps> = ({
  channels,
  favorites,
  onAddFavorite,
  onRemoveFavorite,
}) => {
  return (
    <div className="radio-channel-list">
      {channels.map((channel) => (
        <RadioChannel
          key={channel.id}
          id={channel.id}
          name={channel.name}
          liveaudio={channel.liveaudio}
          isFavorite={favorites.includes(channel.id)}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
};
