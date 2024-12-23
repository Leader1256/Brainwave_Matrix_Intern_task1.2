
const taskInput = document.getElementById('taskInput');
const timeInput = document.getElementById('timeInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const taskTime = timeInput.value;

  if (taskText && taskTime) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');


    const taskContent = document.createElement('div');
    taskContent.innerHTML = `
      <span class="task-text">${taskText}</span>
      <span class="task-time">${taskTime}</span>
    `;

 
    const taskButtons = document.createElement('div');
    taskButtons.classList.add('task-buttons');

   
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      const newTaskText = prompt('Edit Task:', taskText);
      const newTaskTime = prompt('Edit Time:', taskTime);

      if (newTaskText) taskContent.querySelector('.task-text').textContent = newTaskText;
      if (newTaskTime) taskContent.querySelector('.task-time').textContent = newTaskTime;
    });

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', () => {
      taskItem.classList.add('completed');
      completeButton.textContent = 'Completed';
      completeButton.disabled = true;
      editButton.style.display = 'none';
    });

 
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    taskButtons.append(editButton, completeButton, deleteButton);
    taskItem.append(taskContent, taskButtons);
    taskList.appendChild(taskItem);

   
    taskInput.value = '';
    timeInput.value = '';
  } else {
    alert('Please enter a task and time!');
  }
});
