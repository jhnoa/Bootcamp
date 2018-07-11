function checkPassword(password) {
  let upperCase = false,
    lowerCase = false,
    condition = [],
    success = false;

  if (password.length < 6) {
    condition.push('Password too short');
  }

  for (let char of password) {
    if (char.toUpperCase() === char) {
      upperCase = true;
    }
    if (char.toLowerCase() === char) {
      lowerCase = true;
    }
  }
  if (upperCase === false) {
    condition.push('Password need at least 1 uppercase');
  }
  if (lowerCase === false) {
    condition.push('Password need at least 1 lowercase');
  }
  if (condition.length === 0) {
    success = true;
  }
  return {success, condition};
}
console.log(checkPassword(''));
console.log(checkPassword('qwerty'));
console.log(checkPassword('QWERTY'));
console.log(checkPassword('QWErty'));
console.log(checkPassword('QWE'));
console.log(checkPassword('qwe'));
