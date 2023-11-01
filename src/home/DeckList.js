import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Deck from "./Deck";

// path is '/'
// top of list of deck is a create deck button that brings user to Create Deck screen
// map through list of decks

function DeckList({ decks, deleteDeckById }) {
  const { url } = useRouteMatch();
  console.log({ url });

  const rows = decks.map((deck) => (
    <Deck
      key={deck.id}
      deck={deck}
      cards={deck.cards || []}
      deleteDeckById={deleteDeckById}
    />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto mb-2">
          <Link to="/decks/new" className="btn btn-secondary mx-auto">
          <i className="bi bi-plus"></i> Create Deck
          </Link>
        </div>
        <div>{rows}</div>
      </div>
    </div>
  );
}

export default DeckList;
