// src/widgets/Card/CardGenerator.jsx
import React, { useEffect } from "react";
import CardTemplate from "./CardTemplate";
import { useCard } from "./CardContext";

const CardGenerator = (Component, defaultCardData) => {
  return (props) => {
    const { cardData, updateCard } = useCard();

    // Initialize the card with default data only if it's empty
    useEffect(() => {
      if (!cardData || Object.keys(cardData).length === 0) {
        updateCard(defaultCardData);
      }
    }, [defaultCardData, cardData, updateCard]);

    return (
      <div>
        <CardTemplate data={cardData} />
        <Component {...props} />
      </div>
    );
  };
};

export default CardGenerator;
