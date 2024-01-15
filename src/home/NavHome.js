import React from "react";
import { Link } from "react-router-dom";

// navigation at top of all screens not on home page / error messages
// links to Home `/`
// nav on top includes title name of each necessary component

function NavHome({ deck, heading, children }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-9 mb-4 mx-auto">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">
                  <i className="bi bi-house-door-fill"></i> Home
                </Link>
              </li>

              {deck && <li className="breadcrumb-item active">{deck}</li>}

              {heading && (
                <li className="breadcrumb-item active" aria-current="page">
                  {heading}
                </li>
              )}
            </ol>
          </nav>
          {children}
        </div>
      </div>
    </div>
  );
}

export default NavHome;
