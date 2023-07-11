// https://www.youtube.com/watch?v=hEF4y3fVZG8&t=7366s

//   const arr = ["acb", "bac", "foo", "bca", "cab", "cba"];
// // from GPT

function findUniq(arr) {
  let uniqueString = null;

  for (let str of arr) {
    let isUnique = true;
    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
        isUnique = false;
        break;
      }
    }
    if (isUnique) {
      uniqueString = str;
      break;
    }
  }

  return uniqueString;
}

console.log("---- GPT ----");
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // === 'foo'
console.log(findUniq(["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"])); // === 'abcd'
console.log(findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"])); // === 'qwe'
