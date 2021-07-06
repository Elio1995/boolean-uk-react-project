import React from "react";
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
  const selectedAuthor = useStore((store) => store.selectedAuthor);
  const selectedBook = useStore((store) => store.selectedBook);

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
          <MainPage />
        </Route>
        <Route path="/bookdetails-page">
          <BookDetails />
        </Route>
        <Route exact path="/authors-page">
          <AuthorsPage />
        </Route>
        <Route path="/favouritesRead-page">
          <FavouritesReadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
