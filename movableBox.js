const box = document.querySelector('.movableBox');

// Start in center
let x = window.innerWidth / 2 - 50;
let y = window.innerHeight / 2 - 50;

box.style.left = x + 'px';
box.style.top = y + 'px';

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' || event.key === 'w') {
    y -= 10;
  } else if (event.key === 'ArrowDown' || event.key === 's') {
    y += 10;
  } else if (event.key === 'ArrowLeft' || event.key === 'a') {
    x -= 10;
  } else if (event.key === 'ArrowRight' || event.key === 'd') {
    x += 10;
  }

  // Keep box within screen boundaries
  x = Math.max(0, Math.min(x, window.innerWidth - 100));
  y = Math.max(0, Math.min(y, window.innerHeight - 100));

  box.style.left = x + 'px';
  box.style.top = y + 'px';
});