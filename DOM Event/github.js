//hide the self information
let deleteBtn = document.getElementById("delete-btn");
deleteBtn.addEventListener("click", function () {
  let info = document.getElementById("info");
  info.style.display = "none";
});
//required text
let inputField = document.getElementById("text-field");

inputField.addEventListener("keyup", function (event) {
  let text = event.target.value;

  let removeDis = document.getElementById("delete-btn");

  if (text === "delete") {
    removeDis.removeAttribute("disabled");
  } else {
    removeDis.setAttribute("disabled", true);
  }
});
//insert the input field
let insert = document.getElementById("delete-btn");

insert.addEventListener("click", function () {
  let inputField = document.getElementById("text-field");
  inputField.value = "";
});
