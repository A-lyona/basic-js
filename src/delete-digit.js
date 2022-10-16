const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  let newStr = '';
	let maxNum = '0';
  for(let i = 0; i < str.length; i++) {
    newStr = str.replace(str[i], '');
    if(newStr > maxNum) {
      maxNum = newStr;
    }
  }
  return Number(maxNum);
}

module.exports = {
  deleteDigit
};