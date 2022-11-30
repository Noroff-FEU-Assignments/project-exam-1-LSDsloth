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

  if (emailValidation(email.value) === true) {
    console.log("Email input valid!");
    formEmailError.style.display = "none";
  } else {
    formEmailError.style.display = "block";
    console.log("Input invalid!");
  }

  if (name.value.trim().length >= 2) {
    formNameError.style.display = "none";
  } else {
    formNameError.style.display = "block";
  }

  if (subject.value.trim().length >= 1) {
    formSubjectError.style.display = "none";
  } else {
    formSubjectError.style.display = "block";
  }

  if (message.value.trim().length >= 10) {
    formTextareaError.style.display = "none";
  } else {
    formTextareaError.style.display = "block";
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
