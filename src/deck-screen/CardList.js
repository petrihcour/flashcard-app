import React from "react";
import Card from "./Card";

// title is "Cards"
// map through the cards

function CardList({ deck, cards, setDeck }) {
  if (!cards) {
    return <p>No cards available.</p>;
  }
  const rowOfCards = cards.map((card) => (
    <Card key={card.id} deck={deck} card={card} setDeck={setDeck} />
  ));

  return (
    <>
      <div className="mt-4">
        <h3>Cards</h3>
        <div>{rowOfCards}</div>
      </div>
    </>
  );
}

export default CardList;
