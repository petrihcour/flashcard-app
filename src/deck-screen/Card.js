import React from "react";
import { useParams } from "react-router-dom";

// NEED TO ADD FUNCTIONALITY TO:
// EDIT BUTTON,
// DELETE BUTTON

// each individual card
// shows a question and answer to the question
// has edit button (goes to Edit Card screen)
// delete button (with warning message. )

function Card({ card, deck }) {
  const { cardId } = useParams();
  console.log({ cardId })
  console.log("Single card:", { card });
  

  return (
    <div className="card mx-auto">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
            <p className="mr-5">{card.front}</p>
            <p className="ml-4">{card.back}</p>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-secondary mr-2"
                //   onClick={() => history.push(`/decks/${deck.id}`)}
              >
                <i className="bi bi-pen"></i> Edit
              </button>
              <button
                type="delete"
                className="btn btn-danger"
                // onClick={handleDelete}
              >
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
