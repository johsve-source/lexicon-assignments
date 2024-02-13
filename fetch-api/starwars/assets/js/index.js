(function () {
  const audio = document.getElementById('backgroundAudio');
  const muteButton = document.getElementById('muteButton');

  function toggleMute() {
    if (audio.muted) {
      audio.muted = false;
      muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      audio.muted = true;
      muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
  }

  muteButton.addEventListener('click', toggleMute);
  audio.volume = 0.4;
})();
