import React from "react";
import Deck from "./Deck";

// path is '/'
// top of list of deck is a create deck button that brings user to Create Deck screen
// map through list of decks

function DeckList() {
    // DELETE THIS WHEN I START WITH FUNCTIONALITY vvvv
    const mockDecks = [
        { id: 1, name: "Deck 1", cards: [] },
        { id: 2, name: "Deck 2", cards: [] },
        { id: 3, name: "Deck 3", cards: [] },
      ];
      const decks = mockDecks;

      
  const rows = decks.map((deck) => <Deck key={deck.id} deck={deck} />);

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
