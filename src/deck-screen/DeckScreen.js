import React from "react";
import { useParams, useHistory, Link, useRouteMatch } from "react-router-dom";
import CardList from "./CardList";
import NavHome from "../home/NavHome";
import NotFound from "../Layout/NotFound";

// NEED TO ADD FUNCTIONALITY TO:
// EDIT BUTTON,
// STUDY BUTTON,
// ADD CARDS BUTTON

// path is `/decks/:deckId`
// deck name at the top and deck description
// edit button (edit deck screen)
// study button (studycard screen)
// add cards button (add card screen)
// delete button (shows warning message before deleting)
// will take in cardlist.js

function DeckScreen({ decks, deleteDeckById, deleteCardById }) {
  const history = useHistory();
  const { url } = useRouteMatch();
  const { deckId } = useParams();
  console.log({ deckId });
  console.log("DeckScreen:", { url });

  const deck = decks.find((deck) => deck.id === Number(deckId));

  if (!deck) {
    return <NotFound />;
  }

  const handleDelete = () => {
    deleteDeckById(deck.id);
    history.push("/");
  };

  console.log("current deck", deck);

  return (
    <div>
      <NavHome deck={deck.name} />
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div className="deck d-flex justify-content-between">
        <div>
          <Link to={`${url}/edit`} className="btn btn-secondary mr-2">
            <i className="bi bi-pen"></i> Edit
          </Link>

          <Link to={`${url}/study`} className="btn btn-primary mr-2">
            <i className="bi bi-eyeglasses"></i> Study
          </Link>

          <Link to={`${url}/cards/new`} className="btn btn-secondary">
          <i className="bi bi-plus"></i> Add Cards
          </Link>

        </div>
        <div className="d-flex justify-content-end">
          <button
            type="delete"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>

      <CardList
        cards={deck.cards}
        deck={deck}
        deleteCardById={deleteCardById}
      />
    </div>
  );
}

export default DeckScreen;
