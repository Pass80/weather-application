import React from "react";
import "./InfoContainer.css";
import maxtemp from '../../weather-icons/maxtemp.png';
import mintemp from "../../weather-icons/mintemp.png";
import chanceofrain from "../../weather-icons/chanceofrain.png";
import humidity from "../../weather-icons/humidity.png";
import sunrise from "../../weather-icons/sunrise.png";
import sunset from "../../weather-icons/sunset.png";
import partlycloudy from "../../weather-icons/partlycloudy.png";
import cloudy from "../../weather-icons/cloudy.png";
import sunny from "../../weather-icons/sunny.png";
import heavyrain from "../../weather-icons/heavyrain.png";
import rain from "../../weather-icons/rain.png";
import snow from "../../weather-icons/snow.png";






function InfoContainer({ weatherInfo}) {
  console.log(  weatherInfo.day.condition.text);

  const condition = ()=>{
    if (weatherInfo.day.condition.text === "Partly cloudy") {
      return <img src={partlycloudy} width="50px" height="50px" />;
    } else if (weatherInfo.day.condition.text === "Over cast") {
      return <img src={cloudy} width="50px" height="50px" />;
    } else if (weatherInfo.day.condition.text === "Sunny") {
      return <img src={sunny} width="50px" height="50px" />;
    } else if (weatherInfo.day.condition.text === "Heavy rain") {
      return <img src={heavyrain} width="50px" height="50px" />;
    } else if (weatherInfo.day.condition.text === "Moderate rain") {
      return <img src={rain} width="50px" height="50px" />;
    } else if (weatherInfo.day.condition.text === "heavy snow showers") {
      return <img src={snow} width="50px" height="50px" />;
    }
  }

  return !weatherInfo ? null : (
    <div className="block">
      <div className="block-content">
        {weatherInfo.date && (
          <div className="info">
            <span>The Date :</span>
            {weatherInfo.date}
          </div>
        )}
        {weatherInfo.day.maxtemp_c && (
          <div className="info">
            <img src={maxtemp} width="50px" height="50px" />
            {weatherInfo.day.maxtemp_c}
          </div>
        )}
        {weatherInfo.day.mintemp_c && (
          <div className="info">
            <img src={mintemp} width="50px" height="50px" />
            {weatherInfo.day.mintemp_c}
          </div>
        )}
        {weatherInfo.day.condition.text && (
          <div className="info">
            <span> {condition()} :</span>
            {weatherInfo.day.condition.text}
          </div>
        )}

        {weatherInfo.day.daily_chance_of_rain !== 0 && (
          <div className="info">
            <img src={chanceofrain} width="50px" height="50px" />
            {weatherInfo.day.daily_chance_of_rain}
          </div>
        )}
        {weatherInfo.day.avghumidity && (
          <div className="info">
            <img src={humidity} width="50px" height="50px" />
            {weatherInfo.day.avghumidity}
          </div>
        )}
        {weatherInfo.astro.sunrise && (
          <div className="info">
            <img src={sunrise} width="50px" height="50px" />
            {weatherInfo.astro.sunrise}
          </div>
        )}
        {weatherInfo.astro.sunset && (
          <div className="info">
            <img src={sunset} width="50px" height="50px" />
            {weatherInfo.astro.sunset}
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoContainer;
