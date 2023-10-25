const camelCase = (input) => {
  input = input.toLowerCase();
  input = input.split(" ").reduce((string, camel) => string + (camel.charAt(0).toUpperCase() + camel.slice(1)));
  // Returning string to camelcase
  return input
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
