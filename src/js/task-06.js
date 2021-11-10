const inputRef = document.querySelector('#validation-input');
const validlength = inputRef.dataset.length;

function valided() {
    if(inputRef.value.length == validlength ) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    } else {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid');
    }
};
inputRef.addEventListener("blur", valided);

