import React from "react";
import Deck from "./Deck";


// path is '/'
// top of list of deck is a create deck button that brings user to Create Deck screen
// map through list of decks

function DeckList({ decks }) {


  const rows = decks.map((deck) => <Deck key={deck.id} deck={deck} cards={deck.cards} />);

  return (
    <div className="container">
    <div className="row">
        <div className="mx-auto mb-2">
      <button type="button" className="btn btn-secondary mx-auto">
        <i className="bi bi-plus"></i> Create Deck
      </button>
      </div>
      <div>
        {rows}
      </div>
    </div>
    </div>
  );
}

export default DeckList;
