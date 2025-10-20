const userForm = document.getElementsByTagName("form")[0];

const firstNameInput = document.getElementsByTagName("input")[0];
const lastNameInput = document.getElementsByTagName("input")[1];
const ageInput = document.getElementsByTagName("input")[2];
const fatherNameInput = document.getElementsByTagName("input")[3];
const nationalCodeInput = document.getElementsByTagName("input")[4];
const adressInput = document.getElementsByTagName("input")[5];
const zipCodeInput = document.getElementsByTagName("input")[6];

userForm.addEventListener("submit", (e) => {
  const user = {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    age: e.target.age.value,
    fatherName: e.target.fatherName.value,
    nationalCode: e.target.nationalCode.value,
    adress: e.target.adress.value,
    zipCoide: e.target.zipCode.value,
  };

  console.log(user);

  e.preventDefault();
});

firstNameInput.addEventListener("blur", (e) => {
  if (firstNameInput.value.length < 3) {
    alert("come on, write your name.🙁");
  }
});

lastNameInput.addEventListener("blur", (e) => {
  if (lastNameInput.value.length < 3) {
    alert("please write your last name.😧");
  }
});

ageInput.addEventListener("blur", (e) => {
  if (ageInput.value < 2) {
    alert("are you sure this is an age.🤔");
  }
});

fatherNameInput.addEventListener("blur", (e) => {
  if (fatherNameInput.value.length < 3) {
    alert("is this your father name? are you kidding me.🤣");
  }
});

nationalCodeInput.addEventListener("blur", (e) => {
  if (
    nationalCodeInput.value.length < 10 ||
    nationalCodeInput.value.length > 10
  ) {
    alert("I didn`t see a national code.😂 please write your national code.🙂");
  }
});

adressInput.addEventListener("blur", (e) => {
  if (adressInput.value.includes("tehran") == true) {
    alert("you will get your post soon.😎");
  } else if (adressInput.value.length < 3) {
    alert("is this your adress your adress🤔 come on😡");
  }
  console.log(adressInput.value.trim().toLowerCase());
});
zipCodeInput.addEventListener("blur", (e) => {
  if (zipCodeInput.value.length < 10 || zipCodeInput.value.length > 10) {
    alert("why you didn`t write your zip code.🤔");
  }
  console.log(zipCodeInput.value.trim().toLowerCase());
});
