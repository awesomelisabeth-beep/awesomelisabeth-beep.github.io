function validateLogin(event) {
    event.preventDefault();

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const correctUser = "user123";
  const correctPass = "cheesecake";

  if (user === correctUser && pass === correctPass) {
    alert("Ur in🦄");
    window.location.assign("home.html");
  } else {
    alert("Incorrect silly!");
  }
}
