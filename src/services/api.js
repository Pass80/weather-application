import apiKey from "./apiKey";
import convertToDate from "./dates";

const api = (city) => {
  
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
  )
    .then((response) => response.json())
    .then((response) => {
      return {
        ...response,
        forecast: { forecastday: response.forecast.forecastday.map((item,index) => {
          
          return { ...item, date: convertToDate(item.date) };
        }) },
      };
    });
};

export default api;
