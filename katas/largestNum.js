const sumLargestNumbers = (data) => {
let firstNum = 0;
let secondNum = 0;
let total = 0;

for (let i=0; i<data.length; i++){
  if (data[i] > firstNum && data[i] > secondNum){
  firstNum = data[i]}}

for (let j=0; j<data.length; j++){
  if (data[j] < firstNum && data[j] > secondNum){
    secondNum = data[j];
      }
    }
  total = firstNum + secondNum
  return total
}
;

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));