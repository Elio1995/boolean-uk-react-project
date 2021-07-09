import React from "react";
import Form from "./Form";
import GenresList from "./GenresList";

function LeftMenu() {
  return (
    <section className="left-menu">
      <div>
        <ul className="genres-filter-list">
          <label htmlFor="author">
            <h2>Filter by Genres</h2>
          </label>
          <GenresList />
        </ul>
      </div>
      <Form />
    </section>
  );
}

export default LeftMenu;
