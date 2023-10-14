// As humanity gets closer to living on Mars, you must start sending supplies to the red planet now, to prepare for your arrival. So Canada is going to start to send containers of maple syrup. Each container on the spaceship can hold exactly 100 bottles of maple syrup. A container will only be sent if it's full.
// Given a certain number of bottles, you need to determine how many containers can be filled and sent. In this challenge, you will write a function that determines how many hundreds can be made from a number.
// Define a function howManyHundreds.
// When this function is given a number, it should return how many hundreds fit into that number.

const howManyHundreds = (number) => {
  let output = Math.floor(number/100)
  return output
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
