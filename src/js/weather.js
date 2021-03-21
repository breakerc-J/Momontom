const COORDS = 'coords';
const API_KEY = '55900f672924fe463c8656c8ba77ccc6';

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
  .then(response => response.json())
  .then(json => {
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText=`${temperature}℃ @${place}`;
  })
}

function saveLocation(locationObj) {
  localStorage.setItem(COORDS, JSON.stringify(locationObj))
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const locationObj = {
    latitude,
    longitude
  }
  saveLocation(locationObj);
  getWeather(latitude, longitude);
}

function handleGeoError() {
  console.log('Can not access geo locaiton');
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords)
    getWeather(parseCoords.latitude, parseCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init();