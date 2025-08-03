// Select DOM elements
  const addButton = document.getElementById('add-task'); // "Add Task" button
  const taskInput = document.getElementById('task-input'); // Input field for task
  const taskList = document.getElementById('task-list'); // UL element to hold tasks

  // Function to add a new task to the list
  function addTask() {
    // Get the trimmed value from the input field
    const taskText = taskInput.value.trim();

    // Alert the user if the input is empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new list item element for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button for the task
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // When the remove button is clicked, remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item, then append the list item to the list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Add click event listener to the "Add Task" button
  addButton.addEventListener('click', addTask);

  // Allow task addition by pressing the Enter key in the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally call addTask on DOMContentLoaded to initialize with a sample task (not required)
  // addTask(); // Uncomment if you want to auto-add a default task on load
});
