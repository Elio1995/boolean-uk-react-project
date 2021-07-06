import React from "react";
import { useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import useStore from "./store";
import { Route, Redirect, Switch } from "react-router-dom";
import FavouritesReadPage from "./pages/FavouritesReadPage";

function App() {
  const fetchGenres = useStore((store) => store.fetchGenres);
  const fetchAuthors = useStore((store) => store.fetchAuthors);
  const fetchBooks = useStore((store) => store.fetchBooks);
  useEffect(() => {
    fetchGenres();
    fetchAuthors();
    fetchBooks();
  }, []);

  return (
    <div className="all-file">
      <Switch>
        <Route exact path="/">
          <Redirect to="/main-page" />
        </Route>
        <Route path="/main-page">
          <MainPage />
        </Route>
        <Route path="/favouriteRead-page">
          <FavouritesReadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
