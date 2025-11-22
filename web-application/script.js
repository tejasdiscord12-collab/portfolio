// Set current date
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);
    
    // Navigation functionality
    setupNavigation();
    
    // Modal functionality
    setupModal();
    
    // Task functionality
    setupTasks();
});

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
}

// Modal functionality
function setupModal() {
    const modal = document.getElementById('add-task-modal');
    const addTaskBtn = document.getElementById('add-task-btn');
    const closeButtons = document.querySelectorAll('.close-modal, .cancel-btn');
    const addTaskForm = document.getElementById('add-task-form');
    
    // Open modal
    addTaskBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    
    // Close modal
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle form submission
    addTaskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const title = document.getElementById('task-title').value;
        const project = document.getElementById('task-project').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;
        
        // Create new task element
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-check">
                <input type="checkbox">
            </div>
            <div class="task-content">
                <h4>${title}</h4>
                <p class="task-project">${project}</p>
            </div>
            <div class="task-due">
                <span class="due-date">${formatDueDate(dueDate)}</span>
            </div>
            <div class="task-priority ${priority}">
                <span>${priority.charAt(0).toUpperCase() + priority.slice(1)}</span>
            </div>
            <div class="task-actions">
                <button class="action-btn edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="action-btn delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        // Add to tasks container
        document.querySelector('.tasks-container').prepend(taskItem);
        
        // Reset form and close modal
        addTaskForm.reset();
        modal.style.display = 'none';
        
        // Add event listeners to new buttons
        setupTaskActions(taskItem);
        
        // Update task count
        updateTaskCount();
    });
}

// Format due date for display
function formatDueDate(dateString) {
    const today = new Date();
    const dueDate = new Date(dateString);
    
    // Check if due today
    if (dueDate.toDateString() === today.toDateString()) {
        return 'Today';
    }
    
    // Check if overdue
    if (dueDate < today) {
        const diffTime = Math.abs(today - dueDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays} days ago`;
    }
    
    // Future date
    return dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Task functionality
function setupTasks() {
    // Add event listeners to existing task actions
    document.querySelectorAll('.task-item').forEach(taskItem => {
        setupTaskActions(taskItem);
    });
    
    // Add event listeners to checkboxes
    document.querySelectorAll('.task-check input').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskItem = this.closest('.task-item');
            const dueDateSpan = taskItem.querySelector('.due-date');
            
            if (this.checked) {
                dueDateSpan.textContent = 'Completed';
                dueDateSpan.className = 'due-date completed';
            } else {
                // Reset to original due date (simplified for demo)
                dueDateSpan.textContent = 'Today';
                dueDateSpan.className = 'due-date';
            }
            
            // Update task count
            updateTaskCount();
        });
    });
    
    // Filter functionality
    document.getElementById('status-filter').addEventListener('change', filterTasks);
    document.getElementById('sort-filter').addEventListener('change', sortTasks);
}

// Setup actions for a task item
function setupTaskActions(taskItem) {
    // Delete button
    const deleteBtn = taskItem.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to delete this task?')) {
                taskItem.remove();
                updateTaskCount();
            }
        });
    }
    
    // Edit button (simplified for demo)
    const editBtn = taskItem.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            alert('Edit functionality would open a modal to edit the task details.');
        });
    }
}

// Filter tasks by status
function filterTasks() {
    const filterValue = document.getElementById('status-filter').value;
    const taskItems = document.querySelectorAll('.tasks-container .task-item');
    
    taskItems.forEach(item => {
        const dueDateSpan = item.querySelector('.due-date');
        const dueDateText = dueDateSpan.textContent.toLowerCase();
        
        if (filterValue === 'all') {
            item.style.display = 'flex';
        } else if (filterValue === 'completed' && dueDateText === 'completed') {
            item.style.display = 'flex';
        } else if (filterValue === 'pending' && dueDateText !== 'completed') {
            item.style.display = 'flex';
        } else if (filterValue === 'overdue' && dueDateSpan.classList.contains('overdue')) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Sort tasks (simplified for demo)
function sortTasks() {
    // In a real application, this would sort the tasks based on the selected criteria
    alert('Sorting functionality would rearrange the tasks based on the selected criteria.');
}

// Update task count
function updateTaskCount() {
    // In a real application, this would calculate the actual counts
    // For this demo, we'll just update with sample values
    document.getElementById('total-tasks').textContent = '12';
    document.getElementById('completed-tasks').textContent = '5';
    document.getElementById('pending-tasks').textContent = '4';
    document.getElementById('overdue-tasks').textContent = '3';
}