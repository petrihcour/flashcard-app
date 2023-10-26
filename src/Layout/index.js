import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api";
import Header from "./Header";
import DeckList from "../home/DeckList";
import CreateDeck from "../study/CreateDeck";
import StudyCard from "../study/StudyCard";
import DeckScreen from "../deck-screen/DeckScreen";
import EditDeck from "../deck-screen/EditDeck";
// import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);

  // access list of Decks
  useEffect(() => {
    const abortController = new AbortController();
    async function deckData() {
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

          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>

          <Route path="/decks/:deckId/study">
            <StudyCard decks={decks} />
          </Route>

          <Route exact path="/decks/:deckId">
            <DeckScreen
              deleteDeckById={deleteDeckById}
            />
          </Route>
          {/* <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route> */}
          {/* <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route component={NotFound} />
           */}
        </Switch>
      </div>
    </>
  );
}

export default Layout;
