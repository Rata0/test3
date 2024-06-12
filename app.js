import { getTodos, saveTodos } from "./components/utils/loadTodos.js";
import { addTodoItem } from "./components/addTodoItem.js";

getTodos();

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    addTodoItem(todoText);
    saveTodos([...getTodos()]);
    input.value = '';
  }
});
