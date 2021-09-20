// reference to the form
const form = document.querySelector('.form');
// reference to the ul, to later add new todos
const list = document.querySelector('ul');
// reference clear button
const clear = document.querySelector('.clear');

// Array to store all todos
let todos = [];

// function to create todo
const generateTodoTemplate = (todo) => {
  todos.push(todo);
  console.log(todos);
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

// Event Listener for submitting form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //   Trim any white spaces (create - is the data-attribute for name)
  const todo = form.create.value.trim();

  //   Stops users adding empty todos
  if (todo.length) {
    //   Invoke function to create new todo
    generateTodoTemplate(todo);
    form.reset();
  }
});

// Delete todo item
const removeTodoItem = (item) => {
  item.remove();
};

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('cross-icon')) {
    removeTodoItem(e.target.parentElement);
  }
  // Complete todo item
  else if (e.target.classList.contains('checkmark')) {
    e.target.nextElementSibling.classList.add('complete-todo');
  }
});

// Clear all completed items
clear.addEventListener('click', () => {
  document
    .querySelectorAll('.list-item input[type="checkbox"]:checked')
    .forEach((item) => {
      removeTodoItem(item.closest('li'));
    });
});

// filter todo list items => for every element pass the
document.querySelectorAll('.item-state').forEach((elem) => {
  elem.addEventListener('click', (e) => {
    filterTodoItems(e.target.id);
  });
});

const filterTodoItems = (id) => {
  const allItems = list.querySelectorAll('li');

  switch (id) {
    case 'all':
      allItems.forEach((item) => {
        item.classList.remove('hidden');
      });
      break;
    case 'active':
      allItems.forEach((item) => {
        item.querySelector('input').checked
          ? item.classList.add('hidden')
          : item.classList.remove('hidden');
      });
      break;
    default:
      allItems.forEach((item) => {
        !item.querySelector('input').checked
          ? item.classList.add('hidden')
          : item.classList.remove('hidden');
      });
      break;
  }
};
