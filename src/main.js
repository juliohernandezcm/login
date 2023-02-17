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

const showHidePassword = (element) => {
	element.getAttribute('type') === 'password'
		? element.setAttribute('type', 'text')
		: element.setAttribute('type', 'password');
};

const changeEyeImage = (image) => {
	image.getAttribute('src') === '../src/assets/eye-gray-open.png'
		? image.setAttribute('src', '../src/assets/eye-gray-close.png')
		: image.setAttribute('src', '../src/assets/eye-gray-open.png');
};

const changeColorListItem = () => {
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
};

let isEmpty = false;

const inputIsEmphy = (value1, value2) => {
	value1 === '' || value2 === '' ? (isEmpty = true) : (isEmpty = false);

	return isEmpty;
};

let valuesAreEqual = false;

const compareInputValues = (value1, value2) => {
	value1 === value2 ? (valuesAreEqual = true) : (valuesAreEqual = false);

	return valuesAreEqual;
};

// Events
eyeImage.addEventListener('click', () => {
	showHidePassword(inputPassword);
	changeEyeImage(eyeImage);
});

eyeImageConfirm.addEventListener('click', () => {
	showHidePassword(inputPasswordConfirm);
	changeEyeImage(eyeImageConfirm);
});

inputNewPassword.addEventListener('keyup', changeColorListItem);

let validPassword = false;

btnEnviar.addEventListener('click', () => {
	inputIsEmphy(inputNewPassword.value, inputPasswordConfirm.value);

	if (isEmpty) {
		console.error('Debe llenar ambos campos');
		return;
	}

	compareInputValues(inputNewPassword.value, inputPasswordConfirm.value);

	if (!valuesAreEqual) {
		console.error('password no coinciden');
		return;
	}

	validPassword = validatePasswordFormat(inputNewPassword.value);

	if (validPassword) {
		console.log('Correcto');
	} else {
		console.error('Invalid format password');
	}
});
