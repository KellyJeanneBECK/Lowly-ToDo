const inputTask = document.querySelector("#input_task");
const list = document.querySelector("#list");

// Pour créer une nouvelle tâche dans la todo
inputTask.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (inputTask.value === "" || inputTask.value === " ") {
      return;
    }
    let li = document.createElement("li");
    li.innerText = inputTask.value;
    list.appendChild(li);
    let deleteBtn = document.createElement("input");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("type", "image");
    deleteBtn.setAttribute("src", "assets/images/Delete.svg");
    deleteBtn.setAttribute("alt", "Delete task");
    li.appendChild(deleteBtn);
    inputTask.value = "";
    saveData();
  }
});

// Pour cocher/décocher et supprimer une tâche
list.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
    saveData();
  } else if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
    saveData();
  }
});

// Pour garder en mémoire les modifications
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function saveChanges() {
  list.innerHTML = localStorage.getItem("data");
}
saveChanges();
