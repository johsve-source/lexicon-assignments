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
          <h2>Radio Channels</h2>
          <ul>
            {data.channels.map((channel: Channel) => (
              <li key={channel.id}>
                <img src={channel.image} alt={channel.name} />
                {channel.name}
                <audio controls>
                  <source src={channel.liveaudio.url} type="audio/mpeg" />
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