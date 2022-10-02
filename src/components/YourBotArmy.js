import React from "react";
import BotCard from "./BotCard";


function YourBotArmy({botContainer,releaseBot,dischargeBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botContainer.map((bot) => {
            return (
              <BotCard
              key={`${bot.id}${bot.name}`}
              bot={bot}
              handleBots={releaseBot}
              dischargeBot={dischargeBot} />
            )
          })}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
