// For this challenge you'll have to implement a function called finalPosition(moves), which will calculate the position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.

let x = 0;
let y = 0;

const finalPosition = (moves) => {
  for (let i=0; i<moves.length; i++){
    if (moves[i] === 'east'){
      x +=1;
    } else if (moves[i] === 'west'){
      x -=1;
    } else if (moves[i] === 'north'){
      y +=1; 
    } else if (moves[i] === 'south'){
      y -=1;
    }
  } //console.log(x,y)
  return [x,y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
console.log(finalPosition(moves))