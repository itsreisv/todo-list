import { el } from "date-fns/locale";
import { Project } from "./projects";
import { Task } from "./tasks";

export function newProjectModal() {
  const newProjectButton = document.querySelector('.projects-button');
  const dynamicProjects = document.querySelector('.dynamic-projects')
  newProjectButton.addEventListener('click', () => {
    const newDiv = document.createElement('div')
    const newProjName = document.createElement('input');
    const submitButton = document.createElement('button')
    submitButton.setAttribute('type', 'button')
    submitButton.textContent = 'Submit'
    submitButton.classList.add('submit-proj')
    newProjName.classList.add('proj-name')
    newDiv.classList.add('random-div')
    newDiv.appendChild(newProjName)
    newDiv.appendChild(submitButton)
    dynamicProjects.insertBefore(newDiv, dynamicProjects.childNodes[1])
  })
}

export function projectSubmit() {
  document.addEventListener('click', () => {
    const target = event.target.closest('.submit-proj')
    if (target) {
      const nameInput = document.querySelector('.proj-name').value
      let newProject = new Project(nameInput)
      console.log(newProject)
      
      const randomDiv = document.querySelector('.random-div');
      const inputBar = document.querySelector('.proj-name');
      const submitBtn = document.querySelector('.submit-proj');
      inputBar.remove();
      submitBtn.remove();
      randomDiv.remove();

      const dynamicProjects = document.querySelector('.dynamic-projects')
      const newButton = document.createElement('button');
      const buttonImg = document.createElement('img');
      const newP = document.createElement('p');
      buttonImg.classList.add('sidebar-icon')
      newButton.classList.add('new-button')
      newButton.classList.add('projects-button')
      buttonImg.src = '../src/images/list.svg'
      newP.textContent = nameInput
      newButton.appendChild(buttonImg)
      newButton.appendChild(newP)
      dynamicProjects.insertBefore(newButton, dynamicProjects.childNodes[1])
    }
  })
}

export function projectHeader() {
  document.addEventListener('click', () => {
    const target = event.target.closest('.new-button')
    if (target) {
      const header = document.querySelector('.gen-title');
      header.textContent = target.childNodes[1].textContent
    }
  })
}