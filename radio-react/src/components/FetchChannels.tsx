import React, { useCallback, useEffect, useRef, useState } from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { Channel } from '../interfaces/IChannel';
import FetchData from './FetchData';

const FetchChannels: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [playingChannel, setPlayingChannel] = useState<string | null>(null);
  const [audioError, setAudioError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { data, error, loading, hasMore, fetchMore } = useInfiniteScroll({
    url: 'https://api.sr.se/api/v2/channels/?format=json&size=100',
  });

  const handlePlay = (channelId: string) => {
    if (playingChannel === channelId) {
      const audioElement = audioRef.current;
      if (audioElement) {
        if (audioElement.paused) {
          audioElement.play();
        } else {
          audioElement.pause();
        }
      }
    } else {
      setSelectedChannel((prevChannel) =>
        prevChannel === channelId ? null : channelId
      );
      setPlayingChannel(channelId);
    }
  };

  const handleAudioPlayback = useCallback(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.pause();
      audioElement.src =
        data?.channels.find((c) => c.id === selectedChannel)?.liveaudio.url ||
        '';
      audioElement.load();
      audioElement.play().catch((error) => {
        setAudioError('Error playing audio: ' + error.message);
      });
    }
  }, [selectedChannel, data]);

  useEffect(() => {
    handleAudioPlayback();
  }, [handleAudioPlayback, selectedChannel, data]);

  return (
    <FetchData
      data={data}
      render={(data: { channels: Channel[] }) => (
        <div className="container">
          <ul className="channels">
            {data.channels.map((channel: Channel) => (
              <li
                key={channel.id}
                className={`channel-card ${
                  selectedChannel === channel.id ? 'selected' : ''
                }`}
                onClick={() => handlePlay(channel.id)}
              >
                <img
                  className="channel-image"
                  src={channel.image}
                  alt={channel.name}
                />
                <span className="channel-tagline">{channel.tagline}</span>
              </li>
            ))}
          </ul>

          {selectedChannel && (
            <div className="sticky-audio-bar">
              <div className="audio-controls">
                <audio
                  ref={audioRef}
                  className="channel-audio"
                  controls
                  autoPlay
                  onPlay={() => setAudioError(null)}
                  onError={() => setAudioError('Error playing audio.')}
                >
                  <source
                    className="channel-source"
                    src={
                      data.channels.find((c) => c.id === selectedChannel)
                        ?.liveaudio.url
                    }
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
                {audioError && <div className="audio-error">{audioError}</div>}
              </div>
            </div>
          )}
        </div>
      )}
      loading={loading}
      error={error}
      hasMore={hasMore}
      fetchMore={fetchMore}
    />
  );
};

export default FetchChannels;
