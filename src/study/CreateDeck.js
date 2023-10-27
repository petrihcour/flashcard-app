import React, { useState } from "react";
import { useHistory, useRouteMatch, Link } from "react-router-dom";
import NavHome from "../home/NavHome";

// NEED TO WORK ON FUNCTIONALITY:
// SUBMIT HANDLER
// ADDS NEW DECK AND SHOWS UP IN DECK SCREEN
// NEED TO WORK ON ABOVE 

// ----------------------------------------

// path to this screen is `/decks/new`
// title is Create Deck
// a form that consists of
// a name input field type text titled Name w/ placeholder `Deck Name`
// a description textarea text field titled Description w/ placeholder 'Brief description of the deck'
// at bottom of form:
// Cancel button takes user back to Home screen
// Submit button takes user to Deck screen

function CreateDeck({ createDeck }) {
    const initialFormState = {
        name: "",
        description: "",
    }

    const [newDeck, setNewDeck] = useState(initialFormState);

    const history = useHistory();
    console.log(history);

    const { url } = useRouteMatch();
    console.log("URL:", { url });

    const handleChange = (event) => {
        const value = event.target.value;
        setNewDeck({
            ...newDeck,
            [event.target.name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted", newDeck);
        const deckId = Date.now();
        const deckWithId = { ...newDeck, id: deckId}
        createDeck(deckWithId);
        setNewDeck(initialFormState)
        history.push(`/decks/${deckId}`)
        console.log(deckId)
    }

  return (
    <div>
        <NavHome heading="Create Deck" />
      <h1>Create Deck</h1>
      <form name="create" onSubmit={handleSubmit}>
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
          onChange={handleChange}
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
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
            <Link to="/"
            className="btn btn-secondary mr-2"
            >
                Cancel
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
            //   onClick={() => history.push(`/decks/:deckId`)}
            >
            Submit
            </button>
            </form>
    </div>
  );
}

export default CreateDeck;
