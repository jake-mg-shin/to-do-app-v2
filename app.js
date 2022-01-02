const loginForm = document.querySelector('#loginForm');
const loginInput = document.querySelector('#loginForm input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

handleLoginSubmit = (event) => {
	event.preventDefault();

	loginForm.classList.add(HIDDEN_CLASSNAME);

	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);

	handleGreeting(username);
};

handleGreeting = (name) => {
	greeting.innerText = `Hello, ${name}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
};

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener('submit', handleLoginSubmit);
} else {
	handleGreeting(savedUsername);
}
