import { getTodos, saveTodos } from "./components/utils/loadTodos.js";
import { addTodoItem } from "./components/addTodoItem.js";

getTodos();

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

if (getTodos().length === 0) {
  todoList.style.display = 'none';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    addTodoItem(todoText);
    saveTodos([...getTodos()]);
    input.value = '';
    todoList.style.display = 'block';
  }
});
