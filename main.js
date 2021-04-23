const btn = document.querySelector('button');

btn.addEventListener('mouseenter', () => {
  console.log('test');
  btn.style.top = `${Math.floor(Math.random() * vh)}px`;
  btn.style.left = `${Math.floor(Math.random() * vw)}px`;
  btn.style.transform = 'translate(-50%, -50%)';
});
const vh = window.innerHeight;
const vw = window.innerWidth;

btn.addEventListener('click', () => {
  const winDiv = document.createElement('div');
  winDiv.className = 'win';
  winDiv.textContent = "Aaaargh.. tu m'as eu !";
  document.body.appendChild(winDiv);
  document.body.style.display = 'flex';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.removeChild(btn);
});
