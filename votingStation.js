// You'll write a chooseStations(stations) function that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

// Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.
// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.
// Note
// One way you could solve this is by initializing a new array within your function (let goodStations = []) and push the stations that meet the requirements to it as you loop through them.

const chooseStations = (stations) => {
  let goodStations = [];
  for (let i = 0; i<stations.length; i++){
    //console.log(stations[i][1])
    let station = stations[i][1];
    let capacity = stations[i][2];
    if (station >= 20 && (capacity === "school" || capacity == "community centre") ){
      goodStations.push(stations[i][0])
    }
    }
    return goodStations;
  }

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));