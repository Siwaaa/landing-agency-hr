if (document.documentElement.clientWidth > 1024) {
  const scenes = document.querySelectorAll('.parallax-scene');
  scenes.forEach(el => {
    const scene = new Parallax(el);
  });
}