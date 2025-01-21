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
});
