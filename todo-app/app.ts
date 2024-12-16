const API_URL = "http://localhost:5000/todos"; 


async function fetchTodos() {
  try {
    const response = await fetch(API_URL);
    const todos = await response.json();
    const todoList = document.getElementById("todo-list") as HTMLElement;
    todoList.innerHTML = ""; 

    todos.forEach((todo: { id: string; name: string }, index: number) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${todo.name}</td>
        <td class="actions">
          <button class="edit" onclick="editTodo('${todo.id}', '${todo.name}')">✏️</button>
          <button class="delete" onclick="deleteTodo('${todo.id}')">🗑️</button>
        </td>
      `;
      todoList.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}


async function addTodo() {
  const taskInput = document.getElementById("task-input") as HTMLInputElement; 
  const name = taskInput.value.trim();
  if (!name) return alert("Name cannot be empty");

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    taskInput.value = ""; 
    fetchTodos(); 
  } catch (error) {
    console.error("Error adding todo:", error);
  }
}


async function editTodo(id: string, oldName: string) {
  const newName = prompt("Edit Name:", oldName);
  if (newName) {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName }),
      });
      fetchTodos(); 
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  }
}


async function deleteTodo(id: string) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    fetchTodos(); 
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
}


fetchTodos();

