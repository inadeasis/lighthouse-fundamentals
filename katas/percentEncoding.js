const urlEncode = (text) => {
  let newText = text.split(' ').join('%20')
  if (text[0] === " " || text[text.length] === " "){
    newText = text.slice(1,text.length-1).split(' ').join('%20')
  }
  return newText
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));