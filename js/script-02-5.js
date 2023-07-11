// https://www.youtube.com/watch?v=hEF4y3fVZG8&t=5915s

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [
  {
    id: "sku1",
    qty: 1,
  },
  {
    id: "sku2",
    qty: 2,
  },
  {
    id: "sku3",
    qty: 3,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 8,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku1",
    qty: 6,
  },
  {
    id: "sku2",
    qty: 19,
  },
  {
    id: "sku4",
    qty: 1,
  },
  {
    id: "sku1",
    qty: 8,
  },
];

function sortProduct(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      if (arr[i].id === arr[j].id) {
        arr[i].qty += arr[j].qty;
        arr.splice(j, 1);
        j -= 1;
      }
    }
  }
}

sortProduct(products);
console.log(products);
// const products = [
//   {
//     id: "sku1",
//     qty: 15,
//   },
//   {
//     id: "sku2",
//     qty: 21,
//   },
//   {
//     id: "sku3",
//     qty: 3,
//   },
//   {
//     id: "sku4",
//     qty: 1,
//   },
// ];
