import React, { useState, useEffect } from "react";
import { Switch, Route, useParams } from "react-router-dom";
import { listDecks } from "../utils/api";
import { readDeck } from "../utils/api";
import Header from "./Header";
import DeckList from "../home/DeckList";
import CreateDeck from "../study/CreateDeck";
import DeckScreen from "../deck-screen/DeckScreen";
// import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [deck, setDeck] = useState();
  // const [cards, setCards] = useState([]);

  const { deckId } = useParams();

  // access list of Decks
  useEffect(() => {
    const abortController = new AbortController();
    async function deckData() {
      const decksAPI = await listDecks(abortController.signal);
      setDecks(decksAPI);
    }

    async function loadDeckData() {
      if (deckId) {
          const deckAPI = await readDeck(deckId, abortController.signal)
          setDeck(deckAPI);
        } 
      
    }
    deckData();
    loadDeckData();
  }, [deckId]);


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

          {/* <Route path="/decks/:deckId/study">
            <StudyCard />
          </Route> */}
          <Route path="/decks/:deckId">
            <DeckScreen decks={decks} deleteDeckById={deleteDeckById} />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          {/* <Route path="/decks/:deckId/edit">
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
        </Switch>
      </div>
    </>
  );
}

export default Layout;
