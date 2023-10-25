import React, { useState } from "react";
import { useParams, Link, useHistory, useRouteMatch } from "react-router-dom";
import NavHome from "../home/NavHome";
import NotFound from "../Layout/NotFound";

// Study Screen
// path is `/decks/:deckId/study`
// each deck consists of
// deck title, "Study: Rendering in React"
// cards shown one at a time, front-side first
// each card consists of:
// "Card" x of x
// front-side statement
// button that says "Flip"
// once "flip" button clicked, "Next" button
// on last card, "Restart prompt"
// if user does not restart, "click 'Cancel' to return to the Home page

function StudyCard({ decks }) {
  const [cardIndex, setCardIndex] = useState(0);
  const [showFront, setShowFront] = useState(true);

  const history = useHistory();
  const { url } = useRouteMatch();

  const { deckId } = useParams();
  const deck = decks.find((deck) => deck.id === Number(deckId));
  if (!deck) {
    return <NotFound />;
  }
  console.log("Deck: ", deck);
  const card = deck.cards[cardIndex];
  console.log(card);

  const totalCards = deck.cards.length;

  const flipCard = () => {
    setShowFront(!showFront);
  };

  const clickHandler = () => {
    if (cardIndex < totalCards - 1) {
      setCardIndex(cardIndex + 1);
      setShowFront(true);
    } else {
      const restartConfirmed = window.confirm(
        `Restart cards? \n \nClick 'OK' to restart or 'Cancel' to return to the home page.`
      );
      if (restartConfirmed) {
        setCardIndex(0);
        setShowFront(true);
      } else {
        history.push("/");
      }
    }
  };

  if (totalCards > 2) {
    return (
      <div>
        <NavHome deck={deck.name} heading="Study" />
        <h1>Study: {deck.name}</h1>

        <div className="card mx-auto">
          <div className="card-body">
            <h5 className="card-title">
              Card {cardIndex + 1} of {totalCards}{" "}
            </h5>

            <p className="card-text">{showFront ? card.front : card.back}</p>

            <div style={{ display: "flex", justifyContent: "start" }}>
              <button
                className="btn btn-secondary mr-2"
                type="button"
                onClick={flipCard}
              >
                Flip
              </button>
              <button
                className="btn btn-primary"
                type="button"
                style={{ display: showFront ? "none" : "block" }}
                onClick={clickHandler}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <NavHome deck={deck.name} heading="Study" />
      <h1>Study: {deck.name}</h1>
      <h2>Not enough cards.</h2>
      <p>
        You need at least 3 cards to study. There are {totalCards} cards in this
        deck.
      </p>
      <Link to={`${url}/cards/new`} className="btn btn-primary">
          <i className="bi bi-plus"></i> Add Cards
     </Link>
    </div>
  );
}

export default StudyCard;
