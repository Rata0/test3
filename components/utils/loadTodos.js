let todos = [];

export const getTodos = () => todos;

export const saveTodos = (newTodos) => {
  todos = newTodos;
};
