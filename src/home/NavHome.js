import React from "react";
import { useLocation, Link } from "react-router-dom";

// navigation at top of all screens not on home page / error messages
// links to Home `/`
// nav on top includes title name of each necessary component

function NavHome({ deck }) {
  const location = useLocation();
  const shouldRender = location.pathname !== "/";

  if (shouldRender) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
            <i className="bi bi-house-door-fill"></i> 
            Home
            </Link>
          </li>
          {deck && (<li className="breadcrumb-item">
            {deck.name}
          </li>)}
          <li className="breadcrumb-item active" aria-current="page">
            heading
          </li>
        </ol>
      </nav>
    );
  }
  return null;
}

export default NavHome;
