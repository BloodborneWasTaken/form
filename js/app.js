const userForm = document.getElementsByTagName("form")[0];

const firstNameInput = document.getElementsByTagName("input")[0];
const lastNameInput = document.getElementsByTagName("input")[1];
const ageInput = document.getElementsByTagName("input")[2];
const fatherNameInput = document.getElementsByTagName("input")[3];
const nationalCodeInput = document.getElementsByTagName("input")[4];

userForm.addEventListener("submit", (e) => {
  const user = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    age: e.target.age.value,
    fatherName: e.target.fatherName.value,
    nationalCode: e.target.nationalCode.value,
  };

  console.log(user);

  e.preventDefault();
});

firstNameInput.addEventListener("blur", (e) => {
  if (firstNameInput.value.length < 3) {
    alert("your name isn`t right");
  }
});

lastNameInput.addEventListener("blur", (e) => {
  if (lastNameInput.value.length < 3) {
    alert("your last name isn`t right");
  }
});

ageInput.addEventListener("blur", (e) => {
  if (ageInput.value < 2) {
    alert("your age isn`t right");
  }
});

fatherNameInput.addEventListener("blur", (e) => {
  if (fatherNameInput.value.length < 3) {
    alert("your father name isn`t right");
  }
});

nationalCodeInput.addEventListener("blur", (e) => {
  if (nationalCodeInput.value.length < 10 || nationalCodeInput.value.length > 10) {
    alert("your national code isn`t right");
  }
});
