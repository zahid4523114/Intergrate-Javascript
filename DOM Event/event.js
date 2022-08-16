//method-2
function greenBtn() {
  document.body.style.backgroundColor = "green";
}
//method-3
let blueBtn = document.getElementById("blue-btn");

blueBtn.onclick = BlueBtn;

function BlueBtn() {
  document.body.style.backgroundColor = "blue";
}
//method-3 another
let pinkBtn = document.getElementById("pink-btn");

pinkBtn.onclick = function pinkBtn() {
  document.body.style.backgroundColor = "pink";
};
//method-4
let grayBtn = document.getElementById("gray-btn");
grayBtn.addEventListener("click", function () {
  document.body.style.backgroundColor = "gray";
});
