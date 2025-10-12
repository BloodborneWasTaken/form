const userForm = document.getElementsByTagName("form")[0];

userForm.addEventListener("submit", (e) => {
    
  console.log(e.target.firstName.value);

  console.log(e.target.lastName.value);

  console.log(e.target.age.value);

  console.log(e.target.fatherName.value);

  console.log(e.target.nationalCode.value);

  e.preventDefault();
});
