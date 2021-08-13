import apiKey from "./apiKey";

const api = (city) =>{
	return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`
  ).then((response) => response.json());
}  

export default api;
