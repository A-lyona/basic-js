const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat = 0;
  for(let el of matrix) {
    for(let i of el) {
      if(i === '^^') {
        cat++;
      }
    }
  }
  return cat;
}

module.exports = {
  countCats
};
