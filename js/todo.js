const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
let todos = [];

saveTodos = () => {
	localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

delTodo = (event) => {
	const target = event.target.parentElement;

	target.remove();
	todos = todos.filter((todo) => todo.id !== parseInt(target.id));
	saveTodos();
};

addTodo = (newTodoObj) => {
	const li = document.createElement('li');
	li.id = newTodoObj.id;

	const span = document.createElement('span');
	span.innerText = newTodoObj.todo;

	const btn = document.createElement('button');
	btn.innerText = '🗑';
	btn.addEventListener('click', delTodo);

	li.append(span);
	li.append(btn);

	toDoList.append(li);
};

handleToDoSubmit = (event) => {
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value = '';

	const newTodoObj = {
		id: Date.now(),
		todo: newTodo,
	};

	todos.push(newTodoObj);
	addTodo(newTodoObj);
	saveTodos();
};

toDoForm.addEventListener('submit', handleToDoSubmit);

const loadTodos = localStorage.getItem(TODOS_KEY);

if (loadTodos !== null) {
	const parsedTodos = JSON.parse(loadTodos);
	todos = parsedTodos;
	parsedTodos.forEach(addTodo);
}
