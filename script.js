
const searchInput = document.getElementById('searchInput')
const fetchButton = document.getElementById('fetchWeather')
const temperature = document.querySelector('temperature') 
const description = document.querySelector('description')

async function fetchTemperature() {
    const searchKeyword = searchInput.value 

    try {
const response = fetch(`http://api.weatherapi.com/v1/current.json?key=85a9aed9412947e9b68160302240801&q=${searchKeyword}&aqi=no`, {mode:'cors'})
    if (!response.ok) {
        throw new Error(`Failed to fetch. status: ${response.status}`);
    }

    const responseData = await response.json();
   temperature.src = responseData.location.current.temp_c
    }
    catch(error) {
        console.log('Error fetching imgage:', error)
    }
}

fetchTemperature()

fetchButton.addEventListener('click', fetchTemperature);




