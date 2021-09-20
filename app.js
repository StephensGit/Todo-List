// const theme_toggler = document.querySelector('#theme_toggler');
const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = form.create.value.trim();
});

// theme_toggler.addEventListener('click', () => {
//   document.body.classList.toggle('dark_mode');
// });
