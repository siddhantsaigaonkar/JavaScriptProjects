let searchBox = document.getElementById("search-box");
let searchIcon = document.getElementById("searchIcon");
let apiKey = "fbb435454ac671e7796547fd63f5b4a2";
let api = `https://api.openweathermap.org/data/2.5/weather?q=`;

async function checkWeather(value) {
  const response = await fetch(api + value + `&appid=${apiKey}`+`&units=metric`);
  const data = await response.json();
  console.log(data);
  document.getElementById("city").innerText = data.name;
  document.getElementById("tempDeg").innerText = data.main.temp +"deg C";  
  document.getElementById("humidityPercent").innerText = `${data.main.humidity}%`
  document.getElementById("wind-speed").innerText = `${data.wind.speed}km/h` 
}

function clickHandler() {
  checkWeather(searchBox.value);
}
