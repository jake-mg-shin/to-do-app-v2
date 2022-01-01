const loginInput = document.querySelector('#loginForm input');
const loginButton = document.querySelector('#loginForm button');

const handleLoginForm = () => {
	const username = loginInput.value;

	if (username === '') {
		alert('Please write your name');
	}
};

loginButton.addEventListener('click', handleLoginForm);
