export {addTask};

const addTask = (() => {

  const newTask = () => {
    const container = document.querySelector('#content');
    const buttonDiv = document.createElement('div');
    const addButton = document.createElement('button');
    const taskDiv = document.createElement('div');
    container.appendChild(taskDiv);
    taskDiv.classList.add('task-div');
    buttonDiv.classList.add('button-div');
    container.appendChild(buttonDiv);
    buttonDiv.appendChild(addButton);
    addButton.classList.add('add-task');
    addButton.textContent = '+ Add Task';
    }

  const taskModal = () => {
    const taskDiv = document.querySelector('.task-div');
    const formDiv = document.createElement('div');
    const newTask = document.createElement('form');
    const titleLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descriptionLabel = document.createElement('label');
    const descriptionInput = document.createElement('input');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const submitButton = document.createElement('button');
    document.querySelector('.add-task').addEventListener('click', () => {
      taskDiv.appendChild(formDiv);
      formDiv.classList.add('form-div');
      formDiv.appendChild(newTask);
      newTask.classList.add('new-task');
      newTask.appendChild(titleLabel);
      newTask.appendChild(titleInput);
      titleLabel.textContent = 'Title:';
      newTask.appendChild(descriptionLabel);
      newTask.appendChild(descriptionInput);
      descriptionLabel.textContent = 'Description:';
      newTask.appendChild(dateLabel);
      newTask.appendChild(dateInput);
      dateLabel.textContent = 'Due Date:';
      titleInput.setAttribute('type', 'text');
      descriptionInput.setAttribute('type', 'text');
      dateInput.setAttribute('type', 'date');
      titleInput.setAttribute('id', 'title');
      descriptionInput.setAttribute('id', 'description');
      dateInput.setAttribute('id', 'date');
      newTask.appendChild(submitButton);
      submitButton.classList.add('task-submit');
      submitButton.textContent = 'Confirm';
      submitButton.setAttribute('type', 'button');
      submitButton.setAttribute('id', 'task-submit');
    }
)}

  const confirmButton = () => {
    document.querySelector('#task-submit').addEventListener('click', () => {

    }
)}

  return {newTask, taskModal, confirmButton};
})();
















// let myArray = [];
// // this will work as intended but i have to use console log to see the array or object output. Also put object inside array with constructor probably
// document.querySelector('.plus-button').addEventListener('click', () => {
//   let person = '23';
//   myArray.push(person);
//   console.log(myArray);
