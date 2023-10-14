const lastIndexOf = (arr, val) => {
  let index = []
  for (let i = 0; i < arr.length; i++){
    if (val === arr[i]){
      index.push(i)
    } 
  } 
  if (index[index.length - 1] === undefined){
    return -1
  } else {
    return(index[index.length - 1]) }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);