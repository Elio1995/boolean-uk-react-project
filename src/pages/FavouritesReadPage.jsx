import React from "react";
import useStore from "../store";
import Header from "../components/Header";

function FavouritesReadPage({
  favouriteBooks,
  readBooks,
  addBookstoRead,
  removeFavouriteBook,
  removeReadBook,
}) {
  const books = useStore((store) => store.books);
  const findBookById = useStore((store) => store.findBookById);
  return (
    <>
      <Header />
      <div className="space"></div>
      <div className="patoto">
        <div className="favourite-list">
          <h2>Favourite Books</h2>
          <ul>
            {favouriteBooks.map((favouriteBook) => {
              const book = findBookById(favouriteBook.bookId);
              console.log("BOOK", book);
              return (
                <li>
                  <div className="favourite-page-card">
                    <img
                      height="300px"
                      width="300px"
                      src={book.image}
                      className="selected-card-image"
                      alt=""
                    ></img>
                    <h2>{book.title}</h2>
                    <h3>By {book.author}</h3>
                    <button
                      className="add-button"
                      onClick={() => {
                        addBookstoRead(book.id);
                      }}
                    >
                      Read!
                    </button>
                    {/* <button
                      className="remove-button"
                      onClick={() => {
                        removeFavouriteBook(book.id, favouriteBook.id);
                      }}
                    >
                      X
                    </button> */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="read-list">
          <h2>Read Books</h2>
          <ul>
            {readBooks.map((readBook) => {
              const book = findBookById(readBook);
              return (
                <li>
                  <div className="favourite-page-card">
                    <img
                      height="300px"
                      width="300px"
                      src={book.image}
                      className="selected-card-image"
                      alt=""
                    ></img>
                    <h2>{book.title}</h2>
                    <h3>By {book.author}</h3>
                    <button
                      className="remove-button"
                      onClick={() => {
                        removeReadBook(book.id);
                      }}
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
export default FavouritesReadPage;
