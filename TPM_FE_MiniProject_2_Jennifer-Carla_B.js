document.getElementById('add-todo').addEventListener('click', function() {
    const inputField = document.getElementById('todo-input');
    const todoText = inputField.value;

    if (todoText) {
        const todoList = document.getElementById('todo-list');
        
        const todoItem = document.createElement('li');
        todoItem.className = 'todo-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        checkbox.addEventListener('change', function() {
            todoItem.classList.toggle('completed');
        });

        const textNode = document.createTextNode(todoText);
        
        const deleteBtn = document.createElement('span');
        deleteBtn.innerHTML = '❌';
        deleteBtn.className = 'delete-btn';
        
        deleteBtn.addEventListener('click', function() {
            todoList.removeChild(todoItem);
        });

        todoItem.appendChild(checkbox);
        todoItem.appendChild(textNode);
        todoItem.appendChild(deleteBtn);
        
        todoList.appendChild(todoItem);
        
        inputField.value = ''; // Clear the input field
    }
});