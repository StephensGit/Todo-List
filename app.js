// const theme_toggler = document.querySelector('#theme_toggler');
// reference to the form
const form = document.querySelector('.form');
// reference to the ul, to later add new todos
const list = document.querySelector('ul');

// function to create todo
const generateTodoTemplate = (todo) => {
  const html = `

    <li class="flex-row align-content-center list-item">
        <label class="list-item-wrapper-left flex-row align-content-center">
        <input class="checkbox" type="checkbox" name="todoItem" />
        <span class="checkmark"></span>
        <span class="text">${todo}</span>
        </label>
        <span class="cross-icon"></span>
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

// delete todo item
list.addEventListener('click', (e) => {
  if (e.target.classList.contains('cross-icon')) {
    e.target.parentElement.remove();
  }
  // complete todo item
  else if (e.target.classList.contains('checkmark')) {
    e.target.nextElementSibling.classList.add('complete-todo');
  }
});

// theme_toggler.addEventListener('click', () => {
//   document.body.classList.toggle('dark_mode');
// });
