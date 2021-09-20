// const theme_toggler = document.querySelector('#theme_toggler');
// reference to the form
const form = document.querySelector('.form');
// reference to the ul, to later add new todos
const list = document.querySelector('ul');

// function to create todo
const generateTodoTemplate = (todo) => {
  const html = `
    <li class="flex-row align-content-center list-item">
        <div class="list-item-wrapper-left flex-row align-content-center">
            <div class="empty-checkbox-gradient">
                <div class="empty-checkbox-fill"></div>
            </div>
            <p>${todo}</p>
        </div>
        <img src="./images/icon-cross.svg" class="cross-icon" alt="" />
    </li>
  `;

  list.innerHTML += html;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = form.create.value.trim();

  //   Stops users adding empty todos
  if (todo.length) {
    generateTodoTemplate(todo);
    form.reset();
  }
});

// theme_toggler.addEventListener('click', () => {
//   document.body.classList.toggle('dark_mode');
// });
