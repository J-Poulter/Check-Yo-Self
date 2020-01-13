class ToDoCard {
  constructor(ToDoCard) {
    this.title = ToDoCard.title;
    this.listId = ToDoCard.listId || generateListId();
    this.individualTasks = ToDoCard.individualTasks || [];
    this.isUrgent = ToDoCard.isUrgent || false;
    this.canDelete = ToDoCard.canDelete || false;
  }

  generateListId() {
    return Math.random().toString(36).slice(1, 4);
  }

  saveToStorage() {

  }

  deleteFromStorage() {

  }

  updateTask() {

  }

  updateToDo() {

  }
}
