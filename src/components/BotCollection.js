import React, {useState ,useEffect} from "react";

function BotCollection() {
  const[botData , setBotData]= useState([]);
  // // Your code here

  useEffect(()=> {
    fetch("http://localhost:8002/bots")
    .then((r)=> r.json())
    .then((botData)=> setBotData(botData))
  },)
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        <BotCollection botData={botData}/>
      </div>
    </div>
  );
}

export default BotCollection;
