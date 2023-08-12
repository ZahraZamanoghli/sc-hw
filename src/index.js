//1
const form = document.querySelector("#city-search");
const header = document.querySelector("h1");
const input = document.querySelector("#city-input");
const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
const degree = document.querySelector("#degree");
const toggle = document.querySelector("#toggle");
const desc = document.querySelector("#desc");
const humidity = document.querySelector("#humidity");
const speed = document.querySelector("#speed");
const icon = document.querySelector("#icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  header.innerHTML = input.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then((res) => {
    degree.innerHTML = Math.round(res.data.main.temp);
    desc.innerHTML = res.data.weather[0].description;
    humidity.innerHTML = res.data.main.humidity;
    speed.innerHTML = Math.round(res.data.wind.speed * 3.6);
    icon.innerHTML = `<img
          src="http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png"
          alt=""
          width="42"
        />`;
  });
  toggle.innerHTML = "C";
});

//2
const time = document.querySelector("#time");
const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

time.innerHTML = `${days[now.getDay()]} ${now.getHours()}:${
  now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes()
}`;

// bonus
const btn = document.querySelector("#curr-loc");
btn.addEventListener("click", getCurrLoc);

function getCurrLoc() {
  console.log(
    navigator.geolocation.getCurrentPosition(cb, cb, { timeout: 10000 })
  );
}

function cb(e) {
  console.log(e);
}

function toggleFunc() {
  let unit = document.getElementById("toggle");

  if (unit.innerHTML == "C") {
    unit.innerHTML = "F";
    degree.innerHTML = Math.round((parseInt(degree.innerHTML) * 9) / 5 + 32);
  } else {
    unit.innerHTML = "C";
    degree.innerHTML = Math.round(((parseInt(degree.innerHTML) - 32) * 5) / 9);
  }
}

toggle.addEventListener("click", toggleFunc);
