const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let newObj = {}
  let newArr = domains.map((el) => el.split('.').reverse())

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = '.' + newArr[i][j]
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    let o = ''
    for (let j = 0; j < newArr[i].length; j++) {
      o += newArr[i][j]
      if (Object.keys(newObj).includes(o)) {
        newObj[`${o}`] = newObj[`${o}`] + 1
      } else {
        newObj[`${o}`] = 1
      }
    }
  }
  return newObj
}

module.exports = {
  getDNSStats,
}
