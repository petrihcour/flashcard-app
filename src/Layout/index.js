import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";
import Header from "./Header";
import DeckList from "../home/DeckList";
import CreateDeck from "../study/CreateDeck";
import EditDeck from "../deck-screen/EditDeck";
import AddCard from "../deck-screen/AddCard";
import StudyCard from "../study/StudyCard";
import DeckScreen from "../deck-screen/DeckScreen";
import EditCard from "../deck-screen/EditCard";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);

  // access list of Decks
  useEffect(() => {
    const abortController = new AbortController();
    async function deckData() {
      try {
        const decksAPI = await listDecks(abortController.signal);
        setDecks(decksAPI);
      } catch (error) {
        console.error(error);
      }
    }

    deckData();
  }, []);

  // CreateDeck component. auto render home screen without having to do a manual refresh
  const updateDecks = (newDeck) => {
    setDecks([...decks, newDeck]);
  };

  const deleteDeckById = async (deckId) => {
    const abortController = new AbortController();
    const result = window.confirm(
      `Do you want to delete this deck? \n \nYou will not be able to recover it.`
    );
    if (result) {
      console.log("Deleting deck with ID:", deckId);
      try {
        await deleteDeck(deckId, abortController.signal);
        // Update the state to remove the deleted deck
        // setDecks((currentDeck) =>
        //   currentDeck.filter((deck) => deck.id !== deckId)
        // );
        const decksAPI = await listDecks(abortController.signal);
        setDecks(decksAPI);
        // history.push("/");
      } catch (error) {
        console.error("Error deleting deck:", error);
      }
    }
  };

  return (
    <main>
      <Header />
      <div className="container">
        <Switch>
          {/* main routes  */}
          <Route exact path="/">
            <DeckList decks={decks} deleteDeckById={deleteDeckById} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck decks={decks} updateDecks={updateDecks} />
          </Route>

          {/* deck routes */}
          <Route exact path="/decks/:deckId">
            <DeckScreen deleteDeckById={deleteDeckById} />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck decks={decks} />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>

          {/* card routes */}
          <Route exact path="/decks/:deckId/study">
            <StudyCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </main>
  );
}

export default Layout;
