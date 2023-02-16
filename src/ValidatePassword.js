/* export const validatePasswordFormat = (newPassword) => {
	console.log(newPassword);
	const eigthCaractersMin = /.{8,}/.test(newPassword);

	const upperAndLower =
		/(?:[A-Z])/.test(newPassword) && /(?:[a-z])/.test(newPassword);

	const numbers = /(?:\d)/.test(newPassword);

	const specialCaracters = !/[^!@#?A-Za-z\d]/.test(newPassword);

	const validPassword =
		eigthCaractersMin && upperAndLower && numbers && specialCaracters;

	console.log(validPassword);
	return validPassword;
}; */

export const validatePasswordFormat = (newPassword) => {
	const regex = new RegExp(
		'(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#@!?])[a-zA-Z\\d#@!?]{8,}',
		'gm'
	);
	const result = regex.test(newPassword);

	return result;
};
