const buttonElement = document.getElementById('button');
const invitationElement = document.getElementById('invitation');

const showInvitation = () => {
	if (invitationElement.classList.contains('show')) {
		invitationElement.classList.remove('show');
	} else {
		invitationElement.classList.add('show');
	}
};
buttonElement.addEventListener('click', showInvitation);
