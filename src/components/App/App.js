import './App.css';
import NavigationTool from "../NavigationTool/NavigationTool";
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  
  return (
    <div className="App">
      <NavigationTool onApiCall={setData} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
