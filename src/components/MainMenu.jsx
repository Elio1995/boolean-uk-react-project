import React from "react";
import useStore from "../store";

function MainMenu() {
  const books = useStore((store) => store.books);
  const isSelectedBook = useStore((store) => store.inSelectedBook);
  const filterBooks = useStore((store) => store.filterBooks);
  console.log("filter book", filterBooks);
  return (
    <main className="main-section">
      <ul className="list-cards">
        {filterBooks.length !== 0
          ? filterBooks.map((book) => (
              <button onClick={() => isSelectedBook(book)}>
                <li key={book.id} className="card">
                  <div>
                    <img
                      src={book.image}
                      className="card-image"
                      alt={book.title}
                    ></img>
                    <h3>{book.title}</h3>
                    <p>By {book.author}</p>
                  </div>
                </li>
              </button>
            ))
          : books.map((book) => (
              <button onClick={() => isSelectedBook(book)}>
                <li key={book.id} className="card">
                  <div>
                    <img
                      src={book.image}
                      className="card-image"
                      alt={book.title}
                    ></img>
                    <h3>{book.title}</h3>
                    <p>By {book.author}</p>
                  </div>
                </li>
              </button>
            ))}
      </ul>
    </main>
  );
}

export default MainMenu;
