import { validatePasswordFormat } from '../src/ValidatePassword.js';

const inputPassword = document.querySelector('#password');
const eyeImage = document.querySelector('#eyeImage');
const eyeImageConfirm = document.querySelector('#eyeImageConfirm');
const inputNewPassword = document.querySelector(
	'.inputs__container--newPassword'
);
const inputPasswordConfirm = document.querySelector('#passwordConfirm');
const btnEnviar = document.querySelector('.inputs__btn');
const lengthItem = document.querySelector('#length');
const upperCaseItem = document.querySelector('#upperCase');
const lowerCaseItem = document.querySelector('#lowerCase');
const specialCaracterItem = document.querySelector('#specialCase');

// ----------------------------------------------------------------

// Show and hide password
const showHidePassword = (element, image) => {
	if (
		element.getAttribute('type') === 'password' &&
		image.getAttribute('src') === '../src/assets/eye-gray-open.png'
	) {
		element.setAttribute('type', 'text');
		image.setAttribute('src', '../src/assets/eye-gray-close.png');
	} else {
		element.setAttribute('type', 'password');
		image.setAttribute('src', '../src/assets/eye-gray-open.png');
	}
};

eyeImage.addEventListener('click', () =>
	showHidePassword(inputPassword, eyeImage)
);

eyeImageConfirm.addEventListener('click', () =>
	showHidePassword(inputPasswordConfirm, eyeImageConfirm)
);

// List items validation color
inputNewPassword.addEventListener('keyup', () => {
	const inputValue = inputNewPassword.value;

	const alfanumeric = /(?=.*[a-z])(?=.*\d)/gi;
	const upperCase = /(?=.*[A-Z])/;
	const lowerCase = /(?=.*[a-z])/;
	const specialCase = /(?=.*[#@!?])/;

	const isAlfanumeric = alfanumeric.test(inputValue);
	const hasUpperCaracter = upperCase.test(inputValue);
	const hasLowerCaracter = lowerCase.test(inputValue);
	const hasSpecialCaracter = specialCase.test(inputValue);

	isAlfanumeric && inputValue.length >= 8
		? (lengthItem.style.color = 'green')
		: (lengthItem.style.color = '#575757');

	hasUpperCaracter
		? (upperCaseItem.style.color = 'green')
		: (upperCaseItem.style.color = '#575757');

	hasLowerCaracter
		? (lowerCaseItem.style.color = 'green')
		: (lowerCaseItem.style.color = '#575757');

	hasSpecialCaracter
		? (specialCaracterItem.style.color = 'green')
		: (specialCaracterItem.style.color = '#575757');

	if (
		isAlfanumeric &&
		hasUpperCaracter &&
		hasLowerCaracter &&
		hasSpecialCaracter
	) {
		inputNewPassword.style.borderColor = 'green';
	} else {
		inputNewPassword.style.borderColor = 'red';
	}
});

let validPassword = false;

btnEnviar.addEventListener('click', () => {
	validPassword = validatePasswordFormat(inputNewPassword.value);

	if (validPassword) {
		alert('Correct');
	} else {
		alert('Please enter a valid password');
	}
});
