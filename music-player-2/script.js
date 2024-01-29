const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.querySelector('.progress');
const title = document.getElementById('title');
const imgContainer = document.getElementById('img-container');
const playlist = document.getElementById('playlist');
const songs = [
  {
    name: 'hey',
    displayName: 'Hey',
    cover: 'hey',
  },
  {
    name: 'summer',
    displayName: 'Summer',
    cover: 'summer',
  },
  {
    name: 'ukulele',
    displayName: 'Ukelele',
    cover: 'ukulele',
  },
];

let songIndex = 0;

function loadSong(song) {
  title.innerText = song.displayName;
  audio.src = `music/${song.name}.mp3`;
  document.getElementById('cover').src = `./images/${song.cover}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');
  audio.pause();
}

function loadNextSong() {
  songIndex++;
  if (songIndex >= songs.length) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

function loadPrevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

audio.addEventListener('timeupdate', (e) => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener('click', loadPrevSong);
nextBtn.addEventListener('click', loadNextSong);

loadSong(songs[songIndex]);

function createPlaylistItem(song) {
  const li = document.createElement('li');

  li.innerText = song.displayName;

  li.addEventListener('click', () => {
    songIndex = songs.findIndex((s) => s.name === song.name);

    loadSong(song);

    playSong();
  });

  return li;
}

songs.forEach((song) => {
  playlist.appendChild(createPlaylistItem(song));
});
