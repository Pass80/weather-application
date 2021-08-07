import apiKey from "./apiKey";

const api = (city) =>{
	return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  ).then((response) => response.json());
}  

export default api;
