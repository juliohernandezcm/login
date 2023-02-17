import { validatePasswordFormat } from '../src/ValidatePassword';

describe('validate function validatePasswordFormat', () => {
	test('It should return true if the parameter matches the RegExp, otherwise it returns false', () => {
		expect(validatePasswordFormat('1Q2w3e#')).toEqual(false); // Menor 8 caracteres
		expect(validatePasswordFormat('1q2w3e#4')).toEqual(false); // sin mayusculas
		expect(validatePasswordFormat('1Q2A3A#4')).toEqual(false); // sin minúsculas
		expect(validatePasswordFormat('1A2w3e%4')).toEqual(false); // Sin caracteres especiales incluidos en la regExp
		expect(validatePasswordFormat('1A2w3e#4')).toEqual(true);
	});
});
