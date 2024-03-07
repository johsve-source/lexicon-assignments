import { useState } from 'react';
import { FetchData } from './components/FetchData';
import { Channel } from './interfaces/IChannel';

import './Normalize.css';
import './App.css';

function App() {
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
                <li className="channel" key={channel.id}>
                  <img
                    className="channel-image"
                    src={channel.image}
                    alt={`${channel.name} logo`}
                  />
                  <span className="channel-name">{channel.name}</span>
                  <audio
                    className="channel-audio"
                    controls
                    onPlay={() => setAudioError(null)}
                    onError={() => setAudioError('Error playing audio.')}
                    onEnded={() => setAudioError('Audio ended.')}
                    onAbort={() => setAudioError('Audio aborted.')}
                    onCanPlay={() => setAudioError(null)}
                    onCanPlayThrough={() => setAudioError(null)}
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
                </li>
              ))}
            </ul>
          </div>
        )}
        autoFetch={true}
      />
    </>
  );
}

export default App;
