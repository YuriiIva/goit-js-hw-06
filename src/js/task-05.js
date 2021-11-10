const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};
function handleFormInput() {
  const textRef = refs.input.value? refs.input.value : "Anonymous";
  refs.span.textContent = textRef;
}
refs.input.addEventListener("input", handleFormInput);
