let currentExpert = "";

function openForm(name){

currentExpert = name;

document.getElementById("expertName").innerText = name;

document.getElementById("questionForm").classList.remove("hidden");

}

function closeForm(){

document.getElementById("questionForm").classList.add("hidden");

}

function sendQuestion(){

let question = document.getElementById("questionInput").value;

if(question === ""){
alert("Please enter your question");
return;
}

alert("Your question has been sent to " + currentExpert);

document.getElementById("questionInput").value = "";

closeForm();

}

// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});