import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Deck from "./Deck";
import { listDecks } from "../utils/api"; 
import "../App.css";

function DeckList({ deleteDeckById }) {
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    setLoading(true);

    listDecks(abortController.signal)
      .then((data) => {
        setDecks(data);
      })
      .catch((err) => {
        console.error("Error fetching decks: ", err);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => abortController.abort();
  }, []);

  const rows = decks.map((deck) => (
    <Deck
      key={deck.id}
      deck={deck}
      cards={deck.cards || []}
      deleteDeckById={deleteDeckById}
    />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="mx-auto">
          <div className="d-flex justify-content-center align-items-center mb-2">
            <Link to="/decks/new" className="btn btn-secondary mx-auto">
              <i className="bi bi-plus"></i> Create Deck
            </Link>
          </div>
          {loading ? (
            <div className="loading-container">
              <div className="loading-spinner"></div>
            </div>
          ) : (
            <div>{rows}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeckList;
