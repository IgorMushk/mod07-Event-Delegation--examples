// https://www.youtube.com/watch?v=hEF4y3fVZG8&t=7366s

const findUniq = (arr) =>
  arr.find((current, i) =>
    current.split("").every((item) => arr.every((comparison, j) => (i !== j ? !comparison.includes(item) : true)))
  );

console.log("---- 1one string ---");
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])); // === 'foo'
console.log(findUniq(["fghj", "ghfj", "abcd", "jhgf", "fghj", "fgjh", "ghjf"])); // === 'abcd'
console.log(findUniq(["qwe", "camp", "acmp", "pmac", "camp", "apmc", "pmac"])); // === 'qwe'
