function countTodoList() {
  const length = todos.length;
  const done = todos.filter(todo => todo.checked === true).length;
  let percent = Math.floor(done / length * 100);
  if (isNaN(percent)) percent = 0;
  infoTotal.innerText = length;
  infoDone.innerText = done;
  infoPanding.innerText = length - done;
  infoAchivement.innerText = `${percent}`;
}

infoController.init();