const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Créer un élément de tâche
  const li = document.createElement("li");
  li.textContent = taskText;

  // Bouton accomplir
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "✅";
  doneBtn.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // Bouton supprimer
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑️";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(doneBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  input.value = ""; // Réinitialiser le champ
});
