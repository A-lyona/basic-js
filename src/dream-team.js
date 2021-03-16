const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if(!Array.isArray(members)) {
return false
}
let array = members.filter(function(el) {
  if(typeof el === 'string') {
  return true
  }
  })

let result = ''
array.map(function(a) {
  return result += (a.trim())[0].toUpperCase()
})
return result.split('').sort().join('')
};
