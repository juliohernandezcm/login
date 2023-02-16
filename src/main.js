import { validatePasswordFormat } from '../src/ValidatePassword.js';

const inputNewPassword = document.querySelector(
	'.inputs__container--newPassword'
);

// const newPassword = inputNewPassword.nodeValue;
inputNewPassword.addEventListener('keyup', function () {
	validatePasswordFormat(inputNewPassword.value);
});
