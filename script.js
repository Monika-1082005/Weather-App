const url = 'https://weather-api-by-any-city.p.rapidapi.com/weather/';
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
		'x-rapidapi-key': '9654675e69msh9da0f9bdbe57627p1f8623jsn3cd96e0576dc',
		'x-rapidapi-host': 'weather-api-by-any-city.p.rapidapi.com'
	},
};
// Wrap your code in an async function
async function fetchData(city) {
    cityName.innerHTML = city;
    try {
        const response = await fetch(url + city, options);
        const result = await response.json();
        console.log(result);
        temp.innerHTML = result.current.temp_c
        humidity.innerHTML = result.current.humidity
        wind_speed.innerHTML = result.current.wind_mph

    } catch (error) {
        console.error(error);
    }
}

// Call the async function

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    fetchData(city.value);
})

fetchData("Mumbai")

