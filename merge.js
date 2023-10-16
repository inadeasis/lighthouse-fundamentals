// The function should, when given two sorted arrays containing numbers, return a sorted array of the numbers from both lists.

const merge = (researcher1, researcher2) => {
  let result = []
  researcher1.forEach((results) => result.push(results));
  researcher2.forEach((results) => result.push(results))
  return result.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);