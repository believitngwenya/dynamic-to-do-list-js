 document.addEventListener('DOMContentLoaded', function() {
            // Select DOM elements
            const addButton = document.getElementById('add-button');
            const taskInput = document.getElementById('task-input');
            const taskList = document.getElementById('task-list');
            const taskCount = document.getElementById('task-count');
            const emptyState = document.querySelector('.empty-state');
            
            // Load tasks from localStorage if available
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            
            // Function to update task count
            function updateTaskCount() {
                const count = tasks.length;
                taskCount.textContent = `${count} ${count === 1 ? 'task' : 'tasks'}`;
                
                // Show/hide empty state
                if (tasks.length === 0) {
                    emptyState.style.display = 'block';
                } else {
                    emptyState.style.display = 'none';
                }
            }
            
            // Function to save tasks to localStorage
            function saveTasks() {
                localStorage.setItem('tasks', JSON.stringify(tasks));
                updateTaskCount();
            }
            
            // Function to render tasks
            function renderTasks() {
                taskList.innerHTML = '';
                
                if (tasks.length === 0) {
                    taskList.appendChild(emptyState);
                    emptyState.style.display = 'block';
                } else {
                    emptyState.style.display = 'none';
                    tasks.forEach((task, index) => {
                        const taskItem = document.createElement('li');
                        taskItem.className = 'task-item';
                        
                        taskItem.innerHTML = `
                            <span class="task-text">${task}</span>
                            <button class="remove-btn">Remove</button>
                        `;
                        
                        // Add event listener to remove button
                        const removeBtn = taskItem.querySelector('.remove-btn');
                        removeBtn.addEventListener('click', function() {
                            tasks.splice(index, 1);
                            saveTasks();
                            renderTasks();
                        });
                        
                        taskList.appendChild(taskItem);
                    });
                }
                
                updateTaskCount();
            }
            
            // Function to add a new task
            function addTask() {
                // Get and trim the task text
                const taskText = taskInput.value.trim();
                
                // Validate input
                if (taskText === "") {
                    alert("Please enter a task!");
                    return;
                }
                
                // Add task to array
                tasks.push(taskText);
                
                // Save to localStorage and re-render
                saveTasks();
                renderTasks();
                
                // Clear input and focus
                taskInput.value = '';
                taskInput.focus();
            }
            
            // Add event listeners
            addButton.addEventListener('click', addTask);
            
            taskInput.addEventListener('keypress', function(event) {
                if (event.key === 'Enter') {
                    addTask();
                }
            });
            
            // Initial render
            renderTasks();
        });