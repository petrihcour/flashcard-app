import React from "react-router-dom";
import Card from "./Card";

// title is "Cards"
// map through the cards

function CardList({ cards, deck, deleteCardById }) {

    if (!cards) {
        return <p>No cards available.</p>;
      }
  const rowOfCards = cards.map((card) => (
    <Card 
    key={card.id} 
    deck={deck} 
    card={card}
    deleteCardById={deleteCardById} 
    />
  ));

  return (
    <div className="mt-4">
      <h3>Cards</h3>
      <div>{rowOfCards}</div>
    </div>
  );
}

export default CardList;
