# To-Do List App
## Description
This To-Do List App allows users to add, check off, and delete tasks. It stores tasks in local storage, ensuring they persist even after refreshing the page.

## Features
Add new tasks to the list.
Mark tasks as completed.
Delete tasks from the list.
Data persistence using local storage.

## Usage
Type a task in the input box.
Click the "Add" button to add the task to the list.
Click on a task to mark it as completed.
Click the "×" icon to delete a task.

## Code Overview
HTML Structure: Contains an input box, a button, and a list container for tasks.
JavaScript Functionality:
addTask(): Adds a new task to the list.
listCountainer.addEventListener(): Handles task completion and deletion.
saveData(): Saves the current list to local storage.
showTask(): Loads tasks from local storage on page load.