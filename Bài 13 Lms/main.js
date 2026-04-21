document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let repassword = document.getElementById("repassword").value;

  if (username === "" || password === "" || repassword === "") {
    alert("Please fill all required fields!");
    return;
  }

  if (password !== repassword) {
    alert("Passwords do not match!");
    return;
  }

  alert("Registration successful!");
});