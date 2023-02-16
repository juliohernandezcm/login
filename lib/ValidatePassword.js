"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatePasswordFormat = void 0;
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.regexp.test.js");
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

const validatePasswordFormat = newPassword => {
  const regex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#@!?])[a-zA-Z\\d#@!?]{8,}', 'gm');
  const result = regex.test(newPassword);
  return result;
};
exports.validatePasswordFormat = validatePasswordFormat;