const form = document.getElementById("form");

form.onsubmit = (e) => {
  e.preventDefault();

  const userId = form["userId"].value;
  const name = form["username"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  //   console.log({ userId, name, email, password });
  let testFailed = false;

  if (userId.length < 5 || userId.length > 12) {
    alert("UserId should be of length between 5 to 12!");
    testFailed = true;
  }

  let username_regExp = /^[a-zA-Z]*$/;
  if (!username_regExp.test(name) || name.length < 15) {
    alert(
      "Username should contain only alphabets and the length should not be less than 15 characters!"
    );
    testFailed = true;
  }

  let password_regExp =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,}$/;
  if (!password_regExp.test(password)) {
    alert(
      "Password must be eight characters including one uppercase letter, one special character and alphanumeric characters!"
    );
    testFailed = true;
  }

  if (!testFailed) {
    alert(`All test validation is passed!\n
		  UserId: ${userId} \n
		  UserName: ${name} \n
		  Email: ${email}`);
  }
};
