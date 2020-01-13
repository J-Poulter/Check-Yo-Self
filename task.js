class Task {
  constructor(listItem) {
    this.taskId = listItem.taskId;
    this.isDone = listItem.isDone || false;
    this.taskDescription = listItem.taskDescription || '';
  }

}
