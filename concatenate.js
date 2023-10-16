// You have two different arrays of data for every single location, but you only want a single array for each location. You're going to have to concatenate the arrays from both researchers into a single array.

const concat = (researcher1, researcher2) => {
  let result = []
  researcher1.forEach((results) => result.push(results));
  researcher2.forEach((results) => result.push(results))
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);