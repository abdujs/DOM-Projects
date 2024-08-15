# To-Do List App
## Description
This To-Do List App allows users to add, check off, and delete tasks. It stores tasks in local storage, ensuring they persist even after refreshing the page.

## Features
Add new tasks to the list.<br>
Mark tasks as completed.<br>
Delete tasks from the list.<br>
Data persistence using local storage.<br>

## Usage
Type a task in the input box.<br>
Click the "Add" button to add the task to the list.<br>
Click on a task to mark it as completed.<br>
Click the "×" icon to delete a task.

## Code Overview
HTML Structure: Contains an input box, a button, and a list container for tasks.<br>
JavaScript Functionality:<br>
addTask(): Adds a new task to the list.<br>
listCountainer.addEventListener(): Handles task completion and deletion.<br>
saveData(): Saves the current list to local storage.<br>
showTask(): Loads tasks from local storage on page load.