// https://www.youtube.com/watch?v=hEF4y3fVZG8&t=7366s

// У кожному масиві, а є унікальний рядок, у якому не повторюються літери.
// Знайдіть і виведіть цей рядок

function findUniq(arr) {
  //["abc", "acb", "bac", "foo", "bca", "cab", "cba"]
  //  return arr.find((current, i) => current.split("").every((item) =>
  //          arr.every((comparison, j) => i !== j ? !comparison.includes(item) : true)));

  for (let i = 0; i < arr.length; i += 1) {
    const result = arr[i].split("").every((item) => {
      for (let j = 0; j < arr.length; j += 1) {
        if (i !== j) {
          if (!arr[j].includes(item)) {
            return true;
          } else {
            return false;
          }
        }
      }
    });
    if (result) {
      return arr[i];
    }
  }
}
console.log("---- for ----");
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // === 'foo'
console.log(findUniq(["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"])); // === 'abcd'
console.log(findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"])); // === 'qwe'
