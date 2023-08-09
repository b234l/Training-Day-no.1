document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("popupDisplayed")) {
    alert("Привет, пользователь! Это To do List, в котором ты можешь создавать свои задачи и отмечать их выполнение. Продолжить?");
    localStorage.setItem("popupDisplayed", "true");
  }
});

document.querySelector('li').addEventListener('click', function () {
  alert('Это тренировочный проект для закрепления знаний классической front-end тройки. Разработал Алексей "b234l" Королёв. Ссылка на GitHub: https://github.com/b234l');
});

document.getElementById("taskForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var task = document.getElementById("taskInput").value;
  var priority = document.getElementById("prioritySelect").value;

  var newRow = document.createElement("tr");

  var taskCell = document.createElement("td");
  taskCell.textContent = task;
  newRow.appendChild(taskCell);

  var priorityCell = document.createElement("td");
  priorityCell.textContent = priority;
  newRow.appendChild(priorityCell);

  var statusCell = document.createElement("td");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  statusCell.appendChild(checkbox);
  newRow.appendChild(statusCell);

  var actionsCell = document.createElement("td");
  var editButton = document.createElement("button");
  editButton.textContent = "Редактировать";
  editButton.addEventListener("click", function () {
    var editedTask = prompt("Введите новое название задачи", task);
    if (editedTask !== null) {
      taskCell.textContent = editedTask;
    }
  });

  actionsCell.appendChild(editButton);

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Удалить";
  deleteButton.addEventListener("click", function () {
    newRow.remove();
  });

  actionsCell.appendChild(deleteButton);
  newRow.appendChild(actionsCell);

  document.getElementById("taskTableBody").appendChild(newRow);
  document.getElementById("taskInput").value = "";
  document.getElementById("prioritySelect").value = "1";
  document.getElementById("descriptionInput").value = "";
});