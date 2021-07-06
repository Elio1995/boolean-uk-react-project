import React from "react";
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

      <div className="add-book-form">
        <form className="new-book-form" autoComplete="off">
          <h2>Add a Book</h2>
          <label htmlFor="name">Title</label>
          <input type="text" name="name"></input>

          <ul className="genres-form">
            <label htmlFor="genres">Genres</label>
            <li>
              <input name="genres" type="radio"></input>Fantastic
            </li>
            <li>
              <input name="genres" type="radio"></input>Finance
            </li>
            <li>
              <input name="genres" type="radio"></input>Programming
            </li>
            <li>
              <input name="genres" type="radio"></input>Management
            </li>
          </ul>

          <label htmlFor="author">Author</label>
          <input type="text" name="author"></input>

          <label htmlFor="description">Description</label>
          <textarea name="description" rows="5" cols="20"></textarea>

          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default LeftMenu;
