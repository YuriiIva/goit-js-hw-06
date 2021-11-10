function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  btnChangeColor: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  color: document.querySelector('.color'),
};

refs.btnChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.color.textContent = color;
})