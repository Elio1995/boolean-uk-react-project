import React from "react";
import useStore from "../store";
import Form from "./Form";
import GenresList from "./GenresList";

function LeftMenu() {
  return (
    <section className="left-menu">
      <div>
        <ul className="genres-filter-list">
          <label htmlFor="author">Filter by Genres</label>
          <GenresList />
        </ul>
      </div>
      <Form />
    </section>
  );
}

export default LeftMenu;
