// src/widgets/Card/CardContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create a Context for the Card
const CardContext = createContext();

// Custom Hook to use the Card context
export const useCard = () => useContext(CardContext);

// Provider Component
export const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    title: "Default Title",
    description: "Default Description",
    content: "Default Content",
    footer: "Default Footer",
  });

  // Function to dynamically update card data
  const updateCard = (newCardData) => {
    setCardData(newCardData);
  };

  return (
    <CardContext.Provider value={{ cardData, updateCard }}>
      {children}
    </CardContext.Provider>
  );
};
