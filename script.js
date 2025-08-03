document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from Local Storage and render them
  loadTasks();

  // Function to load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // Don't save again when loading
  }

  // Function to save tasks to Local Storage
  function saveTasksToLocalStorage() {
    const tasks = [];
    const listItems = taskList.querySelectorAll('li');
    listItems.forEach(li => {
      const taskText = li.firstChild.textContent; // Only the task text, not the button
      tasks.push(taskText);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to add a new task (or load one)
  function addTask(taskText, save = true) {
    // If taskText is empty (and we're not loading), read from input
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    // Ignore empty tasks
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
      saveTasksToLocalStorage(); // Update Local Storage
    };

    // Add button to list item and list item to list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    // Save task to Local Storage if needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // Event listener for "Add Task" button
  addButton.addEventListener('click', () => addTask());

  // Event listener for "Enter" key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
