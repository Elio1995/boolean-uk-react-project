import React from "react";
import useStore from "../store";

function Form() {
  const setBooks = useStore((store) => store.setBooks);
  const books = useStore((store) => store.books);

  function addBooks(newBook) {
    setBooks([...books, newBook]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newBook = {
      title: event.target.name.value,
      subtitle: event.target.subtitle.value,
      genre: {
        name: event.target.genres.value,
      },
      author: event.target.author.value,
      description: event.target.description.value,
      image: event.target.image.value,
      page: "unknown",
      published: "unknown",
      isbn: "unknown",
      publisher: "unknown",
      website: "unknown",
    };
    console.log("New Book", newBook);

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        addBooks(data);
      });

    event.target.reset();
  }

  return (
    <div className="add-book-form">
      <form
        onSubmit={handleSubmit}
        className="new-book-form"
        autoComplete="off"
      >
        <h2>Add a Book</h2>
        <h3> Title</h3>
        <label htmlFor="name">
          <input type="text" name="name"></input>
        </label>
        <h3>Subtitle</h3>
        <label htmlFor="subtitle">
          <input type="text" name="subtitle"></input>
        </label>
        <h3>Image</h3>
        <label htmlFor="image">
          <input type="url" name="image"></input>
        </label>

        <ul className="genres-form">
          <h3>Genres</h3>
          <li>
            <label htmlFor="genres">
              {" "}
              <input
                name="genres"
                value="Fantastic"
                type="radio"
                // checked={books.genre.name === "1"}
              ></input>
              Fantastic
            </label>
          </li>
          <li>
            <label htmlFor="genres">
              {" "}
              <input
                name="genres"
                value="Finance"
                type="radio"
                // checked={books.genre.name === "2"}
              ></input>
              Finance
            </label>
          </li>
          <li>
            <label htmlFor="genres">
              {" "}
              <input
                name="genres"
                value="Programming"
                type="radio"
                // checked={books.genre.name === "3"}
              ></input>
              Programming
            </label>
          </li>
          <li>
            <label htmlFor="genres">
              {" "}
              <input
                name="genres"
                value="Management"
                type="radio"
                // checked={books.genre.name === "4"}
              ></input>
              Management
            </label>
          </li>
        </ul>

        <label htmlFor="author">Author</label>
        <input type="text" name="author"></input>

        <label htmlFor="description">Description</label>
        <textarea name="description" rows="5" cols="20"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
