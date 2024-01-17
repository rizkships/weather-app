
const searchInput = document.getElementById('searchInput')
const fetchButton = document.getElementById('fetchWeather')
const temperature = document.getElementById('temp-div') 
const description = document.getElementById('.description')


async function fetchTemperature() {
    const searchKeyword = searchInput.value 

try {          
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchKeyword}&appid=08f9e3eaad58ef9631cded2e59afad6e`)
    if (!response.ok) {
        throw new Error(`Failed to fetch. status: ${response.status}`);
    }


   const responseData = await response.json();
   console.log(responseData)
   const cityName = responseData.name 
   temperature.textContent = Math.round(responseData.main.temp - 273.15)
   description.textContent = responseData.weather[0].description
  
   const temperatureHTML = `<p>${temperature}°C</p>`
   const weatherHTML = `
   <p>${cityName}</p>
   <p>${description}</p>`

   temperature.innerHTML = temperatureHTML;
   description.innerHTML = weatherHTML;
   
   showImage()
   
    }
catch(error) {
        console.log('Error fetching info:', error)
    }
}

fetchButton.addEventListener('click', fetchTemperature);




