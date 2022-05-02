const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members) || members.length === 0) {
    return false
  }
  let newArr = [];
  let newStr = '';
  for (let el of members) {
    if (typeof el === 'string') {
      newArr.push(el.trim().toUpperCase());
    }
  }
  newArr.sort();
  for(let el of newArr) {
    newStr += el[0];
  }
  return newStr;
}

module.exports = {
  createDreamTeam
};
