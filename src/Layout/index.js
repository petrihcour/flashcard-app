import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import DeckList from "../home/DeckList"
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
        </Switch>
        <NotFound />
      </div>
    </>
  );
}

export default Layout;
