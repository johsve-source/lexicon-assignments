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
