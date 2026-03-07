const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){

    messageBox.classList.remove("hidden");
    messageBox.classList.remove("text-green-600");
    messageBox.classList.add("text-red-600");

    messageBox.textContent = " Please fill in all fields.";

    return;
  }

  messageBox.classList.remove("hidden");
  messageBox.classList.remove("text-red-600");
  messageBox.classList.add("text-green-600");

  messageBox.textContent = " Message sent successfully!";

  form.reset();

});
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});