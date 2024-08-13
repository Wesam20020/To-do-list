document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const listItem = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
              listItem.classList.add('completed');
          } else {
              listItem.classList.remove('completed');
          }
      });

      const taskTextSpan = document.createElement('span');
      taskTextSpan.textContent = taskText;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.className = 'editButton';
      editButton.addEventListener('click', function() {
          const taskText = taskTextSpan.textContent;
          const inputField = document.createElement('input');
          inputField.type = 'text';
          inputField.value = taskText;
          taskTextSpan.replaceWith(inputField);
          inputField.focus();

          const saveButton = document.createElement('button');
          saveButton.textContent = 'Save';
          saveButton.className = 'saveButton';
          saveButton.addEventListener('click', function() {
              const newTaskText = inputField.value.trim();
              if (newTaskText !== '') {
                  inputField.replaceWith(taskTextSpan);
                  taskTextSpan.textContent = newTaskText;
                  listItem.appendChild(editButton);
                  listItem.appendChild(deleteButton);
              }
          });

          listItem.appendChild(saveButton);
          listItem.removeChild(editButton);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'deleteButton';
      deleteButton.addEventListener('click', function() {
          taskList.removeChild(listItem);
      });

      listItem.appendChild(checkbox);
      listItem.appendChild(taskTextSpan);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      taskInput.value = '';
  }
});
