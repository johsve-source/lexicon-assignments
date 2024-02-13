(function () {
  const audio = document.getElementById('backgroundAudio');
  const muteButton = document.getElementById('muteButton');
  const playButton = document.getElementById('playButton');

  muteButton.addEventListener('click', () => toggleMute);
  playButton.addEventListener('click', () => togglePlay);

  let isPlaying = true;

  audio.volume = 0.4;

  function toggleMute() {
    if (audio.muted) {
      audio.muted = false;
      muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      audio.muted = true;
      muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  }

  function togglePlay() {
    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
      });
    } else {
      audio.pause();
      isPlaying = false;
    }
  }
})();
