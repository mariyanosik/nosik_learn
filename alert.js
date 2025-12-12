let userName = prompt("Who are you", "");
if (userName === "Admin") {
  let password = prompt("Password?", "");
  if (password === "I am admin") {
    alert("Hello!");
  } else if (password === "" || password === null) {
    alert("Cancelled");
  } else {
    alert("Password is not correct");
  }
} else if (userName === "" || userName === null) {
  alert("Cancelled");
} else {
  alert("I dont know who you are");
}
