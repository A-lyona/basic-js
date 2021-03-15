const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.flat();
  let count = 0;

  for(let a of arr) {
    if(a === "^^") {
      count++
    }
  }
  return count;
};
