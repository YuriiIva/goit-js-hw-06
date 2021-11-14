const inputRef = document.querySelector("#validation-input");
const validlength = Number(inputRef.dataset.length);

console.log(typeof validlength);
const changeClass = (addValue,removeValue) => {
  inputRef.classList.add(addValue);
  inputRef.classList.remove(removeValue);
};

function valided() {
  if (inputRef.value.length === validlength) {
    changeClass("valid", "invalid");
  } else {
    changeClass("invalid","valid");
  }
}

inputRef.addEventListener("blur", valided);


