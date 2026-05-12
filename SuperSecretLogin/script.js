function validateLogin(event) {
    event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const correctUser = "User1234";
  const correctPass = "Cheesecake";

  if (user === correctUser && pass === correctPass) {
    alert("Ur in🦄");
    window.location.assign("../index.html");
  } else {
    alert("Incorrect silly!");
  }
}
