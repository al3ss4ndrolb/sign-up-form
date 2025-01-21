document.addEventListener("DOMContentLoaded", function () {
  const checkPassword = () => {
    const password = document.querySelector("#password").value;
    const confirmedPassword = document.querySelector("#confirm-password").value;

    const error = document.querySelector("#error");
    if (password !== confirmedPassword) {
      error.innerHTML = "Passwords do not match!";
    } else {
      error.innerHTML = "";
    }
  };

  // Add event listeners to the password fields
  document.querySelector("#password").addEventListener("input", checkPassword);
  document
    .querySelector("#confirm_password")
    .addEventListener("input", checkPassword);
});
