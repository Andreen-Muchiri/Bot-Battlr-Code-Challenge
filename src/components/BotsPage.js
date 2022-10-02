import React , {useState} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage({botData, setBotData , setViewBotData}) {
  //start here with your code for step one
  const[botContainer , setBotContainer]=useState([]);
  //start here with your code for step one

  //Adds a bot to their service
const addBot  = (bot) => {
  const botInContainer = botContainer.find((item) => item.id === bot.id);
    if (!botInContainer){
      setBotContainer([...botContainer, bot]);
    }
}

//Remove a bot from service
const releaseBot = (bot) => {
  const botInContainer = botContainer.find((item) => item.id === bot.id);
    if (botInContainer){
      setBotContainer(
        botContainer.filter((filteredBot)=> filteredBot.id !== bot.id)
      );
    }
}

//Discharge bot from  their service forever 
const dischargeBot = (bot) => {
  setBotData(botData.filter((item)=> item.id !== bot.id));
  releaseBot(bot)
  fetch (`http://localhost:8002/bots/${bot.id}`, {
    method: "DELETE",
    headers: {
      "Content-Type" : "application/json",
    },
  });
  setViewBotData(true);
}
 return (
    <div>
      <YourBotArmy botContainer={botContainer} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection botData={botData} addBot={addBot} dischargeBot={dischargeBot} />
    </div>
  )
}

 

export default BotsPage;
