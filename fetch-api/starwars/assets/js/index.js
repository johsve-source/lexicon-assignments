(function () {
  const audio = document.getElementById('backgroundAudio');
  const muteButton = document.getElementById('muteButton');
  const playButton = document.getElementById('playButton');

  let isPlaying = true;

  function toggleMute() {
    if (audio.muted) {
      audio.muted = false;
      muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      audio.muted = true;
      muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  }

  audio.volume = 0.4;

  muteButton.addEventListener('click', toggleMute);
  playButton.addEventListener('click', function () {
    if (!isPlaying) {
      audio.play().then(() => {
        isPlaying = true;
      });
    } else {
      audio.pause();
      isPlaying = false;
    }
  });
})();
