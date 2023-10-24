import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NavHome from "../home/NavHome";
import DeckList from "../home/DeckList";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function deckData() {
      const abortController = new AbortController();
      const decksAPI = await listDecks(abortController.signal);
      setDecks(decksAPI);
    }
    deckData();
  }, []);

  const deleteDeckById = (deckId) => {
    const result = window.confirm(
      `Do you want to delete this deck? \n \nYou will not be able to recover it.`
    );
    if (result) {
      // Update the state to remove the deleted deck
      setDecks((currentDeck) =>
        currentDeck.filter((deck) => deck.id !== deckId)
      );
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <DeckList decks={decks} deleteDeckById={deleteDeckById} />
          </Route>
          <Route>
            <NavHome deck={decks} />

            {/* <Route path="/decks/:deckId/study">
            <StudyCard />
          </Route>
          <Route exact path="/decks/:deckId">
            <DeckScreen />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route> */}
            {/* <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route component={NotFound} />
          <Route>
            <NotEnough />
          </Route> */}
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
