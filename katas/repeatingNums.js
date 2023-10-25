const repeatNumbers = (data) => {
  let newNum = []
  for (let i = 0; i<data.length; i++){
    
    let firstNum = data[i][0].toString()
    let secondNum = data[i][1]
   
    //console.log(Array(data[i][1]).fill(data[i][0]))
    //(Array(data[i][1]).fill(data[i][0]))

    newNum.push(firstNum.repeat(secondNum))
  
    }
return newNum.join(", ")
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);