class Task {
  constructor(ListItem) {
    this.taskId = ListItem.taskId || generateTaskId();
    this.isDone = ListItem.isDone || false;
    this.taskDescription = ListItem.taskDescription || '';
  }

  generateTaskId() {
    return Math.random().toString(36).slice(1, 4);
  }

}
