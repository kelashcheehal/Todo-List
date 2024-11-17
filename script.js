let container = document.getElementById("container");
let taskCounter = 1;

function addTask() {
  let input = document.getElementById("input").value;
  if (input !== "") {

    let todoList = document.getElementById("todo-list")

    let todoItem = document.createElement("li");
    todoItem.setAttribute("class", "todo-item");

    let taskText = document.createElement("span");
    taskText.innerText = `${taskCounter}. ${input}`;
    taskCounter++;

    let btnGroup = document.createElement("div");
    btnGroup.setAttribute("class", "btnGroup");

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");

    let editBtnIcon = document.createElement("i")
    editBtnIcon.setAttribute("class", "bi bi-pencil-square")

    editBtn.addEventListener("click", function () {
      let newTask = prompt("Enter new task...", taskText.innerText.split(". ")[1]);
      if (newTask !== "") {
        taskText.innerText = `${taskText.innerText.split(". ")[0]}. ${newTask}`;
      } else {
        alert("Task cannot be empty.");
      }
    });


    let deleteBtnIcon = document.createElement("i")
    deleteBtnIcon.setAttribute("class", "bi bi-trash3")

    let deleteBtn = document.createElement("button");

    deleteBtn.addEventListener("click", function () {
      todoItem.remove();
      updateTaskNumbers();
    });

    editBtn.appendChild(editBtnIcon)
    deleteBtn.appendChild(deleteBtnIcon)
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);
    todoItem.appendChild(taskText);
    todoItem.appendChild(btnGroup);
    todoList.appendChild(todoItem);
    container.appendChild(todoList);

    document.getElementById("input").value = "";
  } else {
    alert("Please enter a task.");
  }
}

function updateTaskNumbers() {
  let tasks = document.querySelectorAll(".todo-item span");
  taskCounter = 1;
  for (let i = 0; i < tasks.length; i++) {
    tasks[i].innerText = `${taskCounter}. ${tasks[i].innerText.split(". ")[1]}`;
    taskCounter++;
  }
}


