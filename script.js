document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerHTML = '<i class="fas fa-edit"></i>Edit'; // FontAwesome edit icon
    editButton.addEventListener("click", () => editTask(taskSpan));
    li.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>Delete'; // FontAwesome delete icon
    deleteButton.addEventListener("click", () => deleteTask(li));
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";
}

function editTask(taskSpan) {
    const newTask = prompt("Edit Task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
    }
}

function deleteTask(taskItem) {
    if (confirm("Are you sure you want to delete this task?")) {
        taskItem.remove();
    }
}
