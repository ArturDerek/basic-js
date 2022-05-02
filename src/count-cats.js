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
function countCats(mat) {
  if (!mat || !mat.length) {
    return 0
  }

  let mas = mat.flat();
  let counter = 0;
  for (let i = 0; i < mas.length; i++) {
    if (mas[i] === '^^') {
      counter = counter + 1;
    }
  }
  return counter;
}

module.exports = {
  countCats
};
