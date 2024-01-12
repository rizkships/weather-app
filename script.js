
const searchInput = document.getElementById('searchInput')
const fetchButton = document.getElementById('fetchWeather')
const temperature = document.querySelector('.temperature') 
const description = document.querySelector('.description')






async function fetchTemperature() {
    const searchKeyword = searchInput.value || 'London'

    try {           /* `http://api.weatherapi.com/v1/current.json?key=85a9aed9412947e9b68160302240801&q=Egypt&aqi=no` , {mode:'cors'}*/
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchKeyword}&appid=08f9e3eaad58ef9631cded2e59afad6e`)
    if (!response.ok) {
        throw new Error(`Failed to fetch. status: ${response.status}`);
    }


    const responseData = await response.json();
    console.log(responseData)
   temperature.textContent = Math.round(responseData.main.temp - 273.15)
   description.textContent = responseData.weather[0].description
    }
    catch(error) {
        console.log('Error fetching info:', error)
    }
}

fetchTemperature()

fetchButton.addEventListener('click', fetchTemperature);


/* `https://api.openweathermap.org/data/2.5/weather?q=${searchKeyword}&appid={08f9e3eaad58ef9631cded2e59afad6e}`*/
 
/* temperature.src = responseData.current.condition.temp_c */

