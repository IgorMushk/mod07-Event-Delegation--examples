// https://www.youtube.com/watch?v=vnSnT-Uo8JI&t=1538s

/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

const tagsContainer = document.querySelector(".js-tags");
let selectedTag = null;

tagsContainer.addEventListener("click", onTagsContainerClick);

function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const currentActiveBtn = document.querySelector(".tags__btn--active");
  console.log("Активный эллемент на момент клика: ", currentActiveBtn);

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("tags__btn--active");
  }

  // Это по новой спецификазии замеет  if() при доступу к свойству
  // не null и не udefine
  // currentActiveBtn?.classList.remove("tags__btn--active");

  const nextActiveBtn = evt.target;
  nextActiveBtn.classList.add("tags__btn--active");
  selectedTag = nextActiveBtn.dataset.value;

  console.log(selectedTag);
}

//

//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains("tags__btn--active");

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn--active");
//   console.log(selectedTags);
// }
