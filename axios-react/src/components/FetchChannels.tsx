import { useState } from 'react';
import { FetchData } from './FetchData';
import { Channel } from '../interfaces/IChannel';

import '../Normalize.css';

export default function FetchChannels() {
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [audioError, setAudioError] = useState<string | null>(null);

  return (
    <>
      <FetchData
        url="https://api.sr.se/api/v2/channels/?format=json"
        render={(data) => (
          <div className="container">
            <h2 className="title">Radio Channels</h2>
            <ul className="channels">
              {data.channels.map((channel: Channel) => (
                <div key={channel.id} className="channel-card">
                  <li
                    className={`channel ${
                      selectedChannel === channel.id ? 'selected' : ''
                    }`}
                    onClick={() =>
                      setSelectedChannel(
                        selectedChannel === channel.id ? null : channel.id
                      )
                    }
                  >
                    <img
                      className="channel-image"
                      src={channel.image}
                      alt={channel.name}
                    />
                    <span className="channel-tagline">{channel.tagline}</span>
                    {selectedChannel === channel.id && (
                      <div className="audio-controls">
                        <audio
                          className="channel-audio"
                          controls
                          onPlay={() => setAudioError(null)}
                          onError={() => setAudioError('Error playing audio.')}
                        >
                          <source
                            className="channel-source"
                            src={channel.liveaudio.url}
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                        {audioError && (
                          <div className="audio-error">{audioError}</div>
                        )}
                      </div>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
        autoFetch={true}
      />
    </>
  );
}
