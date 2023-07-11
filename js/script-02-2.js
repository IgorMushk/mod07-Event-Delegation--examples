// Завдання 1
// Написати форму логіна та паролья де буде відбуватися валідація
// полів на довжину після закінчення введення тексту. (Використати дебаунс)

const loginElem = document.querySelector('input[name="login"]');
const passwordElem = document.querySelector('input[name="password"]');
const debounceHandler = _.debounce(checkValidation, 300);

loginElem.addEventListener("input", debounceHandler);
passwordElem.addEventListener("input", debounceHandler);

function checkValidation(event) {
  console.log(event);
  console.log(event.target.name);
  if (event.target.name === "login") {
    event.target.value.length < 10
      ? (loginElem.nextElementSibling.textContent = "Field length must be min 10 chars")
      : (loginElem.nextElementSibling.textContent = "");
  } else {
    event.target.value.length < 15
      ? (passwordElem.nextElementSibling.textContent = "Field length must be min 15 chars")
      : (passwordElem.nextElementSibling.textContent = "");
  }
}
