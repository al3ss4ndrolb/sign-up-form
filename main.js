document.addEventListener("DOMContentLoaded", function () {
  const checkPassword = () => {
    const password = document.querySelector("#password").value;
    const confirmedPassword = document.querySelector("#confirm-password").value;

    const error = document.querySelector("#error");
    if (password === confirmedPassword) {
      return true;
    } else {
      return false;
    }
  };
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hey I wrote this too!");
});
