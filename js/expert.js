

// AUTO SLIDE EXPERTS
const slider = document.getElementById("expertSlider");

let scrollAmount = 0;

setInterval(() => {

if(slider){
scrollAmount += 1;
slider.scrollLeft = scrollAmount;

if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
scrollAmount = 0;
}
}

},30);


// OPEN FORM
function openForm(expertName){

document.getElementById("expertName").innerText = expertName;

document.getElementById("questionForm").classList.remove("hidden");

}


// CLOSE FORM
function closeForm(){

document.getElementById("questionForm").classList.add("hidden");

}


// SEND QUESTION
function sendQuestion(){

const question = document.getElementById("questionInput").value.trim();

if(question === "") return;

document.getElementById("successMessage").classList.remove("hidden");

document.getElementById("questionInput").value = "";

}
