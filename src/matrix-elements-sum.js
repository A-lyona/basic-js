const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let resultSum = 0;
  for (let column = 0; column < matrix[0].length; column++) {
    for (let string = 0; string < matrix.length; string++) {
      if (matrix[string][column] !== 0) {
        resultSum += matrix[string][column];
      } else break;
    }
  }
  return resultSum;
}

module.exports = {
  getMatrixElementsSum
};
