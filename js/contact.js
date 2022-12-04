const form = document.querySelector("#contactForm");
const name = document.querySelector("#fullname");
const formNameError = document.querySelector("#formNameError");
const email = document.querySelector("#email");
const formEmailError = document.querySelector("#formEmailError");
const subject = document.querySelector("#subject");
const formSubjectError = document.querySelector("#formSubjectError");
const message = document.querySelector("#message");
const formTextareaError = document.querySelector("#formTextareaError");

function formValidation() {
  event.preventDefault();

  if (name.value.trim().length >= 5) {
    formNameError.style.display = "none";
    name.style.border = "2px solid green";
  } else {
    formNameError.style.display = "block";
    name.style.border = "2px solid red";
  }

  if (emailValidation(email.value) === true) {
    console.log("Email input valid!");
    formEmailError.style.display = "none";
    email.style.border = "2px solid green";
  } else {
    formEmailError.style.display = "block";
    email.style.border = "2px solid red";
    console.log("Input invalid!");
  }

  if (subject.value.trim().length >= 15) {
    formSubjectError.style.display = "none";
    subject.style.border = "2px solid green";
  } else {
    formSubjectError.style.display = "block";
    subject.style.border = "2px solid red";
  }

  if (message.value.trim().length >= 25) {
    formTextareaError.style.display = "none";
    message.style.border = "2px solid green";
  } else {
    formTextareaError.style.display = "block";
    message.style.border = "2px solid red";
  }

  if (
    name.value.trim().length >= 2 &&
    subject.value.trim().length >= 1 &&
    message.value.trim().length >= 10 &&
    emailValidation(email.value) === true
  ) {
    alert("An email has been successfully sent to support@tech.com");
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", formValidation);
