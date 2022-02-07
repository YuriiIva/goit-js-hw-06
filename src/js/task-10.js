function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  controls: document.getElementById("controls"),
  divList: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

let arr = [];
let defAmount = 0;

const handleCreate = () => {
  const count = refs.input.value;

  for (let i = 0; i < count; i += 1) {
    const liRef = document.createElement("div");
    liRef.style.width = 30 + 10 * (defAmount + i) + "px";
    liRef.style.height = 30 + 10 * (defAmount + i) + "px";

    liRef.style.backgroundColor = getRandomHexColor();

    arr.push(liRef);
  }
  defAmount += +count;
  refs.divList.append(...arr);
};
const handleDestroy = () => {
  arr = [];
  defAmount = 0;
  refs.divList.innerHTML = "";
};
refs.btnCreate.addEventListener("click", handleCreate);
refs.btnDestroy.addEventListener("click", handleDestroy);
