let input = document.getElementById("input");
let addBtn = document.getElementById("add");
let tasklist = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please Enter any text..");
  } else {
    let Li = document.createElement("li");
    Li.innerText = input.value;
    let span = document.createElement("span");
    span.innerText = "Delete";
    tasklist.appendChild(Li);
    Li.appendChild(span);
  }
  input.value = "";
  saveData();
});

tasklist.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", tasklist.innerHTML);
}
function showData() {
  tasklist.innerHTML = localStorage.getItem("data");
}
showData();
