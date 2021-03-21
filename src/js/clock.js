function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  hourMinutes.innerHTML = `
    ${hours < 10? `0${hours}`:hours}:${minutes < 10? `0${minutes}`:minutes}
  `;
}

function init() {
  setInterval(getCurrentTime,1000);
}

init()