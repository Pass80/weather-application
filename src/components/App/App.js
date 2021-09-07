import "./App.css";
import NavigationTool from "../NavigationTool/NavigationTool";
import { useState } from "react";
import InfoContainer from "../InfoContainer/InfoContainer";

function App() {
  const [data, setData] = useState(null);

 

  return (
    <div
      className="App"
      
    >
      <NavigationTool onApiCall={setData} />
      {data && (
        <div className="infos">
          {data.forecast.forecastday.map((day) => (
            <InfoContainer weatherInfo={day} key={day.date} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
