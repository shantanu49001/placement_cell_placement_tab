import React from "react";
import "./Cards1.css";
import { cardsData202221 } from "../../Data/Data1";

import Card from "../Card1/Card1";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData202221.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
             barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
