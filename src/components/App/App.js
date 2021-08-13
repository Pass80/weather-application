import './App.css';
import NavigationTool from "../NavigationTool/NavigationTool";
import { useState } from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';

function App() {
  const [data, setData] = useState(null);
  
  return (
    <div className="App">
      <NavigationTool onApiCall={setData} />
      {data  &&<InfoContainer weatherInfo ={data}/>}
      
    </div>
  );
}

export default App;
