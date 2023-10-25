import React from "react";
import { useParams } from "react-router-dom";
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
    const { deckId } = useParams();
    console.log({deckId})

    const deck = decks.find((deck) => deck.id === Number(deckId));

    if (!deck) {
        return <NotFound />;
      }

    return (
        <div>
            <NavHome deck={deck.name} heading="Study" />

            <h1>Study: {deck.name}</h1>
        </div>
    )
}

export default StudyCard;