//1
const form = document.querySelector("#city-search");
const header = document.querySelector("h1");
const input = document.querySelector("#city-input");
const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
const degree = document.querySelector("#degree");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  header.innerHTML = input.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then((res) => {
    degree.innerHTML = res.data.main.temp;
  });
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
