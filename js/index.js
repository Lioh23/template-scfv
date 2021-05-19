const insertUser = document.querySelector('#insert-user');
const users = document.querySelector('#users');
let arrFormUsers = [];
let idUser = 0;
addUserField();


//add novo campo de usuarios
insertUser.addEventListener('click', event => {
	event.preventDefault();

	addUserField();
});

//remover um usuário
users.addEventListener('click', event => {
	event.preventDefault();
	if(event.target.parentNode.parentNode.className === "user-trash" || event.target.className === "user-trash") {
		const currentUser = event.target.parentNode.parentNode.parentNode;

		//remover elemento do array
		arrFormUsers = arrFormUsers.filter( formUser => formUser.id !== currentUser.id)
		update();
	}
})

// Adicionar um usuário à página
function addUserField() {
	//criar uma div e inserir o componente dentro dele
	const divUser = document.createElement('div');

	//adicionar classe ao elemento
	divUser.className = 'user';

	
	//adicionar id ao elemento
	idUser += 1;
	divUser.id = `user-${idUser}`;

	//adicionando o formulário ao div criado
	divUser.innerHTML = userComponent;

	//inserir um user component no array
	arrFormUsers.push(divUser);

	update();

}

function update() {
	users.innerHTML = "";
	console.log(arrFormUsers);
	arrFormUsers.map( form => { users.appendChild(form) })
}