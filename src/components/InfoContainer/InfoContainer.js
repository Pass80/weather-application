import React from "react";
import './InfoContainer.css'

function InfoContainer({ weatherInfo }) {

  const current = weatherInfo.current;
  
  
    return (
     !current ? null :
    <>
      {current.condition.text && (
        <div className="info">{current.condition.text}</div>
      )}

      {current.temp_c && (
        <div className="info">{current.temp_c}</div>
      )}
      {current.humidity && (
        <div className="info">{current.humidity}</div>
      )}
      {current.wind_dir && (
        <div className="info">{current.wind_dir}</div>
      )}
      {current.wind_kph && (
        <div className="info">{current.wind_kph}</div>
      )}
      
    </>
  );
}

export default InfoContainer;
