# Check Yo'Self: Task List App

## Project Instructions

For this project, we were instructed to create an app which can create to-do lists through user input.  In the left column of the apps webpage there are two input fields, a task title field and a task item field.  The task title field is the input which will serve as the title of each to-do card and the task items are the individual steps or tasks involved in that particular to-do list.  After the user is satisfied with the title and items of the current to-do card they are working on, they can click the make task list button to generate a to-do card which will be added into the larger right column of the page and will appear as a nicely formatted card.  

## Functionality

When generating a card, the buttons are disabled by default until there is input in the appropriate fields.  So a card can't be generated until a task title and collection of task items is entered, the add task button is disabled until a task item is put into the input field, and the clear all button is enabled once there is input in any of those fields.  

![Interactive Area](https://user-images.githubusercontent.com/51523262/72415841-4f52a280-376d-11ea-8b77-d78b82231ec5.png)

If there are no cards currently generated on the page, the user will see a warning notice instructing them to create a task list as shown here.

![Warning Notice](https://user-images.githubusercontent.com/51523262/72415842-4f52a280-376d-11ea-9a2d-7aea7a23b32c.png)

Once a to-do list has been generated and appended to the page it will then save the data involved in localstorage so that it can be retrieved at a later time on page refresh.  It will appear as a card with the information inputs and two buttons at the bottom of the page, urgent and delete.  Clicking urgent will change the urgent property of the card as well as the cards styling to stand out more as an important to-do list.  The delete button is what will be used to remove the card but this button will be disabled until all of the task items or steps have been marked as complete.  You will notice an empty checkbox next to each item which when clicked, will mark that step as complete and fill in the box which a checkmark.  This will then update the data in localstorage.

![To-do List](https://user-images.githubusercontent.com/51523262/72415843-4f52a280-376d-11ea-93d7-3ef47ec3ed54.png)

![To-do List Urgent](https://user-images.githubusercontent.com/51523262/72415844-4f52a280-376d-11ea-8173-b5700f12859b.png)

At the top of the page in the heading, you will notice a search bar in the top right corner.  Any input entered into that field will automatically filter through the to-do cards to present only those cards whose title matches the input entered into the field.  You will see the webpage display of cards update accordingly as each key is entered.

![Search Bar](https://user-images.githubusercontent.com/51523262/72415847-511c6600-376d-11ea-8971-3cbad667e6f2.png)
