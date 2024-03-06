import './Normalize.css';
import './App.css';
import FetchData from "./components/FetchData";

interface Channel {
  id: string;
  name: string;
  image: string;
  liveaudio: {
    url: string;
  };
}

function App() {

  return (
    <>
    <FetchData
      url="https://api.sr.se/api/v2/channels/?format=json"
      render={(data) => (
        <div className='container'>
          <h2 className='title'>Radio Channels</h2>
          <ul className='channels'>
            {data.channels.map((channel: Channel) => (
              <li className='channel' key={channel.id}>
                <img className='channel-image' src={channel.image} alt={channel.name} />
                <span className='channel-name'>{channel.name}</span>
                <audio className='channel-audio' controls>
                  <source className='channel-source' src={channel.liveaudio.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
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