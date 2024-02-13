export const audio = document.getElementById('backgroundAudio');
export const muteButton = document.getElementById('muteButton');
export const playButton = document.getElementById('playButton');

export let isPlaying = true;

// LAZY LOADING
let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const audio = entry.target;
        audio.src = audio.getAttribute('data-src');
        observer.unobserve(audio);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(audio);
// LAZY LOADING

export function togglePlay() {
  if (!isPlaying) {
    audio.play().then(() => {
      isPlaying = true;
    });
  } else {
    audio.pause();
    isPlaying = false;
  }
  toggleMute();
}

export function setVolume(source, volume) {
  source.volume = volume;
}

setVolume(audio, 0.2);

muteButton.addEventListener('click', () => toggleMute());
playButton.addEventListener('click', () => togglePlay());
