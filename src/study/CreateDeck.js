import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import NavHome from "../home/NavHome";

// NEED TO WORK ON FUNCTIONALITY:
// SUBMIT HANDLER
// ADDS NEW DECK AND SHOWS UP IN DECK SCREEN
// GOES TO HOME SCREEN WHEN HIT CANCEL 

// ----------------------------------------

// path to this screen is `/decks/new`
// title is Create Deck
// a form that consists of
// a name input field type text titled Name w/ placeholder `Deck Name`
// a description textarea text field titled Description w/ placeholder 'Brief description of the deck'
// at bottom of form:
// Cancel button takes user back to Home screen
// Submit button takes user to Deck screen

function CreateDeck() {
    const history = useHistory();
    console.log(history);

    const { url } = useRouteMatch();
    console.log("URL:", { url });

  return (
    <div>
        <NavHome heading="Create Deck" />
      <h1>Create Deck</h1>
      <div className="mb-3">
        <label htmlFor="name" 
        className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Deck Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          placeholder="Brief description of the deck"
          rows="3"
        ></textarea>
      </div>
      <button
              type="button"
              className="btn btn-secondary mr-2"
            //   onClick={() => history.push(`/decks/${deck.id}`)}
            >
             Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => history.push(`/decks/:deckId`)}
            >
            Submit
            </button>
    </div>
  );
}

export default CreateDeck;
