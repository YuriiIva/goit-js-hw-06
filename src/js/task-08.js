const refs = {
  form: document.querySelector(".login-form"),
  input: document.querySelectorAll("input"),
};
const allInfRef = {};
console.log(refs.input);

function handleFormSubmit(e) {
  e.preventDefault();
  const emailRef = refs.form.elements.email.value;
  const passwordRef = refs.form.elements.password.value;
  if (!emailRef|| !passwordRef) {
    // console.log(refs.form.elements.value);
    alert("Stop!!!Not all fields are filled");
  } else {
    allInfRef.email = emailRef;
    allInfRef.password = passwordRef;
    console.log(allInfRef);
    }
    refs.form.reset(); 
};

refs.form.addEventListener("submit",  handleFormSubmit);
