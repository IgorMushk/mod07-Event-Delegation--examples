// const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

const isSubset = (array1, array2) =>
  array2.every((element) => {
    console.log("array2 :", element);
    return array1.includes(element);
  });

//console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6, 8, 9, 10])); // true
console.log("-----------------------------------------");
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

/////////////////////////////////////////////////////////////////////////////////////////

console.log("=========================================");

/*
1 2 3 
4 5 6
7 8 9 
*/

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

//const gameX = [1, 2, 5];
const gameX = [1, 2, 5, 9];
//const gameO = [6, 8, 9];
const gameO = [3, 6, 7];

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

console.log("gamer X", isWinner(gameX));
console.log("gamer O", isWinner(gameO));
