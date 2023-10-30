import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";
import NavHome from "../home/NavHome";
import NotFound from "../Layout/NotFound";

// path is `/decks/:deckId/cards/:cardId/edit`
// use readDeck function (contains card to be edited) and readCard function (load the card to edit)
// title "Edit Card"
// breadcrumb at top has '/' link to home, name of deck that card is in, and "Edit Card :cardId"
// displays same form as AddCard screen, except it's prefilled with info for existing card
// Cancel and Save button goes to Deck Screen

function EditCard({ decks }) {
  const [card, setCard] = useState({ front: "", back: "" });

  const { deckId, cardId } = useParams();
  console.log("Deck ID:", deckId);
  console.log("Card ID:", cardId);
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    async function readCardData() {
      const readCardAPI = await readCard(cardId, abortController.signal);
      setCard(readCardAPI);
    }
    readCardData();
  }, [cardId]);

  const deck = decks.find((deck) => deck.id === Number(deckId));
  if (!deck) {
    return <NotFound />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCard({
        ...card,
        [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const updated = await updateCard({
        ...card,
        front: card.front,
        back: card.back,
    }, abortController.signal);
    setCard(updated);
    history.push(`/decks/${deck.id}`)
  }

  return (
    <div>
      <NavHome deck={deck.name} heading={`Edit Card ${cardId}`} />
      <form name="create" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="front" className="form-label">
            Front
          </label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            placeholder="Front side of card"
            onChange={handleChange}
            value={card.front}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="back" className="form-label">
            Back
          </label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            placeholder="Back side of card"
            onChange={handleChange}
            value={card.back}
            rows="3"
          ></textarea>
        </div>
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-2">
          Done
        </Link>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditCard;
