// Create a function to determine someone's age.
// Define a function called ageCalculator. This function should take three parameters:
// name: a string representing someone's name
// yearOfBirth: a number representing their year of birth
// currentYear: a number representing the current year
// The ageCalculator function should return a string explaining how old the person is. For example, if you called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows:
// return != console.log

const ageCalculator = (name, yearOfBirth, currentYear) => {
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
