// const getElement = (id) => document.getElementById("learnMoreButton");
// EventListener("click", getElement, () => {
//     // redirect to more info
//     window.location.href = "forcaster.html";    
    
// })





const APIkey = '5ba0a33daa717fc484cf26dc71a137b4';


// DOM Elements

const currentWeather = document.getElementById('currentWeatherCard'); 

const cardHeader = document.getElementById('cardHeader'); 
const tempSection = document.getElementById('tempSection'); 
const cardFooter = document.getElementById('cardFooter'); 

const weatherCard = document.getElementById('weatherCard'); 
const weatherCardHeader = document.getElementById('weatherCardHeader'); 
const weatherTempSection = document.getElementById('weatherTempSection'); 
const weatherCardFooter = document.getElementById('weatherCardFooter');

const cityInput = document.getElementById('cityInput');
const btn = document.querySelector('button');

async function getCurrentWeather(){
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Nairobi&appid=${APIkey}&units=metric`);
        let data = await response.json();

        // card Header
        cardHeader.innerHTML = `
        <h3 id="city">${data.name},<span>${data.sys.country}</span></h3>
        <p id="description">${data.weather[0].description}</p>`;

        // temp section
        tempSection.innerHTML = `
        <p id="temp">${data.main.temp}°C</p>
        <p id="feelsLike">Feels like ${data.main.feels_like}°C</p>
        `;

        // card footer
        cardFooter.innerHTML = `
        <div id="humidity">
            <p>Humidity</p>
            <p>${data.main.humidity}%</p>
        </div>
        <div id="windSpeed">
            <p>Wind Speed</p>
            <p>${data.wind.speed} m/s</p>
        </div>
        <div id='visibility'>
            <p>Visibility</p>
            <p>${data.visibility / 1000} km</p>
        </div>
        `;

    } catch(error) {
        console.error(error)
    }
}
getCurrentWeather()


async function getWeatherByCity(city){
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
        let data = await response.json();
        weatherCard.style.display = 'block';

        // card Header
        weatherCardHeader.innerHTML = `
        <h3 id="city">${data.name},<span>${data.sys.country}</span></h3>
        <p id="description">${data.weather[0].description}</p>`;

        // temp section
        weatherTempSection.innerHTML = `
        <p id="temp">${data.main.temp}°C</p>
        <p id="feelsLike">Feels like ${data.main.feels_like}°C</p>
        `;  

        // card footer  
        weatherCardFooter.innerHTML = `
        <div id="humidity">
            <p>Humidity</p>
            <p>${data.main.humidity}%</p>
        </div>
        <div id="windSpeed">
            <p>Wind Speed</p>
            <p>${data.wind.speed} m/s</p>
        </div>
        <div id='visibility'>
            <p>Visibility</p>
            <p>${data.visibility / 1000} km</p>
        </div>
        `;


    } catch(error) {
        console.error(error)
    }
}



