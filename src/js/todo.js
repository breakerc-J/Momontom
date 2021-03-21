const TODOS = "todos";

function toggleCheck(e) {
  const currentLabel = e.target;
  const li = currentLabel.parentNode.parentNode;
  const currentInput = li.children[0];
  const id = li.id;
  const currnetChecked = !currentInput.checked;
  const index = todos.findIndex(todo => todo.id === id);
  todos[index]["checked"] = currnetChecked;
  saveToDos();
}

function deleteTodo(e) {
  const currentBtn = e.target;
  const li = currentBtn.parentNode;
  todoList.removeChild(li);
  const deleteTodos = todos.filter(todo => todo.id !== li.id);
  todos = deleteTodos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function makeTodoObj(text, checked, id) {
  const todoObj = {
    checked: checked,
    text: text,
    id: id
  };
  todos.push(todoObj);
  saveToDos();
}

function paintTodoList(text, checked = false, id = UUIDv4()) {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  label.setAttribute("for", `${id}-checkbox`);
  label.innerHTML = `<i class="fas fa-check-square"></i>`;
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");
  checkbox.id = `${id}-checkbox`;
  checkbox.classList.add("btn__done");
  checkbox.checked = checked;
  span.classList.add("body__list-todo-text");
  deleteButton.classList.add("btn__delete");
  span.innerText = text;
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteTodo);
  label.addEventListener('click', toggleCheck);
  li.id = id;
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(deleteButton);

  todoList.appendChild(li);
  // saveToDos();
  makeTodoObj(text, checked, id);
}

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = todoInput.value;
  if (!currentValue) {
    alert("Please write a text");
    todoInput.focus();
    return false;
  }
  paintTodoList(currentValue);
  todoInput.value = "";
  infoController.init();
  return todos;
}

function loadStorage() {
  const loaded = localStorage.getItem(TODOS);
  if (loaded !== null) {
    const parseTodos = JSON.parse(loaded);
    parseTodos.forEach(todo => paintTodoList(todo.text, todo.checked, todo.id));
    return false;
  }
}

function init() {
  loadStorage();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
