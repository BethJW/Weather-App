let currentTime = new Date();

function formatDate(date) {
  let months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let month = months[date.getMonth()];
  let currentDate = date.getDate();

  let formattedDate = `${currentDate}/${month}`;
  return formattedDate;
}
let date = document.querySelector("#currentDate");
date.innerHTML = formatDate(currentTime);

//time

function formatTime(time) {
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hour < 10) {
    hour = `0${hour}`;
  }
  let formattedTime = `${hour}:${minutes}`;
  return formattedTime;
}

let time = document.querySelector("#time");
time.innerHTML = formatTime(currentTime);

//search
function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp");
  let unit = document.querySelector("#main-unit");
  temp.innerHTML = `${temperature}${unit.outerHTML}`;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let h1 = document.querySelector("h1");
  if (searchInput.value !== "") {
    h1.innerHTML = `${searchInput.value}`;
    let apiKey = "1e537020b3fef162b687ec30dc54d08f";
    let city = searchInput.value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
