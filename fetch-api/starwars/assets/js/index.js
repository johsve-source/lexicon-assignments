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

const audio = document.querySelector('#backgroundAudio');
observer.observe(audio);
