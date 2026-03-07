let currentExpert = "";

function openForm(expertName) {

  currentExpert = expertName;

  document.getElementById("expertName").innerText = expertName;

  document.getElementById("questionForm").classList.remove("hidden");
}

function closeForm() {

  document.getElementById("questionForm").classList.add("hidden");

}

function sendQuestion(){

  const question = document.getElementById("questionInput").value;

  if(question === ""){
    alert("Please enter a question");
    return;
  }

  alert("Your question has been sent to " + currentExpert);

  document.getElementById("questionInput").value = "";

  closeForm();

}