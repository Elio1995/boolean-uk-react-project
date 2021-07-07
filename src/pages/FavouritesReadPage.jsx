import React from "react";
import useStore from "../store";
import Header from "../components/Header";

function FavouritesReadPage({
  favouriteBooks,
  readBooks,
  addBookstoRead,
  removeFavouriteBook,
}) {
  const books = useStore((store) => store.books);
  const findBookById = useStore((store) => store.findBookById);
  return (
    <div>
      <Header />;
      <ul>
        {favouriteBooks.map((favouriteBook) => {
          const book = findBookById(favouriteBook);
          return (
            <li>
              <div className="favourite-page-card">
                <h2>{book.title}</h2>
                <img
                  height="500px"
                  width="500px"
                  src={book.image}
                  className="selected-card-image"
                  alt=""
                ></img>
                <h3>By {book.author}</h3>
                <button
                  onClick={() => {
                    addBookstoRead(book.id);
                  }}
                >
                  It is read!
                </button>
                <button
                  onClick={() => {
                    removeFavouriteBook(book.id);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <ul>
        {readBooks.map((readBook) => {
          const book = findBookById(readBook);
          return (
            <li>
              <div className="favourite-page-card">
                <h2>{book.title}</h2>
                <img
                  height="500px"
                  width="500px"
                  src={book.image}
                  className="selected-card-image"
                  alt=""
                ></img>
                <h3>By {book.author}</h3>
                <button>X</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default FavouritesReadPage;
