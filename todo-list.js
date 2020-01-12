class ToDoCard {
  constructor() {
    this.title = ToDoCard.title;
    this.listId = ToDoCard.listId || generateListId();
    this.individualTasks = ToDoCard.individualTasks || [];
    this.isUrgent = ToDoCard.isUrgent || false;
    this.canDelete = ToDoCard.canDelete || false;
  }
}
