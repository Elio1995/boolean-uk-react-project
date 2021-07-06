import React from "react";
import AuthorsList from "./AuthorsList";

function RightMenu() {
  return (
    <section className="right-menu">
      <h2>Biography of the Authors</h2>
      <ul className="biography-list">
        <AuthorsList />
      </ul>
    </section>
  );
}

export default RightMenu;
