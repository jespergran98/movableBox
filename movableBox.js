const box = document.querySelector('.movableBox');

let x = 0;
let y = 0;

document.addEventListener('keydown', (event) => {
 console.log(event.key);

if (event.key === 'ArrowUp') {
    y -= 10;
} else if (event.key === 'ArrowDown') {
    y += 10;
} else if (event.key === 'ArrowLeft') {
    x -= 10;
} else if (event.key === 'ArrowRight') {
    x += 10;
}
box.style.transform = `translate(${x}px, ${y}px)`;
});