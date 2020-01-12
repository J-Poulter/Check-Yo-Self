class Task {
  constructor(ListItem) {
    this.isDone = listItem.isDone || false;
    this.taskDescription = listItem.taskDescription || '';
  }
}
