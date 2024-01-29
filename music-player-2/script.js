const musicContainer = document.querySelector('.music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.querySelector('.progress');
const title = document.getElementById('title');
const imgContainer = document.getElementById('img-container');
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
