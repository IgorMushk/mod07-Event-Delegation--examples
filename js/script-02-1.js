// https://www.youtube.com/watch?v=nkkTOpXPt70&t=1058s

const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

//refs.input.addEventListener("input", _.throttle(onFilterChange, 500));
refs.input.addEventListener("input", _.debounce(onFilterChange, 300));

const listItemsMarkup = createListItemsMarkup(tech);
console.log(listItemsMarkup);
populateList(listItemsMarkup);

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(evt) {
  console.log(evt.target.value);
  console.log("INPUT");
  const filter = evt.target.value.toLowerCase();

  const filteredItems = tech.filter((t) => t.label.toLowerCase().includes(filter));
  console.log(filteredItems);

  const listItemsMarkup = createListItemsMarkup(filteredItems);
  populateList(listItemsMarkup);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
