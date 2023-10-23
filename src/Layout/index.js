import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import DeckList from "../home/DeckList";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <NavHome />
          <Route exact path="/">
            <DeckList />
          </Route>
          <Route path="/decks/:deckId/study">
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
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route component={NotFound} />
          <Route>
            <NotEnough />
          </Route>
        </Switch>
      </div> 
    </>
  );
}

export default Layout;
