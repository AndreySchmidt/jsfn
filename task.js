function createNewTaskItem(taskSubject){
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';
  
  const label = document.createElement('label');
  label.textContent = taskSubject;
  label.className = 'subject';
  
  const editTaskInput = document.createElement('input');
  editTaskInput.type = 'text';
  editTaskInput.className = 'task-edit-input';
  
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'task-edit';
    
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'task-delete';
  
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(editTaskInput);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);
//  console.log(taskItem);
  bindEventsTaskItem(taskItem);
  
  return taskItem;
}

function bindEventsTaskItem(taskItem){
  const checkbox = taskItem.querySelector('.checkbox');
  checkbox.addEventListener('change', toggleTaskItem);
  
  const editBtn = taskItem.querySelector('button.task-edit');
  editBtn.addEventListener('click', editTaskItem);
  
  const deleteBtn = taskItem.querySelector('button.task-delete');
  deleteBtn.addEventListener('click', deleteTaskItem);
}

function toggleTaskItem(event){
//  const taskItem = event.target.parentNode;
  const taskItem = this.parentNode;
  taskItem.classList.toggle('done'); 
}

function editTaskItem(event){
  const taskItem = this.parentNode;
  const taskSubject = taskItem.querySelector('.subject');
  const editTaskInput = taskItem.querySelector('.task-edit-input');
  const isEditing = taskItem.classList.contains('editing');
  
  if(isEditing){
    taskSubject.textContent = editTaskInput.value;
    this.textContent = 'Edit';
  } else {
    editTaskInput.value = taskSubject.textContent;
    this.textContent = 'Save'; 
  }
  
  taskItem.classList.toggle('editing');
}

function deleteTaskItem(event){
  const taskItem = this.parentNode;
  const taskListGroup = document.getElementById('task-list-group');
//  console.log(taskListGroup);
  taskListGroup.removeChild(taskItem);
}

function addNewTaskToList(event){
  event.preventDefault();
  if(addNewTaskInput.value === '') return alert('Type task subject to add');

  const taskItem = createNewTaskItem(addNewTaskInput.value);
  const taskListGroup = document.getElementById('task-list-group');
//  console.l     og(taskListGroup);
  taskListGroup.appendChild(taskItem); 
}

const taskListGroup = document.getElementById('task-list-group');
const taskItemList = document.querySelectorAll('.task-item');

const addNewTaskForm = document.getElementById('task-form');
const addNewTaskInput = document.getElementById('task-input');

addNewTaskForm.addEventListener('submit', addNewTaskToList);



















































