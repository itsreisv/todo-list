import { el } from "date-fns/locale";
import { Project } from "./projects";
import { Task } from "./tasks";

// Global
let defaultProject = new Project('General');
console.log(defaultProject)


export function addTask() {
  const button = document.querySelector('.task-button');
  button.addEventListener('click', () => {
    const taskDiv = document.querySelector('.task-list');
    const newDiv = document.createElement('div');
    const title = document.createElement('h3')
    const name = document.createElement('input')
    const dueDate = document.createElement('input')
    const confirmButton = document.createElement('button')
    title.textContent = 'New Task'
    newDiv.classList.add('input-modal');
    confirmButton.classList.add('confirm')
    confirmButton.textContent = 'Confirm'
    name.classList.add('name-input')
    name.setAttribute('type', 'text')
    name.setAttribute('placeholder', 'Task Name')
    dueDate.classList.add('date-input')
    dueDate.setAttribute('type', 'date')
    newDiv.appendChild(title)
    newDiv.appendChild(name)
    newDiv.appendChild(dueDate)
    newDiv.appendChild(confirmButton)
    taskDiv.insertBefore(newDiv, taskDiv.childNodes[1]);
  })
}

export function sendTask() {
  document.addEventListener('click', () => {
    const target = event.target.closest('.confirm');
    const name = document.querySelector('.name-input');
    const date = document.querySelector('.date-input');
    const modal = document.querySelector('.input-modal')
    if(target) {
      let newTask = new Task(name.value, date.value);
      defaultProject.tasks.push(newTask)
      console.log(defaultProject)
      modal.remove()
      displayTasks()
    }
  })
}

export function displayTasks() {
  //Make it so that the project always displays all of its tasks
  let taskArray = defaultProject.tasks;
  const taskList = document.querySelector('.task-list');
  const newDiv = document.createElement('div');
  const nameDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const imgDiv = document.createElement('div');
  const editBtn = document.createElement('button')
  const deleteBtn = document.createElement('button')
  const editImg = document.createElement('img')
  const deleteImg = document.createElement('img')
  nameDiv.classList.add('name-div')
  dateDiv.classList.add('date-div')
  imgDiv.classList.add('img-div')
  newDiv.classList.add('tasks')
  for (let i = 0; i < taskArray.length; i++) {
    newDiv.setAttribute('id', i)
  }
  deleteBtn.classList.add('delete-button')
  editBtn.classList.add('edit-button')
  imgDiv.appendChild(editBtn)
  imgDiv.appendChild(deleteBtn)
  editBtn.appendChild(editImg)
  deleteBtn.appendChild(deleteImg)
  newDiv.appendChild(nameDiv)
  newDiv.appendChild(dateDiv)
  newDiv.appendChild(imgDiv)
  taskList.insertBefore(newDiv, taskList.childNodes[1])

  for (let i = 0; i < taskArray.length; i++) {
    nameDiv.textContent = taskArray[i].name
    dateDiv.textContent = taskArray[i].dueDate 
  }
  editImg.src = '../src/images/edit.svg';
  deleteImg.src = '../src/images/close.svg';
}

export function deleteButton() {
  document.addEventListener('click', () => {
    const target = event.target.closest('.delete-button');
    if (target) {
      const parentElement = target.parentNode.parentNode;
      const taskName = parentElement.childNodes[0].textContent;
      parentElement.remove()
      defaultProject.deleteTask(taskName)
      }
    })
}

export function editButton() {
  document.addEventListener('click', () => {
    const target = event.target.closest('.edit-button');
    if (target) {
      const tasks = target.parentElement.parentElement
      const oldName = tasks.childNodes[0];
      const oldDate = tasks.childNodes[1]
      oldName.textContent = '';
      oldDate.textContent = '';
      const newName = document.createElement('input');
      const newDate = document.createElement('input');
      const newConfirm = document.createElement('button');
      newConfirm.classList.add('confirm-edit');
      newConfirm.textContent = 'Confirm';
      newName.setAttribute('type', 'text');
      newDate.setAttribute('type', 'date')
      newName.setAttribute('placeholder', 'New Task Name')
      newDate.setAttribute('placeholder', 'New Task Date')
      newName.classList.add('new-name');
      newDate.classList.add('new-date')
      oldName.appendChild(newName);
      oldDate.appendChild(newDate);
      oldName.appendChild(newConfirm)
    }
  })
}

export function editConfirm() {
  document.addEventListener('click', () => {
    const target = event.target.closest('.confirm-edit');
    if (target) {
      const tasks = target.parentElement.parentElement;
      const nameInput = document.querySelector('.new-name').value;
      const dateInput = document.querySelector('.new-date').value;
      tasks.childNodes[0].textContent = nameInput;
      tasks.childNodes[1].textContent = dateInput;
      defaultProject.tasks[tasks.id].setName(nameInput)
      defaultProject.tasks[tasks.id].setDate(dateInput)
      console.log(tasks.id)
      console.log(defaultProject)
    }
  })
}