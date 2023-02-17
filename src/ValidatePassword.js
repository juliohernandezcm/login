// Validate password
export const validatePasswordFormat = (newPassword) => {
	const regex = new RegExp(
		'(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#@!?])[a-zA-Z\\d#@!?]{8,}',
		'gm'
	);

	const result = regex.test(newPassword);

	return result;
};
