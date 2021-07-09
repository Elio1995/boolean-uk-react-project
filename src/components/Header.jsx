import { Link } from "react-router-dom";
import useStore from "../store";

import React from "react";

function Header() {
  const updateSearchBooks = useStore((store) => store.updateSearchBooks);
  const currentUser = useStore((store) => store.currentUser);
  const logout = useStore((store) => store.logout);

  if (!currentUser) return null;

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
        <button className="favourite-readButton">Favourite and Read</button>
      </Link>
      <div className="header-profile">
        <img
          className="avatar"
          width="40"
          height="40"
          src={currentUser.avatar}
          alt=""
        />
        <h3>
          {currentUser.firstName} {currentUser.lastName}
        </h3>
        <button className="logout-button" onClick={logout}>
          Log Out
        </button>
      </div>
      <input
        type="search"
        className="search-header"
        placeholder="Search"
        onChange={(e) => {
          updateSearchBooks(e.target.value);
        }}
      ></input>
    </header>
  );
}

export default Header;
