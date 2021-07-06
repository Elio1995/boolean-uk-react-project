import React from "react";
import GenresList from "./GenresList";

function LeftMenu() {
  return (
    <section className="left-menu">
      <div>
        <ul class="genres-filter-list">
          <label for="author">Filter by Genres</label>
          <GenresList />
        </ul>
      </div>

      <div class="add-book-form">
        <form class="new-book-form" autocomplete="off">
          <h2>Add a Book</h2>
          <label for="name">Title</label>
          <input type="text" name="name"></input>

          <ul class="genres-form">
            <label for="genres">Genres</label>
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

          <label for="author">Author</label>
          <input type="text" name="author"></input>

          <label for="description">Description</label>
          <textarea name="description" rows="5" cols="20"></textarea>

          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default LeftMenu;
