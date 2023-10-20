const conditionalSum = (values, condition)=> {
  // Your code here
  let evenNum = 0;
  let oddNum = 0;
  let result = 0;

  if (condition === "even"){
    for(let i = 0; i<values.length; i++){
      if (values[i]%2 === 0){
        evenNum = evenNum + values[i]
      }
    }
    //console.log(evenNum)
    result = evenNum

  } else if (condition === "odd"){
    for (let i = 0; i<values.length; i++){
      if (values[i]%2 === 1){
        oddNum = oddNum + values[i]
      }
    }
    //console.log(oddNum)
    result = oddNum
  }
  return result
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));