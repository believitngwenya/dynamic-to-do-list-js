document.addEventListener('DOMContentLoaded', function () {
  // Select elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // ✅ Use classList.add to assign the 'remove-btn' class
    removeButton.classList.add('remove-btn');

    // Add event listener to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, and li to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  } else {
    alert('Please enter a task.');
  }
}
  // Click event for "Add Task" button
  addButton.addEventListener('click', addTask);

  // Pressing Enter in the input field also adds a task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: run addTask on load (not required unless you want default tasks)
  // addTask();
});

