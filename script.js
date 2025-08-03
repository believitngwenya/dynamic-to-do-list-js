// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements using document.getElementById
  const addButton = document.getElementById('Add Task');   // "Add Task" button
  const taskInput = document.getElementById('task-input'); // Input field for entering tasks
  const taskList  = document.getElementById('task-list');  // Unordered list to display tasks
  const addButton = document.getElementById('add-task');

  // Define the function to add a new task
  function addTask() {
    // Get the trimmed text from the input field
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add click event to remove the task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the button to the list item, and the item to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Add event listener to the input field for Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally, call addTask here if you want a default task on load
  // addTask();
});

