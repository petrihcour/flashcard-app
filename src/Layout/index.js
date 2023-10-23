import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import DeckList from "../home/DeckList";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState();

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route>
            <DeckList />
          </Route>
          <Route>
            <StudyCard />
          </Route>
          <Route>
            <DeckScreen />
          </Route>
          <Route>
            <CreateDeck />
          </Route>
          <Route>
            <EditDeck />
          </Route>
          <Route>
            <AddCard />
          </Route>
          <Route>
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
          <Route>
            <NotEnough />
          </Route>
        </Switch>
        <NavHome />
      </div>
    </>
  );
}

export default Layout;
