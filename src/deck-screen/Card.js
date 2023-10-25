import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

// NEED TO ADD FUNCTIONALITY TO:
// EDIT BUTTON,
// DELETE BUTTON

// each individual card
// shows a question and answer to the question
// has edit button (goes to Edit Card screen)
// delete button (with warning message. )

function Card({ card, deleteCardById }) {
  const { url } = useRouteMatch();
  console.log("Single card:", { card });

  const handleDelete = () => {
    deleteCardById(card.id);
  }

  console.log("Card Id:", card.id);

  return (
    <div className="card mx-auto">
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="d-flex justify-content-between">
              <p className="w-50 mr-3">{card.front}</p>
              <p className="w-50 text-right">{card.back}</p>
            </div>
            <div className="d-flex justify-content-end">
                
              <Link to={`{${url}/cards/${card.id}/edit`} className="btn btn-secondary mr-2">
                <i className="bi bi-pen"></i> Edit
              </Link>

              <button
                type="delete"
                className="btn btn-danger"
                onClick={handleDelete}
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
