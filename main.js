var generatedListTitle = document.querySelectorAll('.card-title-js');
var generatedListItem = document.querySelectorAll('.individual-list-item-js');
var itemCheckboxButton = document.querySelectorAll('.checkbox-js');
var markListUrgentButton = document.querySelectorAll('.urgent-button-js');
var deleteCardButton = document.querySelectorAll('.delete-button-js');
var pendingListItems = document.querySelectorAll('.pending-list-items-js');
var tempItemsCheckbox = document.querySelectorAll('.temp-items-checkbox-js');

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

function clickHandler() {

}

function enableButtons() {

}
