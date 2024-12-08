window.onload = function(){

//our info
const lat = 43.65;
const lon = -79.38;
const apiKey = '17a8945ae8cd2277467789aa0e309b83';

//variables we need
let condition;
let ourLocation;
let temperature;

//elements form the page
let loc = document.getElementById('location');
let temp = document.getElementById('temperature');
let cond = document.getElementById('conditions');

//fetching the data
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    condition = data.weather[0].main;
    ourLocation = data.name;
    temperature = data.main.temp - 273.15;
    console.log(condition, ourLocation, temperature);

    //placing data on page
    loc.innerText = ourLocation;
    temp.innerText = `Current Temperature: ${temperature.toFixed(1)}°C`;
    cond.innerText = `Current Conditions: ${condition}`;
  })
  .catch(error => console.error('Error:', error));

}