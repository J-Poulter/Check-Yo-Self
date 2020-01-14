class ToDoList {
  constructor(toDoCard) {
    this.title = toDoCard.title;
    this.listId = toDoCard.listId;
    this.individualTasks = toDoCard.individualTasks || [];
    this.isUrgent = toDoCard.isUrgent || false;
    this.canDelete = toDoCard.canDelete || false;
  }

  saveToStorage(currentCard, title) {
    localStorage.setItem(title, JSON.stringify(currentCard));
  }

  deleteFromStorage() {

  }

  updateTask() {

  }

  updateToDo() {

  }
}
