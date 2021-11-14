function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  controls: document.querySelector("#controls"),
  divList: document.querySelector("#boxes"),
  input: document.querySelector("input"),
};

// refs.controls.addEventListener("submit", handleFormSubmit);
// console.log(refs.controls);
// console.log(refs.divList);
