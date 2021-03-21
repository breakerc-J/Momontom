const greetingObj = {
  user: "username",
};
const ACTIVE = "active";

function saveUsename(username) {
  localStorage.setItem(greetingObj.user, username);
}

function handleSubmit(e) {
  e.preventDefault();
  popup.classList.remove(ACTIVE);
  const username = popupInput.value;
  if (!username) {
    alert('Please write a text')
    todoInput.focus();
    return false;
  }
  paintGreetingUser(username);
  saveUsename(username);
}

function getUsername() {
  popup.classList.add(ACTIVE);
  popupInput.focus();
  popupForm.addEventListener("submit", handleSubmit);
}

function loadUsername() {
  const loaded = localStorage.getItem(greetingObj.user);
  if (loaded !== null) {
    paintGreetingUser(loaded);
    return false;
  } else {
    getUsername();
  }
}

function init() {
  loadUsername();
  loadEmoji();
  hourlyGreetings();
}

init();
