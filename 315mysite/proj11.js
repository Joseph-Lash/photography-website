
document.addEventListener("DOMContentLoaded", () => {
    fetchData(); // Fetch weather data when the page loads
});

async function fetchData() {

    try {

        const apiURL = "";
        // Correct coordinates for Lynchburg, VA + API key + units in Fahrenheit

        const response = await(fetch(apiURL)); // Fetch data from the API

        if (!response.ok) {
            throw new Error('Could not fetch weather data');
        }

        const data = await response.json(); // Convert the response to JSON
        console.log(data);

        // Extract weather data
        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;
        const humidity = data.main.humidity;

        // Update the HTML content dynamically
        const weatherContainer = document.getElementById("weatherInfo");
        weatherContainer.innerHTML = '';
        weatherContainer.innerHTML = `
            <h3>Weather in Lynchburg, VA</h3>
            <p><strong>Temperature:</strong> ${temperature} &degF</p>
            <p><strong>Conditions:</strong> ${weatherDescription}</p>
            <p><strong>Humidity:</strong> ${humidity}%</p>`

    }
    catch(error){ // Log error to console and display error message
        console.error(error);
        const weatherContainer = document.getElementById("weatherInfo");
        weatherContainer.innerHTML = `<p>Failed to fetch weather data. Please try again later.</p>`;
    }
}
