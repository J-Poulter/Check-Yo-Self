class ToDoList {
  constructor(toDoCard) {
    this.title = toDoCard.title;
    this.listId = toDoCard.listId;
    this.individualTasks = toDoCard.individualTasks || [];
    this.isUrgent = toDoCard.isUrgent || false;
    this.canDelete = toDoCard.canDelete || false;
  }

  saveToStorage(title, currentCard) {
    localStorage.setItem(title, JSON.stringify(currentCard));
  }

  deleteFromStorage(targetCard) {
    localStorage.removeItem(targetCard);
  }

  updateTask(title, currentCard) {
    localStorage.setItem(title, JSON.stringify(currentCard));
  }

  updateToDo(title, currentCard) {
    localStorage.setItem(title, JSON.stringify(currentCard));
  }
}
