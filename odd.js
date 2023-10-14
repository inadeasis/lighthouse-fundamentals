const isOdd = (num) => {
  if (num % 2 === 0){
    return false;
  } else {
    return true;
  }
} 

// Check work
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));