// range should be an array of two numbers representing the start and end values for the loop.
// multiples should be an array of two numbers representing the multiples you want to replace with words.
// words should be an array of two strings representing the words that will replace the multiples.

const loopyLighthouse = (range,multiples,words) => {

for (let i=range[0]; i <= range[1] ; i++){
  //console.log(i)
  if (i % multiples[0] === 0 && i % multiples[1] === 0){
    console.log(words[0]+words[1]);
  } else if ( i % multiples[0] === 0) {
    console.log(words[0])
  } else if ( i % multiples[1] === 0){
    console.log(words[1])
  } else {
    console.log(i)
  }
}}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);