const insertUser = document.querySelector('#insert-user');
const users = document.querySelector('#users');
const arrUsers = [];

insertUser.addEventListener('click', event => {
	event.preventDefault();

	arrUsers.push(userComponent);

	users.innerHTML = arrUsers.join('');

	users.appendChild(insertUser);
});