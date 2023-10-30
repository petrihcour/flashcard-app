import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import NavHome from "../home/NavHome";

// path is `/decks/:deckId/edit`
// displays same form as CreateDeck.js, except it's prefilled with information for existing deck using `readDeck()` function from `src/utils/api/index.js`
// cancel button (goes to Deck screen)
// Submit button

function EditDeck({ decks }) {
  const [deck, setDeck] = useState({ name: "", description: "" });
  const { deckId } = useParams();
  console.log(deckId);
  const history = useHistory();

  console.log(deck);

  useEffect(() => {
    const abortController = new AbortController();
    async function readDeckData() {
      const readDeckAPI = await readDeck(deckId, abortController.signal);
      setDeck(readDeckAPI);
    }
    readDeckData();
  }, [deckId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDeck({
      ...deck,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const updated = await updateDeck({
        ...deck, 
        name: deck.name,
        description: deck.description,
    }, abortController.signal)
    setDeck(updated);
    history.push(`/decks/${deck.id}`)
  }

  return (
    <div>
      <NavHome deck={decks.name} heading="Edit Deck" />
      <h1>Edit Deck</h1>
      <form name="edit" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          onChange={handleChange}
          value={deck.name}
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
          onChange={handleChange}
          value={deck.description}
          rows="3"
        ></textarea>
      </div>
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
        Cancel
      </Link>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
      </form>
    </div>
  );
}

export default EditDeck;
