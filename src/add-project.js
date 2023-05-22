export {addProject};

const addProject = (() => {
  const openInput = () => {
    const modal = document.querySelector('#project-form');
      document.querySelector('.add-project').addEventListener('click', () => {
      modal.classList.remove('hidden');
    }
)}
    const closeForm = () => {
      const modal = document.querySelector('#project-form');
      document.querySelector('#cancel-button').addEventListener('click', () => {
        modal.classList.add('hidden');
      }
)}
    const submitProject = () => {
      const modal = document.querySelector('#project-form');
      document.querySelector('#add-button').addEventListener('click', () => {
        modal.classList.add('hidden');
      }
)}

      const addProjectArray = () => {
        let projectArray = [];
        document.querySelector('#add-button').addEventListener('click', () => {
          projectArray.push(document.querySelector('#project').value);
          console.log(projectArray);


        }
)}

return {openInput, closeForm, submitProject, addProjectArray};

})();
