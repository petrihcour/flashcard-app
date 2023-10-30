import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { createCard } from "../utils/api";
import NavHome from "../home/NavHome";
import NotFound from "../Layout/NotFound";
import CardForm from "./CardForm";

//// FORM NOT CLEARING WHEN ADDING NEW CARD AND HITTING DONE 

// path is `/decks/:deckId/cards/new`
// title is  `Deck title: Add Card`
// form consists of
// title Front, textarea placeholder "Front side of card"
// title Back, textarea placeholder "Back side of card"
// Done button (goes to Deck Screen)
// Save button (new card created and added to relevant deck & form is cleared and process for adding card is restarted 

function AddCard({ decks }) {
  const initialFormState = {
    front: "",
    back: "",
  };

  const [newCard, setNewCard] = useState(initialFormState);

  const { deckId } = useParams();
  console.log(deckId);

  const deck = decks.find((deck) => deck.id === Number(deckId));
  

  useEffect(() => {
    console.log("Submitted:", newCard)
  }, [newCard]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewCard({
        ...newCard,
        [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    const newCardData = {
        front: newCard.front,
        back: newCard.back,
    };
    await createCard(deckId, newCardData, abortController.signal);
    setNewCard(initialFormState);
  }

  if (!deck) {
    return <NotFound />;
  }

  return (
    <div>
      <NavHome deck={deck.name} heading="Add Card" />
      <h3>{deck.name}: Add Card</h3>
      <CardForm
      cardData={newCard}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      deck={deck}
      />
    </div>
  );
}

export default AddCard;
