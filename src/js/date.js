const dateObj = {
  day:['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  month:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
}

function getTodayDate() {
  const today = new Date();
  const dayOfWeek = dateObj.day[today.getDay()];
  const day = today.getDate();
  const month = dateObj.month[today.getMonth()];
  date.innerText = `
    ${dayOfWeek},${day}th, ${month}
  `
}

function init() {
  getTodayDate();
}

init()