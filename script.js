 document.addEventListener('DOMContentLoaded', function() {
            // Select DOM elements
            const addButton = document.getElementById('add-button');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
            const taskCount = document.getElementById('task-count');
            const emptyState = document.querySelector('.empty-state');
            
            // Function to add a new task
            function addTask() {
                // Get and trim the task text
                const taskText = taskInput.value.trim();
                
                // Validate input
                if (taskText === "") {
                    alert("Please enter a task!");
                    return;
                }
                
                // Create new task item
                const taskItem = document.createElement('li');
                taskItem.className = 'task-item';
                
                // Create task text element
                const taskTextElement = document.createElement('span');
                taskTextElement.className = 'task-text';
                taskTextElement.textContent = taskText;
                
                // Create remove button
                const removeButton = document.createElement('button');
                removeButton.className = 'remove-btn';
                removeButton.textContent = 'Remove';
                
                // Add click event to remove button
                removeButton.onclick = function() {
                    taskList.removeChild(taskItem);
                    updateTaskCount();
                    
                    // Show empty state if no tasks left
                    if (taskList.children.length === 1) {
                        emptyState.style.display = 'block';
                    }
                };
                
                // Append elements to task item
                taskItem.appendChild(taskTextElement);
                taskItem.appendChild(removeButton);
                
                // Append task item to task list
                taskList.appendChild(taskItem);
                
                // Hide empty state
                emptyState.style.display = 'none';
                
                // Clear input and focus
                taskInput.value = '';
                taskInput.focus();
                
                // Update task count
                updateTaskCount();
            }
            
            // Function to update task count
            function updateTaskCount() {
                const count = taskList.querySelectorAll('.task-item').length;
                taskCount.textContent = `${count} ${count === 1 ? 'task' : 'tasks'}`;
            }
            
            // Add event listeners
            addButton.addEventListener('click', addTask);
            
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
            
            // Add a sample task on page load
            taskInput.value = "Learn JavaScript DOM manipulation";
            addTask();
        });
