import { Link } from "react-router-dom";

import React from "react";

function Header() {
  return (
    <header className="header-top">
      <img
        alt="logo"
        src="https://st2.depositphotos.com/1378583/5228/v/950/depositphotos_52283153-stock-illustration-hand-book-logo.jpg"
        className="logo"
      ></img>
      <h2>BOOK CABIN</h2>
      <Link to="/favouritesRead-page">
        {" "}
        <button>Favourite and Read</button>
      </Link>
      <input
        type="search"
        className="search-header"
        placeholder="Search"
      ></input>
    </header>
  );
}

export default Header;
