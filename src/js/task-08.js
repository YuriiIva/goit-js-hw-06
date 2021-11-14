const refs = {
  form: document.querySelector(".login-form"),
  input: document.querySelectorAll("input"),
};
const allInfRef = {};
// console.log(refs.input);

function handleFormSubmit(e) {
  e.preventDefault();
  const emailRef = refs.form.elements.email.value;
  // console.dir(refs.form);
  const passwordRef = refs.form.elements.password.value;
  if (!emailRef || !passwordRef) {
    // console.log(refs.form.elements.value);
    alert("Stop!!!Not all fields are filled");
  } else {
    allInfRef.email = emailRef;
    allInfRef.password = passwordRef;
    console.log(allInfRef);
  }
  refs.form.reset();
}

refs.form.addEventListener("submit", handleFormSubmit);

// const formRef = document.querySelector(".login-form");
// const object = {};

// const getInfo = (e) => {
//   e.preventDefault();
//   if (e.target.email.value !== "" && e.target.password.value !== "") {
//     console.log(e.target.email.value);
//     object.name = e.target.email.value;
//     object.password = e.target.password.value;
//     console.log(object);
//   } else {
//     alert(" Warning!!!");
//   }
//   formRef.reset();
// };

// formRef.addEventListener("submit", getInfo);
