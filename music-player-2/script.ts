const musicContainer: Element = document.querySelector('.music-container');
const playBtn: HTMLElement = document.getElementById('play');
const prevBtn: HTMLElement = document.getElementById('prev');
const nextBtn: HTMLElement = document.getElementById('next');
const audio: HTMLMediaElement = document.getElementById('audio');
const progress: Element = document.querySelector('.progress');
const title: HTMLElement = document.getElementById('title');
const imgContainer: HTMLElement = document.getElementById('img-container');
const playlist: HTMLElement = document.getElementById('playlist');
const songs: { name: string; displayName: string; cover: string }[] = [
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

let songIndex: number = 0;

function loadSong(song: { name: string; displayName: string; cover: string }) {
  title.innerText = song.displayName;
  audio.src = `music/${song.name}.mp3`;
  (
    document.getElementById('cover') as HTMLImageElement
  ).src = `./images/${song.cover}.jpg`;
}

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas')!.classList.add('fa-pause');
  playBtn.querySelector('i.fas')!.classList.remove('fa-play');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas')!.classList.add('fa-play');
  playBtn.querySelector('i.fas')!.classList.remove('fa-pause');
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
  const progressPercent: number = (audio.currentTime / audio.duration) * 100;
  (progress as HTMLElement).style.width = `${progressPercent}%`;
});

playBtn.addEventListener('click', () => {
  const isPlaying: boolean = musicContainer.classList.contains('play');
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

prevBtn.addEventListener('click', loadPrevSong);
nextBtn.addEventListener('click', loadNextSong);

loadSong(songs[songIndex]);

function createPlaylistItem(song: {
  name: string;
  displayName: string;
  cover: string;
}) {
  const li: HTMLLIElement = document.createElement('li');
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

function createPlaylistItem(song: {
  name: string;
  displayName: string;
  cover: string;
}) {
  const li: HTMLLIElement = document.createElement('li');
  li.innerHTML = `
  <img src="./images/${song.cover}.jpg" alt="${song.displayName}" width="30" height="30" />
  <span>${song.displayName}</span>
  `;
  li.addEventListener('click', () => {
    songIndex = songs.findIndex((s) => s.name === song.name);
    loadSong(song);
    playSong();
  });
  return li;
}
