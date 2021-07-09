import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import MainPage from "./pages/MainPage";
import useStore from "./store";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
import FavouritesReadPage from "./pages/FavouritesReadPage";
import AuthorsPage from "./pages/AuthorsPage";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";

function App() {
  const fetchGenres = useStore((store) => store.fetchGenres);
  const fetchAuthors = useStore((store) => store.fetchAuthors);
  const fetchBooks = useStore((store) => store.fetchBooks);
  const fetchUsers = useStore((store) => store.fetchUsers);
  const books = useStore((store) => store.books);
  const selectedAuthor = useStore((store) => store.selectedAuthor);
  const selectedBook = useStore((store) => store.selectedBook);
  const currentUser = useStore((store) => store.currentUser);

  const [favouriteBooks, setFavouriteBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  function addBookstoFavourites(bookId) {
    let newFavourite = {
      bookId: bookId,
      read: false,
      userId: currentUser.id,
    };
    console.log("New Book", newFavourite);

    fetch("http://localhost:3000/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFavourite),
    })
      .then((resp) => resp.json())
      .then((data) => setFavouriteBooks([...favouriteBooks, data]));
  }

  useEffect(() => {
    if (currentUser === null) return;
    fetch(`http://localhost:3000/favourites?userId=${currentUser.id}`)
      .then((resp) => resp.json())
      .then((favouriteArray) => {
        setFavouriteBooks(favouriteArray);
      });
  }, [currentUser]);

  function addBookstoRead(bookId) {
    const bookFound = readBooks.find((readBook) => readBook === bookId);
    if (bookFound === undefined) {
      setReadBooks([...readBooks, bookId]);
      console.log("read", readBooks);
    }
  }

  function removeFavouriteBook(targetFavouriteBookId, id) {
    fetch(`http://localhost:3000/favourites/${id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        const updatedFavouriteBooks = favouriteBooks.filter(
          (targetFavourite) => targetFavourite.id !== targetFavouriteBookId
        );
        setFavouriteBooks(updatedFavouriteBooks);
        console.log(updatedFavouriteBooks);
      }
    });
  }

  // function removeFavouriteBook(bookId) {
  //   const bookFoundInFavourite = favouriteBooks.find(
  //     (favouriteBook) => favouriteBook === bookId
  //   );
  //   if (bookFoundInFavourite !== undefined) {
  //     const listFavouriteUpdated = favouriteBooks.filter(
  //       (favouriteBook) => favouriteBook !== bookId
  //     );
  //     setFavouriteBooks(listFavouriteUpdated);
  //   }
  // }

  function removeReadBook(bookId) {
    const bookFoundInRead = readBooks.find((readBook) => readBook === bookId);
    if (bookFoundInRead !== undefined) {
      const listReadUpdated = readBooks.filter(
        (readBook) => readBook !== bookId
      );
      setReadBooks(listReadUpdated);
    }
  }

  const history = useHistory();

  useEffect(() => {
    fetchGenres();
    fetchAuthors();
    fetchBooks();
    fetchUsers();
  }, []);

  useEffect(() => {
    if (selectedAuthor) {
      history.push("/authors-page");
    }
    // else {
    //   history.push("/login");
    // }
  }, [selectedAuthor, history]);

  useEffect(() => {
    if (selectedBook) {
      history.push("/bookdetails-page");
    }
    // else {
    //   history.push("/login");
    // }
  }, [selectedBook, history]);

  useEffect(() => {
    if (currentUser) {
      history.push("/main-page");
    } else {
      history.push("/login");
    }
  }, [currentUser, history]);

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <div className="all-file">
        <Route path="/main-page">
          <MainPage addBookstoFavourites={addBookstoFavourites} />
        </Route>
        <Route path="/bookdetails-page">
          <BookDetails />
        </Route>
        <Route path="/authors-page">
          <AuthorsPage />
        </Route>
        <Route path="/favouritesRead-page">
          <FavouritesReadPage
            favouriteBooks={favouriteBooks}
            readBooks={readBooks}
            addBookstoRead={addBookstoRead}
            removeFavouriteBook={removeFavouriteBook}
            removeReadBook={removeReadBook}
          />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
