var generatedListTitle = document.querySelectorAll('.card-title-js');
var generatedListItem = document.querySelectorAll('.individual-list-item-js');
var itemCheckboxButton = document.querySelectorAll('.checkbox-js');
var markListUrgentButton = document.querySelectorAll('.urgent-button-js');
var deleteCardButton = document.querySelectorAll('.delete-button-js');
var pendingListItems = document.querySelectorAll('.pending-list-items-js');
var tempItemsCheckbox = document.querySelectorAll('.temp-items-checkbox-js');
var currentListItems = [];
var addListsNotice = document.querySelector('.add-lists-notice-js');
var searchButton = document.querySelector('.search-button-js');
var searchInputField = document.querySelector('.search-input-js');
var taskTitleInput = document.querySelector('.task-title-input-js');
var listItemsTempOutputArea = document.querySelector('.added-list-items-output-area-js');
var taskItemInput = document.querySelector('.task-item-input-js');
var addTaskItemButton = document.querySelector('.add-item-button-js');
var createTaskListButton = document.querySelector('.create-list-button-js');
var clearInputFieldsButton = document.querySelector('.clear-input-fields-button-js');
var filterByUrgencyButton = document.querySelector('.filter-urgency-button-js');
var taskListOutputArea = document.querySelector('.output-column-js');
var globalSelector = document.querySelector('body');
globalSelector.addEventListener('click', clickHandler);
globalSelector.addEventListener('input', enableButtons);
window.addEventListener('load', retrieveStorageAndCards);

addTaskItemButton.disabled = true;
createTaskListButton.disabled = true;
clearInputFieldsButton.disabled = true;
deleteCardButton.disabled = true;
markListUrgentButton.disabled = true;

function clickHandler() {
  if (event.target.classList.contains('create-list-button-js')) {
    createListHelper();
  }
  if (event.target.classList.contains('clear-input-fields-button-js')) {
    clearInputFields();
  }
  if (event.target.classList.contains('add-item-button-js')) {
    createTaskItemObjects();
  }
  if (event.target.classList.contains('temp-items-checkbox-js')) {
    removeTempListItem();
  }
}

function enableButtons() {
  addTaskItemButton.disabled = taskItemInput.value === '';
  clearInputFieldsButton.disabled = taskItemInput.value.length + taskTitleInput.value.length == 0;
  if (taskTitleInput.value && listItemsTempOutputArea.innerText != '') {
      createTaskListButton.disabled = false;
  } else {
      createTaskListButton.disabled = true
  }
}

function clearInputFields() {
  taskItemInput.value = '';
  taskTitleInput.value = '';
  listItemsTempOutputArea.innerHTML = '';
  currentListItems = [];
  enableButtons();
}

function toggleWarningDisplay() {
  if (localStorage.length == 0) {
    addListsNotice.classList.remove('hidden');
  }
  else {
    addListsNotice.classList.add('hidden');
  }
}

function createListHelper() {
  createListObject();
  createTaskList();
  clearInputFields();
}

function createTaskItemObjects() {
  var currentItem = new Task({
    taskDescription: taskItemInput.value,
    taskId: Date.now()
  })
  currentListItems.push(currentItem);
  taskItemInput.value = '';
  populateTempListItems(currentItem);
  enableButtons();
}

function createListObject() {
  var currentCard = new ToDoCard({
    title: taskTitleInput.value,
    listId: Date.now(),
    individualTasks: currentListItems
    })
  currentCard.saveToStorage(currentCard, currentCard.listId);
  toggleWarningDisplay();
}

function populateTempListItems(currentItem) {
    listItemsTempOutputArea.insertAdjacentHTML('beforeend',
    `<p class="pending-list-items pending-list-items-js">
    <img src="./check-yo-self-icons/delete.svg" id=${currentItem.taskId} class="checkbox temp-items-checkbox-js">
  ${currentItem.taskDescription}</p>
  `);
}

function removeTempListItem() {
  event.target.parentElement.remove();
  var itemToRemove = currentListItems.find(item => item.taskId == event.target.id);
  var tempItemIndex = currentListItems.indexOf(itemToRemove);
  currentListItems.splice(tempItemIndex, 1);
}

function createTaskList() {
  taskListOutputArea.insertAdjacentHTML('beforeend',
  `<div class="generated-todo-list">
    <h3 class="card-title-js">${taskTitleInput.value}</h3>
    <div class="generated-list-items-area">
      ${populateListItems()}
    </div>
    <div class="card-buttons-area">
      <div class="card-button-title-container">
        <input type="image" class="card-buttons urgent-button-js" src="./check-yo-self-icons/urgent.svg">
        <p class="card-button-titles">URGENT</p>
      </div>
      <div class="card-button-title-container">
        <input type="image" class="card-buttons delete-button-js" src="./check-yo-self-icons/delete.svg">
        <p class="card-button-titles">DELETE</p>
      </div>
    </div>
  </div>`);
  clearInputFields();
}

function populateListItems() {
  var tempTaskItemHTML = '';
  for (var i = 0; i < currentListItems.length; i++) {
    tempTaskItemHTML += `<p class="individual-list-item individual-list-item-js">
    <img src="./check-yo-self-icons/checkbox.svg" id=${currentListItems[i].taskId} class="checkbox checkbox-js">${currentListItems[i].taskDescription}</p>
  `
}
  return tempTaskItemHTML;
}



function retrieveStorageAndCards() {
  toggleWarningDisplay();
  for (var i = 0; i < localStorage.length; i ++) {
    var currentCard = JSON.parse(localStorage.getItem(localStorage.key(i)))
    populateCardFromStorage(currentCard);
  }
}

function populateCardFromStorage(currentCard) {
  taskListOutputArea.insertAdjacentHTML('beforeend',
  `<div class="generated-todo-list">
    <h3 class="card-title-js">${currentCard.title}</h3>
    <div class="generated-list-items-area">
      ${populateListItemsFromStorage(currentCard)}
    </div>
    <div class="card-buttons-area">
      <div class="card-button-title-container">
        <input type="image" class="card-buttons urgent-button-js" src="./check-yo-self-icons/urgent.svg">
        <p class="card-button-titles">URGENT</p>
      </div>
      <div class="card-button-title-container">
        <input type="image" data-id=${currentCard.listId} class="card-buttons delete-button-js" src="./check-yo-self-icons/delete.svg">
        <p class="card-button-titles">DELETE</p>
      </div>
    </div>
  </div>`);
}

function populateListItemsFromStorage(currentCard) {
  var tempTaskItemHTML = '';
  for (var i = 0; i < currentCard.individualTasks.length; i++) {
    tempTaskItemHTML += `<p class="individual-list-item individual-list-item-js">
    <img src="./check-yo-self-icons/checkbox.svg" data-id=${currentCard.individualTasks[i].taskId} class="checkbox checkbox-js">${currentCard.individualTasks[i].taskDescription}</p>
  `
}
  return tempTaskItemHTML;
}
