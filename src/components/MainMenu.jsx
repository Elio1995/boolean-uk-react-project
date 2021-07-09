import React, { useEffect, useState } from "react";
import useStore from "../store";

function MainMenu({ addBookstoFavourites }) {
  const books = useStore((store) => store.books);
  const setBooks = useStore((store) => store.setBooks);
  const isSelectedBook = useStore((store) => store.inSelectedBook);
  const getFilteredBooks = useStore((store) => store.getFilteredBooks);
  const genre = useStore((store) => store.genre);
  const searchBooks = useStore((store) => store.searchBooks);

  const [filterBooks, setFilterBooks] = useState(books);

  function removeBook(targetBookId) {
    fetch(`http://localhost:3000/books/${targetBookId}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        const updatedBooks = books.filter((book) => book.id !== targetBookId);
        setBooks(updatedBooks);
      }
    });
  }

  console.log("books", books);
  const updateFilterBooks = getFilteredBooks();
  // const filterBooks = getFilteredBooks();
  useEffect(() => {
    const updateFilterBooks = getFilteredBooks();
    setFilterBooks(updateFilterBooks);
  }, [genre, searchBooks]);

  return (
    <main className="main-section">
      <div className="top-section">
        <ul className="list-cards">
          {filterBooks.length !== 0
            ? updateFilterBooks.map((book) => (
                <li key={book.id} className="card">
                  <button className="card" onClick={() => isSelectedBook(book)}>
                    <div>
                      <img
                        src={book.image}
                        className="card-image"
                        alt={book.title}
                      ></img>
                      <h3>{book.title}</h3>
                      <p>By {book.author}</p>
                    </div>
                  </button>
                  <button
                    className="add-button"
                    onClick={() => {
                      addBookstoFavourites(book.id);
                    }}
                  >
                    Add to Favourites
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => {
                      removeBook(book.id);
                    }}
                  >
                    X
                  </button>
                </li>
              ))
            : books.map((book) => (
                <li key={book.id} className="card">
                  <button className="card" onClick={() => isSelectedBook(book)}>
                    <div>
                      <img
                        src={book.image}
                        className="card-image"
                        alt={book.title}
                      ></img>
                      <h3>{book.title}</h3>
                      <p>By {book.author}</p>
                    </div>
                  </button>
                  <button
                    className="add-button"
                    onClick={() => {
                      addBookstoFavourites(book.id);
                    }}
                  >
                    Add to Favourites
                  </button>
                  <button
                    className="remove-button"
                    onClick={() => {
                      removeBook(book.id);
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
        </ul>
      </div>
    </main>
  );
}

export default MainMenu;
