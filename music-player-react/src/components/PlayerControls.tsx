import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from '@fortawesome/free-solid-svg-icons';

interface IPlayerControls {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  skipSong: (forward?: boolean) => void;
}

export function PlayerControls(props: IPlayerControls) {
  return (
    <div className="music-player--controls">
      <button className="skip-btn" onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() => props.skipSong(true)}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
