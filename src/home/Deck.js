import React from "react";

// create a deck
// each deck shows:
// the deck name,
// the number of cards,
// and the View, Study, and Delete button
// clicking View button brings user to the Deck screen
// clicking Study button brings user to Study screen
// clicking Delete button shows warning message before deleting deck
// // // delete handler needed

function Deck() {
  return (
      <div className="card w-75 mb-3 mx-auto">
        <div className="card-body">
          <div className="deck d-flex justify-content-between">
            <h5 className="card-title">Decks name</h5>
            <p className="card-text">Cards length</p>
          </div>
          <p className="card-text">Decks description Decks description Decks description Decks description Decks description Decks description Decks description Decks description</p>

          <div className="d-flex justify-content-between">
            <div>
              <button type="button" className="btn btn-secondary mr-2">
                <i className="bi bi-eye"></i> View
              </button>
              <button type="button" className="btn btn-primary">
                <i className="bi bi-eyeglasses"></i> Study
              </button>
            </div>
            <div className="d-flex justify-content-end">
              <button type="delete" className="btn btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Deck;
