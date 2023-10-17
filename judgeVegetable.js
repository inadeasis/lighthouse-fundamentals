const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

const judgeVegetable = (vegetables,metric) => {
  let highest = 0;
  let submitter;
  for (let veggie in vegetables ){
    if (vegetables[veggie][metric] > highest){
      highest = vegetables[veggie][metric]
      submitter = (vegetables[veggie].submitter)
    }
     }
    return submitter
  }

console.log(judgeVegetable(vegetables, metric));