"use strict";

var _ValidatePassword = require("../src/ValidatePassword.js");
const inputNewPassword = document.querySelector('.inputs__container--newPassword');

// const newPassword = inputNewPassword.nodeValue;
inputNewPassword.addEventListener('keyup', function () {
  (0, _ValidatePassword.validatePasswordFormat)(inputNewPassword.value);
});