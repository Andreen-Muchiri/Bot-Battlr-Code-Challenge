import React, {useEffect , useState} from "react";
import BotsPage from "./BotsPage";

function App() {
 //useState...
  const [botData , setBotData] = useState([]);
  const[viewBotData , setViewBotData]= useState([false]);

  //useEffect...
  //fetch data using GET method 
  useEffect(() => {
    fetch("http://localhost:8002/bots")
        .then((resp) => resp.json())
        .then((bots) => {
            console.log(bots);
            setBotData(bots);
        })
       .catch((error) => {
            console.log(error.message);
        });
}, [viewBotData]);


  return (
    <div className="App">
      <BotsPage 
      botData = {botData}
      setBotData = {setBotData}
      setViewBotData={setViewBotData} 
      />
    </div>
  );
}

export default App;


