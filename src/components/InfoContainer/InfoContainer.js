import React from "react";
import "./InfoContainer.css";
import maxtemp from "../../weather-icons/maxtemp.png";
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
import partlyrainy from "../../weather-icons/partlyrainy.png";
import windyclear from "../../weather-icons/windyclear.png";
import visibility from "../../weather-icons/visibility.png";
import uv from "../../weather-icons/uv.png";
import moonphase from "../../weather-icons/moonphase.png";
import {formatDate, formats}  from '../../services/dates';


function InfoContainer({ weatherInfo }) {
  console.log(weatherInfo.day.condition.text);

  const condition = () => {
    if (weatherInfo.day.condition.text === "Partly cloudy") {
      return partlycloudy;
    } else if (weatherInfo.day.condition.text === "Overcast") {
      return cloudy;
    } else if (weatherInfo.day.condition.text === "Sunny") {
      return sunny;
    } else if (weatherInfo.day.condition.text === "Heavy rain") {
      return heavyrain;
    } else if (weatherInfo.day.condition.text === "Moderate rain") {
      return rain;
    } else if (weatherInfo.day.condition.text === "heavy snow showers") {
      return snow;
    } else if (weatherInfo.day.condition.text === "Patchy rain possible") {
      return partlyrainy;
    }
  };

  

  
    
    
 

  

  return !weatherInfo ? null : (
    <div className="block">
      {/*<div className="block-content">*/}

      {weatherInfo.date && (
        <div className="info heading">
          <p>
            The Date {formatDate(weatherInfo.date, formats.wdwd_dd_mm_yyyy)}
          </p>
        </div>
      )}

      {weatherInfo.day.condition.text && (
        <div className="info heading">
          <img src={condition()} />
          

          <p>{weatherInfo.day.condition.text}</p>
        </div>
      )}

      {weatherInfo.day.maxtemp_c && (
        <div className="info">
          <img src={maxtemp} width="80px" height="80px" />
          {weatherInfo.day.maxtemp_c}
        </div>
      )}
      {weatherInfo.day.mintemp_c && (
        <div className="info">
          <img src={mintemp} width="80px" height="80px" />
          {weatherInfo.day.mintemp_c}
        </div>
      )}

      {weatherInfo.day.daily_chance_of_rain !== 0 && (
        <div className="info">
          <img src={chanceofrain} width="80px" height="80px" />
          {weatherInfo.day.daily_chance_of_rain}
        </div>
      )}
      {weatherInfo.day.avghumidity && (
        <div className="info">
          <img src={humidity} width="80px" height="80px" />
          {weatherInfo.day.avghumidity}
        </div>
      )}
      {weatherInfo.astro.sunrise && (
        <div className="info">
          <img src={sunrise} width="80px" height="80px" />
          {weatherInfo.astro.sunrise}
        </div>
      )}
      {weatherInfo.astro.sunset && (
        <div className="info">
          <img src={sunset} width="80px" height="80px" />
          {weatherInfo.astro.sunset}
        </div>
      )}
      {weatherInfo.day.maxwind_kph && (
        <div className="info">
          <img src={windyclear} width="80px" height="80px" />
          {weatherInfo.day.maxwind_kph}
        </div>
      )}
      {weatherInfo.day.avgvis_km && (
        <div className="info">
          <img src={visibility} width="80px" height="80px" />
          {weatherInfo.day.avgvis_km}
        </div>
      )}
      {weatherInfo.day.uv && (
        <div className="info">
          <img src={uv} width="80px" height="80px" />
          {weatherInfo.day.uv}
        </div>
      )}
      {weatherInfo.astro.sunset && (
        <div className="info">
          <img src={moonphase} width="80px" height="80px" />
          <p>{weatherInfo.astro.moon_phase}</p>
        </div>
      )}
      {/*</div>*/}
    </div>
  );
}

export default InfoContainer;
