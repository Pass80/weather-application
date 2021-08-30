import apiKey from "./apiKey";

const api = (city) =>{
	return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
  ).then((response) => response.json());
}  

export default api;
