const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // рекурсия
  calculateDepth(arr, count = 1) {
    let newArr = arr.filter(() => true)
    for (let i = 0; i < newArr.length; i++) {
      if (Array.isArray(newArr[i]) === true) {
        count++
        return this.calculateDepth(newArr.flat(), count)
      }
    }
    return count
  }
}

module.exports = {
  DepthCalculator,
}
