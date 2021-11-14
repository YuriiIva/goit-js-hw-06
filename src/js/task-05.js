

const ref = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const addTextClick = () =>
  ref.input.value !== ""
    ? (ref.span.textContent = ref.input.value)
    : (ref.span.textContent = "Anonymous");

ref.input.addEventListener("input", addTextClick);
