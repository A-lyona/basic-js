const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let newSumm = 0;
  let newStr = n.toString();
  while (newStr.length > 1) {
    for (let i = 0; i < newStr.length; i++) {
      newSumm += Number(newStr[i]);
    }
    newStr = newSumm.toString();
    newSumm = 0;
  }
  return Number(newStr);
}

module.exports = {
  getSumOfDigits
};
