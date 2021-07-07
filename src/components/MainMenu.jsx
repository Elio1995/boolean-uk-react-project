import React from "react";
import useStore from "../store";

function MainMenu({ addBookstoFavourites }) {
  const books = useStore((store) => store.books);
  const setBooks = useStore((store) => store.setBooks);
  const isSelectedBook = useStore((store) => store.inSelectedBook);
  const filterBooks = useStore((store) => store.filterBooks);

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

  return (
    <main className="main-section">
      <ul className="list-cards">
        {filterBooks.length !== 0
          ? filterBooks.map((book) => (
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
                  onClick={() => {
                    addBookstoFavourites(book.id);
                  }}
                >
                  Add to Favourites
                </button>
                <button
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
                  onClick={() => {
                    addBookstoFavourites(book.id);
                  }}
                >
                  Add to Favourites
                </button>
                <button
                  onClick={() => {
                    removeBook(book.id);
                  }}
                >
                  X
                </button>
              </li>
            ))}
      </ul>
    </main>
  );
}

export default MainMenu;
