import React from "react";
import { useParams, useHistory } from "react-router-dom";
import NavHome from "../home/NavHome";
import NotFound from "../Layout/NotFound";

// path is `/decks/:deckId`
// deck name at the top and deck description
// edit button (edit deck screen)
// study button (studycard screen)
// add cards button (add card screen)
// delete button (shows warning message before deleting)
// will take in cardlist.js

function DeckScreen({ decks, deleteDeckById }) {
  const history = useHistory();
  const { deckId } = useParams();
  console.log({ deckId });

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
      <NavHome heading={deck.name} />
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div className="deck d-flex justify-content-between">
        <div>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            //   onClick={() => history.push(`/decks/${deck.id}`)}
          >
            <i className="bi bi-pen"></i> Edit
          </button>
          <button
            type="button"
            className="btn btn-primary mr-2"
            //   onClick={() => history.push(`/decks/${deck.id}/study`)}
          >
            <i className="bi bi-eyeglasses"></i> Study
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            // onClick={() => history.push("/decks/new")}
          >
            <i className="bi bi-plus"></i> Add Cards
          </button>
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
    </div>
  );
}

export default DeckScreen;
