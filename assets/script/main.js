window.addEventListener("load", () => {
  const heroImage = document.querySelector(".hero img");
  heroImage.classList.add("animate");
});

window.addEventListener("load", () => {
  const enjoyText = document.querySelector(".enjoy h1");
  enjoyText.classList.add("animate");
});
window.addEventListener("load", () => {
  const enjoyText = document.querySelector(".decore img");
  enjoyText.classList.add("animate");
});


function validateEmail() {
  const email = document.getElementById("email").value;
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
  if (regex.test(email)) {
    alert("Email is valid!");
  } else {
    alert("Please enter a valid email address.");
  }
}
