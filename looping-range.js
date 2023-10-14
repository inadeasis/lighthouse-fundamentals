// The function should return an empty array [] if given incorrect parameters, such as:

// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

const range = (start, end, step) => {
  let output = [];
  if ((start > end) || (step <= 0) || (start, end, step === undefined)) {
    return [];
  } else {
  for (let i = start; i <= end; i += step){
    output.push(i)
  }
   return output;
}}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));