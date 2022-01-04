const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const gender = document.getElementById("gender");
const color = document.getElementById("color");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Add the values to required text fields
  // name.innerText=form.name.value
  // email.innerText=form.email.value
  // phone.innerText=form.phone.value
  // gender.innerText=form.gender.value
  // color.innerText=form.color.value

  // alert the values
  alert(`
            Name: ${form.name.value} \n
            Email: ${form.email.value} \n
            Phone: ${form.phone.value} \n
            Gender: ${form.gender.value} \n
            Color: ${form.color.value} \n
        `);

  // Clear form
  clearForm();
});

const clearForm = () => {
  form.name.value = "";
  form.email.value = "";
  form.phone.value = "";
  form.gender.value = "";
  form.color.value = "";
};
