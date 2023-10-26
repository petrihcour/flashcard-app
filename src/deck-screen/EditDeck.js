import React from "react-router-dom";
import NavHome from "../home/NavHome";

// NOT ROUTING PROPERLY. WHAT DID I DOOO

// path is `/decks/:deckId/edit`
// displays same form as CreateDeck.js, except it's prefilled with information for existing deck using `readDeck()` function from `src/utils/api/index.js`
// cancel button (goes to Deck screen)
// Submit button

function EditDeck({ deck, deckId }) {
    const { name, description } = deck;
    console.log(name);

    console.log({deckId})

    return (
        <div>
            <NavHome deck="deck name"heading="Edit Deck" />
            <h1>Edit Deck</h1>
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
          value={name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          name="name"
          value={name}
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
            //   onClick={() => history.push(`/decks/:deckId`)}
            >
            Submit
            </button>
        </div>
    )
}

export default EditDeck;