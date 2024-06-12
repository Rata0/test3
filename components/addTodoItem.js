import { getTodos, saveTodos } from './utils/loadTodos.js';

const todoList = document.getElementById('todo-list');

export const addTodoItem = (text) => {
  const item = document.createElement('li');
  item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

  const label = document.createElement('span');
  label.textContent = text;

  const deleteButton = createDeleteButton(item, text);
  item.append(label, deleteButton);

  todoList.appendChild(item);
  saveTodos([...getTodos(), text]);
};

const createDeleteButton = (item, todoText) => {
  const button = document.createElement('button');
  button.classList.add('btn', 'btn-danger', 'btn-sm');
  button.textContent = 'Удалить';
  console.log(getTodos().map(todo => todo));
  button.addEventListener('click', () => {
    item.remove();
    saveTodos(getTodos().filter((todo) => todo !== todoText));
  });
  return button;
};
