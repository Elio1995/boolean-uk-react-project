import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import useStore from "./store";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import FavouritesReadPage from "./pages/FavouritesReadPage";
import AuthorsPage from "./pages/AuthorsPage";
import BookDetails from "./pages/BookDetails";

function App() {
  const fetchGenres = useStore((store) => store.fetchGenres);
  const fetchAuthors = useStore((store) => store.fetchAuthors);
  const fetchBooks = useStore((store) => store.fetchBooks);
  const books = useStore((store) => store.books);
  const selectedAuthor = useStore((store) => store.selectedAuthor);
  const selectedBook = useStore((store) => store.selectedBook);

  const [favouriteBooks, setFavouriteBooks] = useState([
    "5b21ca3eeb7f6fbccd471815",
  ]);
  const [readBooks, setReadBooks] = useState(["5b21ca3eeb7f6fbccd471815"]);

  function addBookstoFavourites(bookId) {
    const bookFound = favouriteBooks.find(
      (favouriteBook) => favouriteBook === bookId
    );
    if (bookFound === undefined) {
      setFavouriteBooks([...favouriteBooks, bookId]);
      console.log("favourite", favouriteBooks);
    }
  }

  function addBookstoRead(bookId) {
    const bookFound = readBooks.find((readBook) => readBook === bookId);
    if (bookFound === undefined) {
      setReadBooks([...readBooks, bookId]);
      console.log("read", readBooks);
    }
  }

  function removeFavouriteBook(bookId) {
    const bookFoundInFavourite = favouriteBooks.find(
      (favouriteBook) => favouriteBook.id !== bookId
    );
    if (bookFoundInFavourite !== undefined) {
      const listUpdated = favouriteBooks.filter(
        (favouriteBook) => favouriteBook.id !== bookId
      );
      setFavouriteBooks(listUpdated);
    }
  }

  const history = useHistory();

  useEffect(() => {
    fetchGenres();
    fetchAuthors();
    fetchBooks();
  }, []);

  useEffect(() => {
    if (selectedAuthor) {
      history.push("/authors-page");
    } else {
      history.push("/main-page");
    }
  }, [selectedAuthor, history]);

  useEffect(() => {
    if (selectedBook) {
      history.push("/bookdetails-page");
    } else {
      history.push("/main-page");
    }
  }, [selectedBook, history]);

  return (
    <div className="all-file">
      <Switch>
        <Route exact path="/">
          <Redirect to="/main-page" />
        </Route>
        <Route path="/main-page">
          <MainPage addBookstoFavourites={addBookstoFavourites} />
        </Route>
        <Route path="/bookdetails-page">
          <BookDetails />
        </Route>
        <Route exact path="/authors-page">
          <AuthorsPage />
        </Route>
        <Route path="/favouritesRead-page">
          <FavouritesReadPage
            favouriteBooks={favouriteBooks}
            readBooks={readBooks}
            addBookstoRead={addBookstoRead}
            removeFavouriteBook={removeFavouriteBook}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
