import React from "react";
import { useHistory, useRouteMatch, Switch, Route } from "react-router-dom";
import Deck from "./Deck";
import CreateDeck from "../study/CreateDeck";
// import CreateDeck from "../study/CreateDeck";
// import DeckScreen from "../deck-screen/DeckScreen";
// import StudyCard from "../study/StudyCard";

// path is '/'
// top of list of deck is a create deck button that brings user to Create Deck screen
// map through list of decks

function DeckList({ decks, deleteDeckById }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  console.log({ url });

  const rows = decks.map((deck, index) => (
    <Deck
      key={deck.id}
      deck={deck}
      cards={deck.cards}
      deleteDeckById={deleteDeckById}
    />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto mb-2">
          <button
            type="button"
            className="btn btn-secondary mx-auto"
            onClick={() => history.push("/decks/new")}
          >
            <i className="bi bi-plus"></i> Create Deck
          </button>
        </div>
        <div>{rows}</div>
      </div>
      {/* <Switch>
        <Route exact path={`${url}/decks/new`}>
          <CreateDeck />
        </Route>
        {/* <Route path="/decks/:deckId">
            <DeckScreen />
        </Route>
        <Route path={`/decks/:deckId/study`}>
            <StudyCard />
        </Route> */}
      {/* </Switch> */} 
    </div>
  );
}

export default DeckList;
